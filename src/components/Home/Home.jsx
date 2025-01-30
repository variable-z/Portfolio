import React from "react";
import styles from "./Home.module.css";
import profileImage from "../../assets/Ps-Photo.jpg";

const Home = () => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.container}>
        <div className={styles.profile}>
          <img src={profileImage} alt="Sai Pavan Padamata's Profile" className={styles.profileImage} />
        </div>
        <h1 className={styles.welcome}>Welcome to My Portfolio!</h1>
        <h2 className={styles.title}>I am Sai Pavan Padamata</h2>
        <p className={styles.description}>I am a Data Science and Analytics enthusiast with hands-on experience in <strong>Natural Language Processing (NLP)</strong>, 
          <strong>Machine Learning</strong>, and <strong>Big Data Analytics</strong>. My expertise includes creating predictive models, 
          transforming raw data into actionable insights, and developing scalable data solutions.
          <br /><br />
          Skilled in <strong>Python</strong>, <strong>SQL</strong>, <strong>PySpark</strong>, and visualization tools such as 
          <strong>Power BI</strong> and <strong>Tableau</strong>, I enjoy solving complex problems and optimizing business decisions through data-driven solutions. 
          One of my favorite areas to explore is leveraging NLP techniques to uncover insights from unstructured data.
        </p>
        <div className={styles.cta}>
          <a href="/resume.pdf" className={styles.button} download>Download Resume</a>
          <a href="#contact" className={styles.buttonSecondary}>Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
