import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Grid from "@mui/material/Grid";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Work Experience",
    link: "docs/about_me/work_experience",
    Svg: require("@site/static/img/undraw_science_re_mnnr.svg").default,
    description: (
      <>
        Designed secure DevSecOps pipelines at MB Bank and built Viettel Cloud’s Internal Developer Platform and Database as a Service, driving innovation and reliability.
      </>
    ),
  },
  {
    title: "Core Skill",
    link: "docs/about_me/skills",
    Svg: require("@site/static/img/undraw_website_builder_re_ii6e.svg").default,
    description: (
      <>
       Expert in DevSecOps, Platform Engineering, and Cloud Computing, proficient in Kubernetes, CI/CD, Python, Go, and secure cloud orchestration.
      </>
    ),
  }
];

function Feature({ Svg, title, description, link }) {
  return (
    <>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={link}>
          <Heading as="h3">{title}</Heading>
        </Link>
        <p>{description}</p>
      </div>
    </>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      {FeatureList.map((props, idx) => (
        <Grid key={idx} xs={12} sm={10} md={6}>
          <Feature key={idx} {...props} />
        </Grid>
      ))}
    </>
  );
}
