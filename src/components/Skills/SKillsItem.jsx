import React from "react";
import styles from "./SkillsStyle.module.css";

const SKillsItem = ({ mySkills, title }) => {
  return (
    <div className={`${styles.skillsContent} mt-cs`}>
      <h4 className={styles.skillTitle}>{title}</h4>
      <ul className={styles.skillsList}>
        {mySkills.map((item, index) => (
          <li key={index} className={styles.skillsListItem}>
            <span className={styles.skillsListLogo}>{item.skill}</span>
            <span className={styles.skillsListTitle}>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SKillsItem;
