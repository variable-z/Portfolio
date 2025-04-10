// import React from "react";
// import styles from "./Footer.module.css";
// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   return (
//     <footer className={styles.footer}>
//       <p>© {currentYear} Sai Pavan Padamata. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  return (
    <footer className={styles.footer}>
      <Particles
        id="tsparticles-footer"
        className={styles.particles}
        init={particlesInit}
        options={{
          particles: {
            number: { value: 60 },
            color: { value: "#e74c3c" },
            shape: { type: "circle" },
            opacity: { value: 0.4 },
            size: { value: { min: 1, max: 3 } },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              outModes: { default: "bounce" },
            },
          },
          detectRetina: true,
        }}
      />
      <p className={styles.glowingText}>© {currentYear} Sai Pavan Padamata. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
