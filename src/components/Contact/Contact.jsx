import React from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.title}>Contact Me</h2>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h3>Let's Connect!</h3>
          <p>
            Feel free to reach out for collaborations, opportunities, or just a friendly chat. I’d love to hear from you!
          </p>
          <div className={styles.socialLinks}>
            <a
              href="mailto:saipavanpadamata@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <span>Email Me</span>
            </a>
            <a
              href="https://linkedin.com/in/sai-pavan-padamata"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/variable-z"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
              <span>GitHub</span>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
              <span>Twitter</span>
            </a>
          </div>
        </div>
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;