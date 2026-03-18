---

slug: pod

title: The Hidden Life of a Kubernetes Pod

authors: [vinh]

tags: [Kubernetes]

---

# The Hidden Life of a Kubernetes Pod

## 1. Pod doesn't exist

If you SSH into a Kubernetes worker node and run:

```bash
ps aux | grep pod
```

You won't see anything. There is no process named *pod*, no binary called *pod*, and no kernel object called *pod*. The Linux kernel doesn't know what a Pod is.

So what is a Pod?

Documentation often says:

> Pod is the smallest deployable unit in Kubernetes.

That is correct, but it doesn't really help when debugging production issues. A Platform/DevOps engineer should think about it differently:

> A Pod is not an object. A Pod is an environment contract.

More specifically, a Pod is essentially a collection of Linux primitives assembled by the kubelet:

```mermaid
graph LR
    subgraph Pod ["A Pod = Linux Sandbox"]
        NS["Namespaces\n(pid, net, mnt, ipc, uts)"]
        CG["Cgroups\n(cpu, memory limits)"]
        MNT["Volume Mounts\n(bind mount via CSI)"]
        NET["Network Interface\n(veth pair via CNI)"]
        RT["Container Runtime\n(containerd / CRI-O)"]
    end
    Kubelet["Kubelet"] -->|"Assembles"| Pod
```

Kubernetes doesn't actually *create a Pod*. Instead, it assembles Linux building blocks into a single execution sandbox.

> **Better mental model:** Pod = Linux isolation bundle

Instead of thinking `Pod → container group`, think `Pod → Linux environment`. It is similar to a lightweight VM built from kernel primitives, but without a hypervisor or guest OS — only namespaces and cgroups.

## 2. The Big Picture: End-to-End Pod Lifecycle

Instead of thinking in sequential time, it's better to think about the **technical layers** a Pod passes through before it becomes a running process on a Node.

```mermaid
sequenceDiagram
    participant U as User (kubectl)
    participant A as API Server
    participant E as ETCD (Database)
    participant S as Scheduler
    participant K as Kubelet (Node)
    participant CSI as CSI (Storage Plugin)
    participant CRI as CRI (Container Runtime)
    participant CNI as CNI (Network Plugin)
    Note over U, A: 1. Control Plane Persistence
    U->>A: kubectl apply -f pod.yaml
    A->>E: Store PodSpec (Pending)
    Note over A, S: 2. Scheduling Decision
    S->>A: Watch: Any Pod without a Node?
    S->>A: Select best Node & "Bind" Pod to Node
    A->>E: Update: spec.nodeName = <node>
    Note over A, K: 3. Node-Level Construction
    K->>A: Watch: New Pod assigned to my Node?
    K->>CSI: Prepare Storage: Mount Volumes
    K->>CRI: The Foundation: Create Pod Sandbox (Pause)
    CRI->>CNI: The Wiring: Setup Network (IP, Veth)
    K->>CRI: The Layers: Pull Image & Create App Container
    K->>CRI: The Ignition: Start Container
    Note over K, A: 4. Runtime Execution
    K->>A: Report: Pod Status = Running
```

### Key Lifecycle Milestones

*   **Control Plane Persistence**: The Pod exists only as a "legal document" in ETCD. No containers exist yet; this is purely **desired state storage**.

*   **Scheduling Decision**: The Scheduler selects a Node and updates `spec.nodeName`. Still no containers; this is only a **placement decision**.

*   **Node-Level Construction**: Kubelet calls **CRI**, **CNI**, and **CSI** to build the environment. Kubernetes moves from **cluster decision** to **Linux construction**.

*   **Runtime Execution**: Once sandbox, networking, and volumes are ready, the Pod transitions to **Running**. The Linux isolation bundle becomes real.

At a high level, this lifecycle appears straightforward.

However, each milestone hides a complex set of Kubernetes control loops and Linux kernel mechanisms.

To truly understand how a Pod works, we need to start with how the control plane makes its decisions.

## 3. Control Plane Internals: How Kubernetes Decides

Before a Pod can run, Kubernetes must first make several decisions.

When you create a new Pod, nothing happens immediately on the Worker Node: no containers, no networking, and no volumes are created. At this stage, Kubernetes is only making decisions. All of these processes happen in the Control Plane.

The Control Plane does not run workloads. It only answers two questions:

* What does this Pod need?
* Where should this Pod run?

```mermaid
graph LR
    subgraph ControlPlane ["Control Plane"]
        User["1. kubectl apply"] --> API("API Server")
        API <-->|"2. Store (Pending)"| ETCD[("ETCD")]
        Sched["Scheduler"] -->|"3. Watch Pending"| API
        Sched -->|"5. Bind: minikube"| API
    end
    Sched -->|"4. Filter & Score Nodes"| Sched
```

This 6-step flow perfectly explains the timeline:
1. **Request:** User submits the Pod manifest via `kubectl`.
2. **Storage:** API Server validates and persists the "Pending" object into ETCD.
3. **Watch:** The Scheduler continuously watches the API Server for unassigned Pods.
4. **Scoring:** Scheduler reviews available nodes and picks the best one (e.g., `minikube`).
5. **Binding:** Scheduler sends a Bind request back to the API Server.
6. **Persistence:** API Server updates the Pod's `nodeName` field in ETCD. Now the Node's Kubelet will take over.

### 3.1 API Server: The only gateway of Kubernetes

Every Pod starts with an API request:

```bash
kubectl apply -f pod.yaml
```

This command does not create a container.

Instead, it sends an HTTP request to the API Server. The API Server will:

* authenticate the request
* authorize the request
* validate the schema
* run admission controllers
* apply default values

Only after passing all these steps is the Pod persisted.

Important principle:

**Kubernetes always stores the desired state before creating the runtime state.**

### 3.2 etcd: Source of truth of Kubernetes

After validation, the PodSpec is stored in etcd. You can verify this directly:

``` bash
kubectl exec -n kube-system etcd-minikube -- etcdctl get /registry/pods/default/lab-internals
```

Result:

```json
{
  "apiVersion": "v1",
  "kind": "Pod",
  "metadata": {
    "name": "lab-internals",
    "namespace": "default",
    "uid": "774770ad-9fd6-463d-aa60-7f25a3a8e989"
  },
  "spec": {
    "containers": [
      {
        "name": "nginx-container",
        "image": "nginx",
        "resources": {
          "limits": { "cpu": "200m", "memory": "128Mi" },
          "requests": { "cpu": "100m", "memory": "64Mi" }
        }
      }
    ],
    "nodeName": "minikube"
  }
}
```

The important thing you should know: At this time, pod is just a record in database. It includes `container spec`, `resource request`, `metadata`. But no process, no network, no filesystem.

### 3.3 Scheduler: the brain decide placement

The Scheduler continuously watches for Pods that are not yet assigned to a Node.

Its main responsibility is to select the most appropriate Node.

This process has two phases:

* `Filtering phase`: Filter out nodes that do not meet the requirements: CPU, RAM, Lables, Taints. Only keep eligible nodes.
* `Scoring phase`: The remaining nodes are scored based on: `Resource availibility`, `Spreading`, `Topology constraints`.  The node with the highest score will be selected.

You can verify this decision:

```bash
kubectl get events
```

Example:

```bash
Successfully assigned default/lab-internals to minikube
```

### Key takeaway

The control plane never creates containers. It only makes placement and configuration decisions. Actual execution begins only when the Kubelet reconciles the Pod on the assigned Node.

## 4. Node Execution Internals: How Kubelet Builds a Pod

Once the Scheduler assigns a Pod to a Node, responsibility shifts to the Kubelet. The Kubelet turns a PodSpec from a JSON document into an actual runtime environment on the Node. Unlike what many engineers assume, the Kubelet does not directly start containers. Instead, it communicates with the container runtime through the **Container Runtime Interface (CRI)**. At this stage Kubernetes moves from **cluster-level decision to node-level execution**.

```mermaid
graph LR
    subgraph Node ["Worker Node (minikube)"]
        K["Kubelet Loop"] -->|"1. Call"| CRI["CRI (containerd)"]
        CRI -->|"2. Create"| Pause["Pause Container\n(PID: 5879)"]
        Pause -->|"3. Delegate"| CNI["CNI Plugin"]
        CNI -->|"4. Assign"| IP["Pod IP: 10.244.0.3"]
        Pause -->|"3. Delegate"| CSI["CSI Driver"]
        CSI -->|"4. Mount"| Vol["Volumes"]
        CRI -->|"5. Start"| App["App Container (nginx)"]
    end
```

### 4.1 Kubelet reconciliation loop

The Kubelet continuously watches the API Server for Pods assigned to its Node and compares the desired state with the actual state. If the Pod does not exist yet, it begins the creation process. Conceptually this looks like:

```
Watch PodSpec
→ Compare desired vs actual state
→ Create missing components
→ Report status
→ Repeat
```

This process is called the **reconciliation loop**, one of the core design patterns of Kubernetes. The key idea is that Kubelet does not "run Pods"; it continuously tries to make reality match the specification.

### 4.2 CRI: How Kubelet talks to the container runtime

Kubelet does not create containers itself. Instead, it communicates with runtimes such as **containerd** or **CRI-O** through CRI. The CRI exposes operations like RunPodSandbox, CreateContainer, StartContainer, and StopContainer. A typical creation sequence looks like:

```
RunPodSandbox
→ Setup networking
→ Pull images
→ Create containers
→ Start containers
```

The surprising detail is the first step: Kubernetes does not start the application container first. It starts the **Pod Sandbox**.

### 4.3 PodSandbox: The hidden foundation of every Pod

Before any application container starts, Kubernetes creates a special container called the **pause container**. Most engineers never notice it, but it is the most important container in the Pod. Its purpose is not to run application code but to hold Linux namespaces alive. You can observe it using:

```bash
crictl ps
```

or:

```bash
docker ps
```

Typically it appears as something like:

```
k8s_POD_lab-internals
```

### 4.4 Why Kubernetes needs the pause container

This design comes from a fundamental Linux rule: a namespace exists only while at least one process is attached to it. If the last process exits, the namespace disappears. Kubernetes needs the Pod network and IPC environment to survive container restarts, so it creates a minimal container whose only job is to keep these namespaces alive. The pause container therefore acts as a **namespace anchor process**.

### 4.5 How containers join the Pod environment

Once the pause container establishes the namespaces, application containers are started and attached to those namespaces. From Linux's perspective, they are simply processes inside the same isolation environment. This explains why containers inside a Pod can communicate via localhost, share network interfaces, and use IPC mechanisms.

You can verify namespace sharing:

```bash
lsns -p <pid>
```

Example:

```
PID   COMMAND   TYPE
6340  nginx     mnt, uts, pid
5879  pause     net, ipc
```

### 4.6 Pod creation order inside the Node

The typical creation order looks like:

```
Create PodSandbox
→ Setup networking
→ Pull image
→ Create container
→ Start process
```

This explains why a Pod IP usually does not change when a container restarts. The network namespace belongs to the pause container rather than the application container, which keeps the Pod networking stable.

### Key takeaway

Kubelet does not simply start containers. It first constructs an execution environment and then places containers inside it. The pause container acts as the invisible foundation that keeps the Pod environment stable even when application containers restart.

## 5. Linux Primitives: How the Kernel Implements a Pod

So far we have seen how Kubernetes decides where a Pod should run and how Kubelet constructs the execution environment. But Kubernetes itself does not provide isolation. All isolation is actually implemented by the Linux kernel.

In reality, a Pod is just a combination of several Linux primitives working together:

```
Namespaces → isolation
Cgroups → resource control
Filesystem mounts → storage
```

Kubernetes does not invent new isolation mechanisms. It orchestrates existing Linux features.

---

### 5.1 Namespaces: How Kubernetes isolates environments

Linux namespaces are the foundation of container isolation. They allow processes to have separate views of system resources.

```mermaid
graph LR
    subgraph Pod ["Pod (lab-internals)"]
        Pause["Pause Container\n(PID: 5879)"] -.-|"Anchors"| NET["NET Namespace\n(eth0, IP: 10.244.0.3)"]
        Pause -.-|"Anchors"| IPC["IPC Namespace"]
        App["nginx Container\n(PID: 6340)"] -.-|"Joins"| NET
        App -.-|"Joins"| IPC
        App -->|"Owns"| MNT["MNT Namespace"]
    end
```

The most important namespaces used by Pods are:

* **PID namespace** → process isolation
* **NET namespace** → network isolation
* **MNT namespace** → filesystem isolation
* **IPC namespace** → inter-process communication
* **UTS namespace** → hostname isolation

This is how multiple Pods can run on the same Node without interfering with each other.

You can verify this directly:

```bash
lsns -p <container_pid>
```

Example:

```
PID   COMMAND   TYPE
6340  nginx     mnt, uts, pid
5879  pause     net, ipc
```

This shows how different containers share or own different namespaces. The pause container typically holds the network namespace, while application containers join it.

From the kernel perspective, a Pod is simply a group of processes attached to the same namespaces.

---

### 5.2 Cgroups: How Kubernetes enforces resource limits

While namespaces isolate environments, **cgroups control how much resources a Pod can use.**

When you define resource limits:

```yaml
resources:
  limits:
    cpu: 200m
    memory: 128Mi
```

Kubernetes does not enforce this itself. Instead, Kubelet translates these limits into Linux cgroup constraints.

You can see this mapping:

```bash
tree /sys/fs/cgroup/kubepods.slice -L 3
```

Example structure:

```
kubepods.slice
├── kubepods-besteffort.slice
├── kubepods-burstable.slice
│   └── kubepods-burstable-pod774770ad.slice
│       ├── memory.max
│       ├── cpu.max
│       ├── pause container
│       └── nginx container
└── kubepods-guaranteed.slice
```

This hierarchy reflects Kubernetes QoS classes:

* **Guaranteed** → highest priority
* **Burstable** → medium priority
* **BestEffort** → lowest priority

When the Node runs out of memory, the Linux OOM Killer uses this hierarchy to decide which Pods to terminate first.

This shows an important truth:

Resource limits in Kubernetes are not abstract settings.

They become actual kernel enforcement rules.

---

### 5.3 Storage: How volumes become filesystem mounts

Storage in Kubernetes is also implemented using basic Linux filesystem operations. When a Pod requests a volume, Kubelet works with CSI drivers to attach the storage and then mounts it into the container filesystem.

You can observe this:

```bash
docker inspect <container_id>
```

Example mounts:

```
Source:
/var/lib/kubelet/pods/<uid>/volumes/...
Destination:
/var/run/secrets/kubernetes.io/serviceaccount
```

This reveals an important implementation detail:

Kubernetes does not copy files into containers.

It uses **bind mounts** to map directories from the host into the container filesystem.

Typical mounts include:

* ServiceAccount tokens
* ConfigMaps
* Secrets
* `/etc/hosts`
* termination logs

From Linux's perspective, these are just mount operations inside the container's mount namespace.

---

### 5.4 Mapping Kubernetes concepts to Linux reality

Every Kubernetes abstraction maps directly to a Linux primitive:

| Kubernetes Concept | Linux Implementation | syscall / interface |
| ------------------ | -------------------- | ------------------- |
| Pod                | Namespace bundle     | `clone()` with NS flags |
| Container limits   | Cgroups              | `/sys/fs/cgroup/` |
| Volume             | Bind mount           | `mount --bind` |
| Pod network        | Network namespace    | `ip netns` |
| Service (ClusterIP)| iptables DNAT rule   | `iptables -t nat` |

> **The core insight:** Kubernetes does not *create* resources. It *programs Linux*.
> Every Pod is just a group of processes sharing namespaces and cgroups — assembled by Kubelet, enforced by the kernel.

---

### Key takeaway

A Pod is not a native Linux object. It is a carefully constructed environment built from namespaces, cgroups, and mounts. Kubernetes provides orchestration logic, but the actual isolation and enforcement are performed entirely by the Linux kernel.

## 6. Network Internals: How Packets Actually Reach a Pod

Kubernetes networking is not magic. It is **Linux networking automated by CNI and kube-proxy**. The full chain:

```
Pod eth0 → veth pair → bridge → routing table → iptables → conntrack → destination
```

---

### 6.1 The Virtual Cable: veth pair

When CNI sets up a Pod's network, it creates a **veth pair** — a virtual cable with two ends. One end lives inside the Pod's network namespace; the other lives on the host.

**Step 1: Inspect from inside the Pod (entering via PID 5879):**

```bash
sudo nsenter -t 5879 -n ip link
```

```
2: eth0@if6: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP
    link/ether 02:42:0a:f4:00:03 brd ff:ff:ff:ff:ff:ff link-netnsid 0
```

`eth0@if6` means: the Pod's `eth0` has interface index **2**, and its other end is interface index **6** on the host. The `@if6` is the cross-namespace pointer.

**Step 2: Verify from the host:**

```bash
ip link | grep "^6:"
```

```
6: veth1cac321@if2: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master bridge state UP
```

`veth1cac321@if2` confirms the peer. `@if2` points back to interface index 2 (the Pod's `eth0`). The `master bridge` tells us this veth is plugged into the Linux bridge.

```mermaid
graph LR
    subgraph PodNS ["Pod Network Namespace (nsenter -t 5879)"]
        eth0["eth0 (index 2)\n02:42:0a:f4:00:03\n10.244.0.3"]
    end
    subgraph HostNS ["Host Root Namespace"]
        veth["veth1cac321 (index 6)\nmaster: bridge"]
        Bridge["bridge\n(10.244.0.1)\nLinux L2 Switch"]
    end
    eth0 <-->|"veth pair\n(virtual cable)"| veth
    veth --- Bridge
```

**CNI config driving this setup** (`/etc/cni/net.d/1-k8s.conflist`):

```json
{
  "name": "bridge",
  "type": "bridge",
  "bridge": "bridge",
  "ipam": { "type": "host-local", "subnet": "10.244.0.0/16" }
}
```

---

### 6.2 Routing: How a packet knows where to go

**Inside the Pod:**

```bash
sudo nsenter -t 5879 -n ip route
```

```
default via 10.244.0.1 dev eth0
10.244.0.0/16 dev eth0 proto kernel scope link src 10.244.0.3
```

Any traffic leaving the Pod hits `eth0`, goes over the veth cable to the bridge at `10.244.0.1` (the default gateway).

**On the host Node:**

```bash
ip route | grep bridge
```

```
10.244.0.0/16 dev bridge proto kernel scope link src 10.244.0.1
```

The `bridge` interface **is** the gateway `10.244.0.1`. It receives packets from all Pod veths and decides where to forward them next.

```mermaid
graph LR
    subgraph Node ["Worker Node (minikube)"]
        PodA["Pod A\n10.244.0.3"] -->|"default via 10.244.0.1"| vethA["veth1cac321"]
        PodB["Pod B\n10.244.0.4"] -->|"default via 10.244.0.1"| vethB["vethxxxx"]
        vethA --- Bridge["bridge\n10.244.0.1\n(virtual L2 switch)"]
        vethB --- Bridge
    end
    Bridge -->|"10.244.0.0/16"| Ext["External / Internet\n192.168.49.2 (Node eth0)"]
```

---

### 6.3 Inbound: The iptables DNAT trick (Service → Pod)

A Kubernetes Service IP (ClusterIP) does not exist as a real interface anywhere. It is a **virtual IP maintained purely by iptables rules** written by `kube-proxy`.

When you call `10.109.174.153:80` (Service), the kernel intercepts the packet and rewrites the destination:

```bash
sudo iptables -t nat -S | grep HL5LMXD
```

The 4-step iptables chain:

| Step | Chain | What happens |
|------|-------|--------------|
| 1 | `KUBE-SVC-HL5LMXD...` | kube-proxy creates a dedicated chain per Service |
| 2 | `KUBE-SERVICES -d 10.109.174.153/32 -j KUBE-SVC-HL5...` | If dst = Service IP → jump into that chain |
| 3 | `KUBE-SVC-HL5... -j KUBE-SEP-PU7AOS...` | Select an Endpoint (Pod), jump to its chain |
| 4 | `KUBE-SEP-... -j DNAT --to-destination 10.244.0.3:80` | **Rewrite dst IP from Service → Pod** |

```mermaid
sequenceDiagram
    participant C as Client (192.168.49.1)
    participant K as Kernel / iptables
    participant P as Pod (10.244.0.3:80)
    C->>K: SYN dst=10.109.174.153:80
    Note over K: KUBE-SERVICES → KUBE-SVC → KUBE-SEP<br/>DNAT: rewrite dst → 10.244.0.3:80
    K->>P: SYN dst=10.244.0.3:80
    P-->>K: SYN-ACK src=10.244.0.3
    Note over K: conntrack: rewrite src back to 10.109.174.153
    K-->>C: SYN-ACK src=10.109.174.153:80
```

**Conntrack records the translation** so return traffic can be reversed:

```bash
sudo conntrack -L | grep 10.109.174.153
```

```
tcp 6 120 ESTABLISHED src=192.168.49.1 dst=10.109.174.153 sport=54321 dport=80
                       src=10.244.0.3   dst=192.168.49.1   sport=80   dport=54321 [ASSURED]
```

Read this as two sides of the same connection: the kernel remembers both the forward translation (Service → Pod) and the reverse (Pod reply → Client sees Service IP).

---

### 6.4 Outbound: SNAT / Masquerade (Pod → Internet)

Pod IPs (`10.244.x.x`) are private and not routable on the internet. When a Pod calls out, the kernel must **replace the source IP** with the Node's IP.

```bash
sudo iptables -t nat -S KUBE-POSTROUTING
```

```
-A KUBE-POSTROUTING -m comment --comment "kubernetes service traffic requiring SNAT" -j MASQUERADE
```

Conntrack records the outbound SNAT:

```bash
sudo conntrack -L | grep 10.244.0.3
```

```
tcp 6 119 TIME_WAIT src=10.244.0.3 dst=142.250.199.78 sport=45678 dport=80
                    src=142.250.199.78 dst=192.168.49.2 [ASSURED]
```

- Forward: Pod (`10.244.0.3`) → Google (`142.250.199.78`)
- Reverse: Google replies to Node IP (`192.168.49.2`) → kernel looks up conntrack → delivers to Pod (`10.244.0.3`)

```mermaid
graph LR
    subgraph PodSpace ["Pod (10.244.0.3)"]
        App["App Process"]
    end
    subgraph NodeSpace ["Node (192.168.49.2)"]
        MASQ["iptables MASQUERADE\n(POSTROUTING chain)"]
        CT["Conntrack Table\n10.244.0.3 ↔ 192.168.49.2"]
    end
    App -->|"src=10.244.0.3"| MASQ
    MASQ -->|"src rewritten → 192.168.49.2"| Internet(("Internet\n142.250.199.78"))
    Internet -->|"reply to 192.168.49.2"| CT
    CT -->|"restore src → 10.244.0.3"| App
```

---

### 6.5 DNS: CoreDNS and the ndots:5 trap

Every Pod has its DNS pre-configured by Kubelet at startup:

```bash
kubectl exec lab-internals -- cat /etc/resolv.conf
```

```
nameserver 10.96.0.10
search default.svc.cluster.local svc.cluster.local cluster.local
options ndots:5
```

`10.96.0.10` is the ClusterIP of CoreDNS:

```bash
kubectl get svc -n kube-system kube-dns
```

```
NAME       TYPE        CLUSTER-IP    PORT(S)
kube-dns   ClusterIP   10.96.0.10    53/UDP, 53/TCP
```

```mermaid
sequenceDiagram
    participant App as App in Pod
    participant Res as /etc/resolv.conf
    participant DNS as CoreDNS (10.96.0.10)
    App->>Res: resolve "database"
    Note over Res: ndots:5 → fewer than 5 dots → try search domains first
    Res->>DNS: database.default.svc.cluster.local?
    DNS-->>App: 10.244.0.100 (Service ClusterIP)
```

**The `ndots:5` trap:** If a hostname has fewer than 5 dots, the resolver tries each `search` domain suffix before going external. So `google.com` (1 dot) triggers:

1. `google.com.default.svc.cluster.local` → NXDOMAIN
2. `google.com.svc.cluster.local` → NXDOMAIN
3. `google.com.cluster.local` → NXDOMAIN
4. `google.com` → resolved externally

This causes **3 wasted DNS round-trips** before every external lookup. Fix: use `google.com.` (trailing dot = FQDN, skip search domains entirely).

---

### 6.6 Full picture: End-to-end packet flow

```mermaid
graph LR
    subgraph Client ["Client (192.168.49.1)"]
        C["curl 10.109.174.153:80"]
    end
    subgraph Node ["Worker Node (minikube / 192.168.49.2)"]
        IPT["iptables DNAT\n10.109.174.153→10.244.0.3"]
        CT["Conntrack Table"]
        Bridge["bridge (10.244.0.1)"]
        veth["veth1cac321"]
    end
    subgraph PodNS ["Pod NS (10.244.0.3)"]
        eth0["eth0"]
        Nginx["nginx :80"]
    end
    C -->|"dst=10.109.174.153"| IPT
    IPT -->|"DNAT: dst=10.244.0.3"| CT
    CT --> Bridge
    Bridge --> veth
    veth <-->|"veth pair"| eth0
    eth0 --> Nginx
    Nginx -->|"reply"| eth0
    eth0 <-->|"veth pair"| veth
    veth --> Bridge
    Bridge --> CT
    CT -->|"un-DNAT: src=10.109.174.153"| C
```

> Kubernetes only programs the rules. Linux executes them.

---

## Key takeaway

Kubernetes networking is not a separate networking stack. It is a set of Linux networking rules created dynamically through CNI and kube-proxy. Packets move through veth interfaces, bridges, routing tables, NAT rules, and conntrack state tables before reaching containers.

Understanding this mapping explains most Kubernetes networking issues.

---

## 7. References & Further Reading

For those who want to dive even deeper into the primitives discussed in this post:

- **Kubernetes Documentation:** [Pod Lifecycle](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/) and [Service Networking](https://kubernetes.io/docs/concepts/services-networking/service/)
- **CNI Specification:** [GitHub - containernetworking/cni](https://github.com/containernetworking/cni/blob/master/SPEC.md)
- **Linux Manuals:** `man namespaces(7)`, `man cgroups(7)`, `man iptables(8)`
- **CoreDNS:** [Official Website](https://coredns.io/)
- **Project Calico:** [The IPtables Data Plane](https://www.projectcalico.org/iptables-data-plane/)
- **Julia Evans' Zines:** Excellent visual guides on [Networking](https://jvns.ca/networking-zine.pdf) and [Containers](https://jvns.ca/blog/2016/10/10/what-even-is-a-container/).
