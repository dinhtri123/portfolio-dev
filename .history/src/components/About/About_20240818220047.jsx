import React from "react";
import styles from "./AboutStyle.module.css";
import Title from "../Title/Title";

const About = () => {
  const toDay = new Date();
  const birth = new Date("10/06/2001");
  let age = toDay.getFullYear() - birth.getFullYear();
  const monthDiff = toDay.getMonth() - birth.getMonth();
  return (
    <div id="about" className="main-content">
      <Title>
        About <span>Me</span>
      </Title>
      <div className={`${styles.aboutPersonal} mt-cs`}>
        <div className={styles.aboutImage}>
          <img src="/img-personal.jpg" alt="" />
        </div>
      </div>
      <h3 className={`${styles.aboutJob} mt-cs`}>Frontend Developer</h3>
      <p className={styles.aboutDetail}>
        Hello everyone! I am Pham Dinh Tri, {age} years old, currently living and
        working in Da Nang. I am a Frontend developer with 1 year of experience
        including Frontend, Wordpress and Freelancer. Graduated in 2022 with a
        major in Information Technology from Da Nang College of Economics and
        Planning (CEP). Always researching and learning new technologies, always
        trying to develop my abilities to conquer new challenges.
      </p>
    </div>
  );
};

export default About;
