import React from "react";
import styles from "./Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import groceryStoreImage from "../../assets/Grocery-Store-Image-Cover.jpg";
import newsClassificationImage from "../../assets/News-Classification-Image-Cover.jpg";
import objectRecognitionImage from "../../assets/Handwritten-Digit-Classification-Image-Cover.webp";
import hotelReviewImage from "../../assets/Hotel-Review-Image-Cover.jpg";
import carResaleImage from "../../assets/Car-Resale-Price-Image-Cover.jpg"

const Projects = () => {
  const projects = [
    {
      title: "Grocery Store Management System",
      description:
        "Developed a full-stack web application for grocery store management, supporting 500+ users for registration, login, cart management, order placement, and membership-based discounts.",
      technologies: ["Flask", "MySQL", "SQLAlchemy", "HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/variable-z/GMS-Project", // Add a link to the live demo or GitHub repo
      achievements: [
        "Normalized a MySQL database, reducing data redundancy by 35% and improving query performance by 20%.",
        "Integrated inventory stock validation and membership expiration checks, reducing manual errors by 30%.",
      ],
      image: groceryStoreImage,
    },
    {
      title: "News Classification using NLP",
      description:
        "Engineered a machine learning model for news article classification, distinguishing between genuine and fake content using NLP techniques with NLTK and Sci-Kit Learn.",
      technologies: ["Python", "NLTK", "Scikit-learn", "Machine Learning", "Deep Learning"],
      link: "https://ieeexplore.ieee.org/document/9853174", // Link to your IEEE paper
      achievements: [
        "Achieved an accuracy rate of 94% and an F1-score of 0.8 on a dataset of 700,000 records.",
        "Published research paper in the 3rd International Conference of ICIEM 2022.",
      ],
      image: newsClassificationImage,
    },
    {
      title: "Object Recognition with CNN",
      description:
        "Constructed a Convolutional Neural Network (CNN) model for object recognition using the CIFAR-10 dataset, achieving an accuracy of 72%.",
      technologies: ["CNN", "TensorFlow", "Keras", "NumPy"],
      githubLink: "https://github.com/variable-z/NLP-Projects", // Add a link to the GitHub repo
      achievements: [
        "Adapted the CNN architecture for handwritten digit classification using the MNIST dataset.",
        "Demonstrated versatility in visual recognition tasks.",
      ],
      image: objectRecognitionImage,
    },
    {
      title: "Hotel Review Sentiment Analysis",
      description:
        "Analyzed 300,000+ hotel reviews using sentiment analysis to provide actionable insights for improving customer satisfaction.",
      technologies: ["Python", "PySpark", "AWS", "Tableau"],
      link: "#", // Add a link to the project
      achievements: [
        "Streamlined data processing pipelines using Python and OCR (Tesseract).",
        "Delivered actionable insights for supply chain analysis.",
      ],
      image: hotelReviewImage,
    },
    {
        title: "Car Resale Price Prediction",
        description:
          "Developed a machine learning model to predict the resale price of used cars using features like mileage, engine capacity, and fuel type. The project involved data exploration, preprocessing, and evaluation of multiple models, including Linear Regression, Random Forest, XGBoost, and Neural Networks.",
        technologies: ["Python", "Pandas", "Scikit-learn", "XGBoost", "TensorFlow", "Matplotlib"],
        githubLink: "https://github.com/variable-z/Car-Resale-Price-Prediction", // Add your GitHub link
        achievements: [
          "Achieved an R² score of 0.8491 using Random Forest, outperforming other models like Linear Regression and Neural Networks.",
          "Published a detailed report on data exploration, preprocessing, and model evaluation.",
        ],
        image: carResaleImage, // Add the cover image for this project
      },
  ];

  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.projectImageContainer}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.technologies}>
                <strong>Technologies:</strong>{" "}
                {project.technologies.map((tech, i) => (
                  <span key={i} className={styles.techItem}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.achievements}>
                <strong>Achievements:</strong>
                <ul>
                  {project.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                <FontAwesomeIcon icon={faGithub} className={styles.githubIcon} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;