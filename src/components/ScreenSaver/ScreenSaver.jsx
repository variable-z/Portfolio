import React, { useEffect, useState } from "react";
import styles from "./ScreenSaver.module.css";
import { useNavigate } from "react-router-dom";

const ScreenSaver = () => {
  const [greeting, setGreeting] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  // Function to get the current greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  // Function to simulate typing effect
  const typeText = (message, delay = 100) => {
    let index = 0;
    const interval = setInterval(() => {
      setText(message.substring(0, index));
      index++;
      if (index > message.length) clearInterval(interval);
    }, delay);
  };

  useEffect(() => {
    const greetingMessage = getGreeting();
    setGreeting(greetingMessage);
    typeText(`Hey there , ${greetingMessage}!`, 150);
  }, []);

  return (
    <div className={styles.screenSaver}>
      <div className={styles.magicWand}>
        <span role="img" aria-label="magic-wand">
          ✨
        </span>
      </div>
      <h1 className={styles.text}>{text}</h1>
      <button
        className={styles.sarcasticButton}
        onClick={() => navigate("/home")} // Redirect to home page
      >
        Checkout my page here.
      </button>
    </div>
  );
};

export default ScreenSaver;