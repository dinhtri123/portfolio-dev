import React from "react";
import styles from "./AboutStyle.module.css";
import Title from "../Title/Title";

const About = () => {
  return (
    <div id="about" className="main-content">
      <Title>
        About <span>Me</span>
      </Title>
      <div className={`${styles.aboutPersonal} mt-cs`}>
        <div className={styles.aboutImage}>
          <img src="../../../public/img-personal.jpg" alt="" />
        </div>
      </div>
      <h3 className={`${styles.aboutJob} mt-cs`}>Frontend Developer</h3>
      <p className={styles.aboutDetail}>
        Good day, everyone! I'm Pham Dinh Tri, I'm 22 years old and currently
        living and working in Da Nang. I am a Frontend developer with over 8
        months of experience. Graduated in 2022 with a major in Information
        Technology at Danang College Of Economics – Planning (CEP). Always
        exploring, learning new technologies, always trying to promote your
        abilities to conquer new challenges.
      </p>
    </div>
  );
};

export default About;
