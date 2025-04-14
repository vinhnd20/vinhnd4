"use strict";(self.webpackChunkmy_personal_website=self.webpackChunkmy_personal_website||[]).push([[5141],{1512:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var i=s(5555),t=s(4848),r=s(8453);const l={slug:"mcp-know-how",title:"Understanding Model Context Protocol (MCP)",authors:["vinh"],tags:["AI","DevSecOps","MCP"]},o="Understanding Model Context Protocol (MCP)",a={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"1. What is Model Context Protocol?",id:"1-what-is-model-context-protocol",level:2},{value:"1.1 Concept",id:"11-concept",level:3},{value:"1.2 Why Do We Need MCP?",id:"12-why-do-we-need-mcp",level:3},{value:"Illustrative Example",id:"illustrative-example",level:4},{value:"1.3 Comparing MCP with Traditional APIs",id:"13-comparing-mcp-with-traditional-apis",level:3},{value:"2. MCP Architecture Overview",id:"2-mcp-architecture-overview",level:2},{value:"2.1 General Architecture",id:"21-general-architecture",level:3},{value:"Key Components of MCP",id:"key-components-of-mcp",level:4},{value:"Connections to External Systems",id:"connections-to-external-systems",level:4},{value:"Communication Process Details",id:"communication-process-details",level:4},{value:"3. Real-World Applications",id:"3-real-world-applications",level:2},{value:"3.1 MCP Architecture in Practical Applications",id:"31-mcp-architecture-in-practical-applications",level:3},{value:"Analysis of Components in the Diagram",id:"analysis-of-components-in-the-diagram",level:4},{value:"Practical Example",id:"practical-example",level:4},{value:"3.2 Current Limitations of MCP",id:"32-current-limitations-of-mcp",level:3},{value:"References",id:"references",level:2}];function d(e){const n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"As artificial intelligence (AI) continues to advance rapidly, a growing number of intelligent models such as Claude, GPT-4, and Gemini have emerged. However, connecting each of these AI models to external data sources and tools is often a complex and time-consuming process, requiring significant effort to establish and maintain individual integrations."}),"\n",(0,t.jsxs)(n.p,{children:["To address this challenge, the ",(0,t.jsx)(n.strong,{children:"Model Context Protocol (MCP)"})," was introduced as a standardized solution, simplifying the integration of AI models with external tools and data, making the process more efficient and seamless."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#understanding-model-context-protocol-mcp",children:"Understanding Model Context Protocol (MCP)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#introduction",children:"Introduction"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#table-of-contents",children:"Table of Contents"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#1-what-is-model-context-protocol",children:"1. What is Model Context Protocol?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#11-concept",children:"1.1 Concept"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#12-why-do-we-need-mcp",children:"1.2 Why Do We Need MCP?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#illustrative-example",children:"Illustrative Example"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#13-comparing-mcp-with-traditional-apis",children:"1.3 Comparing MCP with Traditional APIs"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#2-mcp-architecture-overview",children:"2. MCP Architecture Overview"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#21-general-architecture",children:"2.1 General Architecture"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#key-components-of-mcp",children:"Key Components of MCP"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#connections-to-external-systems",children:"Connections to External Systems"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#communication-process-details",children:"Communication Process Details"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#3-real-world-applications",children:"3. Real-World Applications"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#31-mcp-architecture-in-practical-applications",children:"3.1 MCP Architecture in Practical Applications"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#analysis-of-components-in-the-diagram",children:"Analysis of Components in the Diagram"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#practical-example",children:"Practical Example"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#32-current-limitations-of-mcp",children:"3.2 Current Limitations of MCP"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#references",children:"References"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"1-what-is-model-context-protocol",children:"1. What is Model Context Protocol?"}),"\n",(0,t.jsx)(n.h3,{id:"11-concept",children:"1.1 Concept"}),"\n",(0,t.jsxs)(n.p,{children:["First, let\u2019s clarify what an LLM is. A ",(0,t.jsx)(n.strong,{children:"Large Language Model (LLM)"})," is an AI model trained on vast datasets of text to understand and generate natural language. It can answer questions, write content, translate languages, or function as a virtual assistant. Examples include GPT-4, Claude, and Gemini."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Model Context Protocol (MCP)"})," acts as a standardized protocol\u2014comparable to a USB-C for AI\u2014that enables LLMs to connect seamlessly with external data and tools. MCP is built on three core components:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Model"}),": Represents the core logic of an application, defining how data is structured and decisions are made. In AI, this could be a neural network for processing language or images."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Context"}),": Provides the environment in which the model operates, determining its behavior under various conditions, such as user interactions or system states. For example, a chatbot might respond differently based on the context of a conversation. Without proper context, models may produce irrelevant or biased results."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Protocol"}),": Establishes the communication rules between the model and context, ensuring that changes in context appropriately influence the model and vice versa."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"MCP Concept",src:s(7752).A+"",width:"720",height:"405"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Figure 1: Illustration of the MCP concept."})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"12-why-do-we-need-mcp",children:"1.2 Why Do We Need MCP?"}),"\n",(0,t.jsx)(n.p,{children:"Before MCP, integrating AI models with external data sources was a complicated process lacking a unified standard. Large Language Models (LLMs) like GPT, Claude, and Gemini faced two key limitations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Context Limitation"}),": They can only process and reason based on the information available in their current context."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Inability to Act"}),": While they can generate text, they are unable to interact with the external world."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:['This challenge is highlighted by the "M\xd7N problem": connecting ',(0,t.jsx)(n.strong,{children:"M"})," AI models to ",(0,t.jsx)(n.strong,{children:"N"})," external tools requires building ",(0,t.jsx)(n.strong,{children:"M\xd7N"})," individual integrations, resulting in a massive workload. MCP simplifies this to ",(0,t.jsx)(n.strong,{children:"M+N"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"For instance, a company using 4 AI models (Claude, GPT-4, Gemini, Deepseek) and aiming to integrate them with 5 external services (GitHub, Slack, Google Drive, Salesforce, and an internal database) would need 4\xd75=20 separate integrations without MCP. With MCP, they only need 4 MCP clients (one for each AI model) and 5 MCP servers (one for each service), totaling 4+5=9 components\u2014a 55% reduction in complexity and development time."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"M\xd7N vs M+N",src:s(4058).A+"",width:"3784",height:"1999"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Figure 2: Comparison of integration complexity between traditional methods (M\xd7N) and MCP (M+N)."})]}),"\n",(0,t.jsx)(n.h4,{id:"illustrative-example",children:"Illustrative Example"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"MCP Example",src:s(4330).A+"",width:"1488",height:"837"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Figure 3: Example illustrating MCP\u2019s application in answering a user\u2019s weather query."})]}),"\n",(0,t.jsx)(n.p,{children:"In this example, an MCP application consists of distinct components:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Host/Client Application"}),": Manages user actions and application logic."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Agent Task (Weather Agent Action)"}),": Receives user requests and performs actions using available tools and resources."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Weather MCP Server"}),": Manages weather tools, weather API resources, and prompts to assist users."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Consider a user query: ",(0,t.jsx)(n.em,{children:'"Do I need an umbrella today?"'})," The process is as follows:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The user asks whether an umbrella is needed."}),"\n",(0,t.jsx)(n.li,{children:"The host determines if the query requires an agent and forwards the user\u2019s location data to the agent loop."}),"\n",(0,t.jsx)(n.li,{children:"The Weather Agent Action (client) queries the Weather Server for weather data based on the provided location."}),"\n",(0,t.jsx)(n.li,{children:"The Weather Agent (Host/Client/Server) retrieves weather data from the API, describes the day\u2019s weather, and determines if an umbrella is needed based on the initial question."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Thanks to MCP, the AI processes information efficiently, delivering accurate and relevant answers to the user."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"13-comparing-mcp-with-traditional-apis",children:"1.3 Comparing MCP with Traditional APIs"}),"\n",(0,t.jsx)(n.p,{children:"To understand MCP\u2019s importance, let\u2019s compare it with traditional REST APIs:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"#"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Feature"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"MCP"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Traditional REST APIs"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Communication"})}),(0,t.jsx)(n.td,{children:"Bidirectional and real-time"}),(0,t.jsx)(n.td,{children:"Typically one-way request-response"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Tool Discovery"})}),(0,t.jsx)(n.td,{children:"Automatic and dynamic"}),(0,t.jsx)(n.td,{children:"Requires manual configuration"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Context Awareness"})}),(0,t.jsx)(n.td,{children:"Built-in"}),(0,t.jsx)(n.td,{children:"Limited or absent"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Scalability"})}),(0,t.jsx)(n.td,{children:"Plug-and-play"}),(0,t.jsx)(n.td,{children:"Requires linear integration effort"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Standardization"})}),(0,t.jsx)(n.td,{children:"Unified protocol for all models"}),(0,t.jsx)(n.td,{children:"Varies by service"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"6"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Purpose"})}),(0,t.jsx)(n.td,{children:"Designed specifically for AI models"}),(0,t.jsx)(n.td,{children:"General-purpose"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"This standardization marks a significant shift for anyone developing AI applications."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"2-mcp-architecture-overview",children:"2. MCP Architecture Overview"}),"\n",(0,t.jsx)(n.h3,{id:"21-general-architecture",children:"2.1 General Architecture"}),"\n",(0,t.jsx)(n.p,{children:"The overall architecture of MCP is illustrated below:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"MCP Architecture",src:s(7332).A+"",width:"1086",height:"1280"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Figure 4: General architecture of MCP, including MCP Hosts, Clients, Servers, and connections to external systems."})]}),"\n",(0,t.jsx)(n.h4,{id:"key-components-of-mcp",children:"Key Components of MCP"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"#"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Component"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"MCP Hosts"})}),(0,t.jsx)(n.td,{children:"Programs or tools (e.g., Claude Desktop, IDEs, or AI tools) that access and use data via MCP."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"MCP Client"})}),(0,t.jsx)(n.td,{children:"Facilitates communication with the MCP Server, sending requests and receiving responses. Each client maintains a 1:1 connection with servers."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"MCP Server"})}),(0,t.jsx)(n.td,{children:"Handles requests from clients, executing tasks as required. Can be a physical or virtual server."})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"connections-to-external-systems",children:"Connections to External Systems"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"#"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"System"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Local Filesystem"})}),(0,t.jsx)(n.td,{children:"Used for temporary storage or results from tasks."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Database"})}),(0,t.jsx)(n.td,{children:"Stores long-term data, accessible for queries by servers or clients."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Web APIs"})}),(0,t.jsx)(n.td,{children:"Enables access to external information or services."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Internet"})}),(0,t.jsx)(n.td,{children:"Facilitates connections to online services, such as cloud platforms or external tools/data."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Understanding the communication between MCP Clients and Servers is essential for building an MCP system. The process is illustrated below:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"MCP Communication",src:s(3911).A+"",width:"1244",height:"1114"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Figure 5: Diagram illustrating the communication process between MCP Client and MCP Server."})]}),"\n",(0,t.jsx)(n.h4,{id:"communication-process-details",children:"Communication Process Details"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The client sends an initial request to discover the server\u2019s capabilities. For example: ",(0,t.jsx)(n.em,{children:'"Please provide information about available weather-related tools and resources."'})]}),"\n",(0,t.jsxs)(n.li,{children:["The server responds with detailed information about its capabilities, such as:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Tools"}),": Available tools, e.g., weather APIs or data analysis tools."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Prompt Templates"}),": Predefined prompts the client can use to interact with the server."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Resources"}),": Available resources, e.g., weather data, analysis reports, or additional information."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Once the capability exchange is complete, the system is ready for further message exchanges. The client can send more specific requests, and the server provides detailed responses. For example, after receiving weather tool information, the client might request weather forecasts for a specific city."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"3-real-world-applications",children:"3. Real-World Applications"}),"\n",(0,t.jsx)(n.h3,{id:"31-mcp-architecture-in-practical-applications",children:"3.1 MCP Architecture in Practical Applications"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Real-World MCP",src:s(9161).A+"",width:"800",height:"600"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Figure 6: Diagram illustrating MCP architecture in a real-world application."})]}),"\n",(0,t.jsx)(n.h4,{id:"analysis-of-components-in-the-diagram",children:"Analysis of Components in the Diagram"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"#"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Component"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Example"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"MCP Client (Hosts)"})}),(0,t.jsx)(n.td,{children:"Programs or tools (e.g., chatbots, IDEs) that connect to MCP Servers to perform tasks."}),(0,t.jsx)(n.td,{children:"A chatbot acting as an MCP Client, where users send requests and receive responses from an MCP Server to query data or automate tasks."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"MCP Server"})}),(0,t.jsx)(n.td,{children:"Processes requests from MCP Clients and provides tools for task execution. Each server may have unique tools."}),(0,t.jsxs)(n.td,{children:["- ",(0,t.jsx)(n.strong,{children:"Server 1"}),": Tools like ",(0,t.jsx)(n.code,{children:"Fetch all users"}),", ",(0,t.jsx)(n.code,{children:"Insert a new user"}),", connected to a database. \\n- ",(0,t.jsx)(n.strong,{children:"Server 2"}),": Tools like ",(0,t.jsx)(n.code,{children:"Create new repo"}),", ",(0,t.jsx)(n.code,{children:"Fetch last few commits"}),", connected to APIs (e.g., GitHub). \\n- ",(0,t.jsx)(n.strong,{children:"Server 3"}),": Tools like ",(0,t.jsx)(n.code,{children:"Run script ./start.sh"}),", ",(0,t.jsx)(n.code,{children:"Start server"}),", ",(0,t.jsx)(n.code,{children:"Create Docker image"}),", interacting with remote services."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Data Source"})}),(0,t.jsx)(n.td,{children:"MCP Servers access databases for data retrieval/update or use APIs/remote services for actions."}),(0,t.jsx)(n.td,{children:"- Retrieve or add users from a database. \\n- Create repositories, fetch commits, or run remote services via APIs or remote services."})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"practical-example",children:"Practical Example"}),"\n",(0,t.jsx)(n.p,{children:'Cursor, originally a code editor, has leveraged MCP Clients to expand its functionality, transforming into an "everything app." By integrating with MCP Servers, Cursor enables users to perform various tasks without leaving their workspace:'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Slack Client (via Slack MCP Server)"}),": Users can send messages or receive notifications from Slack directly within Cursor."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Email Sender (via Resend MCP Server)"}),": Cursor supports sending emails without opening a separate email app."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Image Generator (via Replicate MCP Server)"}),": Users can generate images, such as website banners, while coding."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"32-current-limitations-of-mcp",children:"3.2 Current Limitations of MCP"}),"\n",(0,t.jsx)(n.p,{children:"MCP has the potential to connect AI with tools, but it faces several limitations that need to be addressed:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"#"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Limitation"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Multi-User Support"})}),(0,t.jsx)(n.td,{children:"Primarily supports single AI agents, not ideal for multi-user systems, limiting large-scale deployment."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Standardized Authentication"})}),(0,t.jsx)(n.td,{children:"Lacks a unified authentication mechanism, posing security risks in complex systems."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Access Control"})}),(0,t.jsx)(n.td,{children:"Lacks flexible permission control, offering only full access or none, complicating multi-user management."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Tool Discovery"})}),(0,t.jsx)(n.td,{children:"Manual process, not automated, time-consuming despite planned improvements by Anthropic."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Complex Workflows"})}),(0,t.jsx)(n.td,{children:"Does not support seamless task chaining, requiring users to handle complexity manually."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"6"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"User Experience"})}),(0,t.jsx)(n.td,{children:"Inconsistent and unintuitive, lacking tool suggestions, making it less user-friendly for beginners."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"7"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Error Handling"})}),(0,t.jsx)(n.td,{children:"Difficult to identify and fix errors due to incomplete information, especially across systems."})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/modelcontextprotocol",children:"Model Context Protocol Official GitHub Repository"})," - Official GitHub page for MCP, including source code, documentation, and SDK."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.datacamp.com/tutorial/mcp-model-context-protocol",children:'DataCamp: "MCP: Model Context Protocol Tutorial" (15/03/2025)'})," - Detailed tutorial on MCP and its implementation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://dev.to/ajeetraina/the-rise-of-model-context-protocol-in-docker-desktop-4fji",children:'Dev.to: "The Rise of Model Context Protocol in Docker Desktop" by Ajeet Raina (20/03/2025)'})," - Article on MCP applications in Docker Desktop."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://blog.dailydoseofds.com/p/visual-guide-to-model-context-protocol",children:'DailyDoseofDS: "Visual Guide to Model Context Protocol" (10/03/2025)'})," - Visual guide to MCP."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.linkedin.com/pulse/model-context-protocol-mcp-ai-software-development-piyush-ranjan-dxj0e/",children:'LinkedIn: "Model Context Protocol (MCP) in AI Software Development" by Piyush Ranjan (18/03/2025)'})," - Analysis of MCP in AI software development."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.digidop.com/blog/mcp-ai-revolution",children:'Digidop: "MCP: The AI Revolution" (12/03/2025)'})," - Article on MCP\u2019s impact in AI."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://a16z.com/a-deep-dive-into-mcp-and-the-future-of-ai-tooling/",children:'a16z: "A Deep Dive into MCP and the Future of AI Tooling" (23/03/2025)'})," - In-depth analysis of MCP and the future of AI tooling."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3911:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/connection-8b3bed9b912253b9072a9d73819cfa22.webp"},4058:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/compare-529ecbfeb7ef68fed13340b1dd007176.webp"},4330:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/examplef-47ee9721ffd976db58bf04f1943bbf80.png"},5555:e=>{e.exports=JSON.parse('{"permalink":"/vinhnd4/blog/mcp-know-how","editUrl":"https://github.com/vinhnd20/vinhnd4/blog/2025-04-14-MCP/index.md","source":"@site/blog/2025-04-14-MCP/index.md","title":"Understanding Model Context Protocol (MCP)","description":"Introduction","date":"2025-04-14T00:00:00.000Z","tags":[{"inline":true,"label":"AI","permalink":"/vinhnd4/blog/tags/ai"},{"inline":true,"label":"DevSecOps","permalink":"/vinhnd4/blog/tags/dev-sec-ops"},{"inline":true,"label":"MCP","permalink":"/vinhnd4/blog/tags/mcp"}],"readingTime":9.09,"hasTruncateMarker":false,"authors":[{"name":"Vinh Duc Nguyen","title":"DevSecOps Engineer","url":"https://github.com/vinhnd20","imageURL":"https://raw.githubusercontent.com/vinhnd20/vinhnd4/main/static/img/vinhnd1.png","key":"vinh","page":null}],"frontMatter":{"slug":"mcp-know-how","title":"Understanding Model Context Protocol (MCP)","authors":["vinh"],"tags":["AI","DevSecOps","MCP"]},"unlisted":false}')},7332:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/architecture-c2867dac7290964eb7e2a0d512932e93.webp"},7752:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/concept-ee840e32d3272bd74c56ba4d0d72fd96.png"},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var i=s(6540);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}},9161:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/real-world-fd53dc5a21fcce2002ba8aa50d62d920.png"}}]);