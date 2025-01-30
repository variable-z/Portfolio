import React from "react";
import styles from "./Experience.module.css";

const Experience = () => {
  const experiences = [
    {
      title: "Graduate Research Assistant - Georgia State University",
      date: "Aug 2023 - Present",
      description:
        "Developed a data model for a hotel review system using 300,000+ entries, created an OCR-based solution for extracting Bloomberg Terminal data, streamlined data pipelines with Python and OCR, and analyzed 5+ years of supply chain data for actionable insights.",
    },
    {
      title: "Programmer Analyst - Cognizant Technology Solutions",
      date: "Nov 2022 - Jul 2024",
      description:
        "Led the migration of 194+ reports from SAP BusinessObjects to Qlik Sense, optimized Oracle data loading, consolidated 207+ tables into key data models, and redesigned dashboards to improve usability and efficiency by 40%.",
    },
    {
      title: "Advanced Python Developer Intern - Cognizant Technology Solutions",
      date: "Feb 2022 - Sep 2022",
      description:
        "Optimized data ingestion with Hadoop tools, boosting efficiency by 40%, and executed advanced data transformations in Databricks using PySpark, reducing processing time by 30%.",
    },
  ];

  return (
    <section className={styles.experience} id="experience">
      <h2 className={styles.title}>My Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineIcon}>
              <i className="fas fa-circle"></i>
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.jobTitle}>{exp.title}</h3>
              <span className={styles.date}>{exp.date}</span>
              <p className={styles.description}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
