import React from "react";
import styles from "./SkillsStyle.module.css";
import Title from "../Title/Title";
import SKillsItem from "./SKillsItem";
import {
  mySkillsPrograming,
  mySkillsLibrary,
  mySkillsVersion,
  mySkillsDesgin,
  mySkillsCMS,
} from "./SkillsData";

const Skills = () => {
  return (
    <div id="skills" className="main-content">
      <Title>
        My <span>Skills</span>
      </Title>
      <p className={styles.skillsDesc}>These are all the skills I have</p>
      <div>
        <SKillsItem
          mySkills={mySkillsPrograming}
          title={"Programming languages"}
        ></SKillsItem>
        <SKillsItem
          mySkills={mySkillsLibrary}
          title={"Framework/Library"}
        ></SKillsItem>
        <SKillsItem
          mySkills={mySkillsVersion}
          title={"Version Control"}
        ></SKillsItem>
        <SKillsItem mySkills={mySkillsDesgin} title={"Design"}></SKillsItem>
        <SKillsItem mySkills={mySkillsCMS} title={"CMS"}></SKillsItem>
      </div>
    </div>
  );
};

export default Skills;
