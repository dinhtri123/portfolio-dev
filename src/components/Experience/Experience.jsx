import React from "react";
import styles from "./ExperienceStyle.module.css";
import Title from "../Title/Title";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  return (
    <div className="main-content" id="experience">
      <Title>
        My <span>Experience</span>
      </Title>
      <div className={`${styles.expTimeline} mt-cs`}>
        <ExperienceItem></ExperienceItem>
      </div>
    </div>
  );
};

export default Experience;
