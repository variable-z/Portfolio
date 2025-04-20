import React from "react";
import styles from "./Home.module.css";
import profileImage from "../../assets/Ps-Photo.jpg";

const Home = () => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.container}>
        <div className={styles.profileContainer}>
          {/* Profile Image on the Left (Full Size) */}
          <div className={styles.profile}>
            <img
              src={profileImage}
              alt="Sai Pavan Padamata's Profile"
              className={styles.profileImage}
            />
          </div>

          {/* Text Content on the Right */}
          <div className={styles.content}>
            <h1 className={styles.welcome}>Welcome to My Portfolio!</h1>
            <h2 className={styles.title}>I am Sai Pavan Padamata</h2>
            <p className={styles.description}>
              Exploration drives my purpose, and data serves as the medium through which I uncover insights and solutions. 
              With a solid foundation in Computer Science and a passion for solving complex problems, I am currently pursuing a 
              Master’s in Data Science and Analytics at Georgia State University, specializing in Big Data and Machine Learning.
              <br /><br />
              Professionally, I have honed my skills in Natural Language Processing (NLP), Machine Learning (ML), and Data Engineering, 
              working on impactful projects such as building a hotel review data model and designing OCR-based solutions for supply chain 
              analytics. At Cognizant, I led the migration of 194+ reports to Qlik Sense, optimized data pipelines, and enhanced dashboard 
              usability by 40%, demonstrating my ability to deliver scalable and efficient solutions.
              <br /><br />
              I thrive at the intersection of data science and software engineering, leveraging tools like Python, PySpark, and cloud platforms 
              (AWS, GCP) to transform raw data into actionable insights. My research on News Classification using NLP, published in an IEEE-indexed 
              conference, underscores my commitment to advancing the field of AI and machine learning.
              <br /><br />
              I believe in continuous learning and problem-solving. Whether it’s integrating new technologies or streamlining data operations, 
              I embrace challenges as opportunities to innovate. Beyond technical excellence, I value collaboration, mentorship, and applying 
              data-driven strategies to create meaningful impact.
            </p>
            <div className={styles.cta}>
              <a href={`${import.meta.env.BASE_URL}Resume.pdf`} className={styles.button} download
              onClick={() => {
                if (window.gtag) {
                  window.gtag('event', 'resume_download', {
                    event_category: 'engagement',
                    event_label: 'Resume from Home section',
                    value: 1,
                  });
                }
              }}
              >
                Download Resume
              </a>
              <a href="#contact" className={styles.buttonSecondary}>
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
// import React from "react";
// import styles from "./Home.module.css";
// import profileImage from "../../assets/Ps-Photo.jpg";

// const Home = () => {
//   return (
//     <section className={styles.home} id="home">
//       <div className={styles.container}>
//         <div className={styles.profile}>
//           <img src={profileImage} alt="Sai Pavan Padamata's Profile" className={styles.profileImage} />
//         </div>
//         <h1 className={styles.welcome}>Welcome to My Portfolio!</h1>
//         <h2 className={styles.title}>I am Sai Pavan Padamata</h2>
//         <p className={styles.description}>
//           Exploration drives my purpose, and data serves as the medium through which I uncover insights and solutions. 
//           With a solid foundation in Computer Science and a passion for solving complex problems, I am currently pursuing a 
//           Master’s in Data Science and Analytics at Georgia State University, specializing in Big Data and Machine Learning.
//           <br /><br />
//           Professionally, I have honed my skills in Natural Language Processing (NLP), Machine Learning (ML), and Data Engineering, 
//           working on impactful projects such as building a hotel review data model and designing OCR-based solutions for supply chain 
//           analytics. At Cognizant, I led the migration of 194+ reports to Qlik Sense, optimized data pipelines, and enhanced dashboard 
//           usability by 40%, demonstrating my ability to deliver scalable and efficient solutions.
//           <br /><br />
//           I thrive at the intersection of data science and software engineering, leveraging tools like Python, PySpark, and cloud platforms 
//           (AWS, GCP) to transform raw data into actionable insights. My research on News Classification using NLP, published in an IEEE-indexed 
//           conference, underscores my commitment to advancing the field of AI and machine learning.
//           <br /><br />
//           {/* Currently, as a Graduate Research Assistant, I am exploring cutting-edge technologies in NLP and text analytics, while actively 
//           seeking opportunities to apply my skills in real-world challenges. Whether it’s building full-stack applications, optimizing data 
//           pipelines, or developing machine learning models, I am driven by a relentless pursuit of innovation and impact.
//           <br /><br /> */}
//           I believe in continuous learning and problem-solving. Whether it’s integrating new technologies or streamlining data operations, 
//           I embrace challenges as opportunities to innovate. Beyond technical excellence, I value collaboration, mentorship, and applying 
//           data-driven strategies to create meaningful impact.
//         </p>
//         <div className={styles.cta}>
//           <a href="/Resume.pdf" className={styles.button} download>Download Resume</a>
//           <a href="#contact" className={styles.buttonSecondary}>Contact Me</a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;
