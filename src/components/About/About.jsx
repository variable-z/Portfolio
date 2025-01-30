import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.description}>
          I am <strong>Sai Pavan Padamata</strong>, currently pursuing an M.S. in Data Science and Analytics at Georgia State University, 
          with a strong academic foundation and industry experience in <strong>Natural Language Processing</strong>, 
          <strong>Machine Learning</strong>, and <strong>Big Data Analytics</strong>. My passion lies in leveraging data to deliver impactful insights.
        </p>
        <div className={styles.highlights}>
          <div className={styles.highlight}>
            <h3>Current Role</h3>
            <p>
              Graduate Research Assistant specializing in NLP and Text Analytics. Delivered insights from 
              structured and unstructured data for critical supply chain analysis.
            </p>
          </div>
          <div className={styles.highlight}>
            <h3>Previous Experience</h3>
            <p>
              Programmer Analyst at Cognizant, where I optimized data pipelines and migrated legacy systems,
              resulting in a 40% efficiency improvement.
            </p>
          </div>
        </div>
        <div className={styles.skills}>
            <h3>Technical Skills</h3>
            <ul className={styles.skillList}>
              <li><strong>Programming Languages & Web Technologies:</strong> C, Python, Java, JavaScript, HTML, CSS</li>
              <li><strong>Databases & Integration Tools:</strong> MySQL, Apache Sqoop, Apache Flume, Apache Spark, Kafka, Apache Hive, HBase, PySpark</li>
              <li><strong>Business Intelligence & Visualization Tools:</strong> Power BI, Looker, Data Studio</li>
              <li><strong>Cloud Platforms:</strong> AWS (EC2, S3, RDS, Snow Family), Google Cloud (BigQuery, Dataproc, Pub/Sub)</li>
              <li><strong>Operating Systems:</strong> Unix, Linux, Windows</li>
            </ul>
          </div>
        <div className={styles.certifications}>
          <h3>Certifications & Achievements</h3>
          <ul>
            <li>AWS Certified Cloud Practitioner</li>
            <li>AWS Certified Solutions Architect Associate</li>
            <li>
            IEEE Research Publication:{" "}
            <a 
              href="https://ieeexplore.ieee.org/document/9853174" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.link}>
              News Classification using NLP
            </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
