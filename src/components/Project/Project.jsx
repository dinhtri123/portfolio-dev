import React, { useEffect } from "react";
import styles from "./ProjectStyle.module.css";
import Title from "../Title/Title";
import { dataProject } from "./ProjectData";
import { Icon } from "@iconify/react";

const Project = () => {
  return (
    <div className="main-content" id="project">
      <Title>
        My <span>Project</span>
      </Title>
      <div className={`${styles.projectWrapper} mt-cs`}>
        {dataProject.map((item, index) => (
          <div className={styles.projectItem} key={index}>
            <div className={styles.projectThumbnail}>
              <img src={item.img} alt={item.title} />
            </div>
            <div className={styles.projectItemContent}>
              <h4 className={"project-subtitle"}>{item.subTitle}</h4>
              <h3>{item.title}</h3>
              <ul>
                {item.listTech.map((list, index) => (
                  <li key={index}>{list}</li>
                ))}
              </ul>
              <p>{item.desc}</p>
              <div className={styles.projectBtn}>
                <a href={item.hrefWebsite} target="_blank">
                  Visit Website
                </a>
                <a
                  href={item.hrefSource}
                  className="hrefSourceDark"
                  target="_blank"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.projectSeeMore}>
        <a href="https://github.com/dinhtri123" target="_blank">
          See more <Icon icon="devicon:github" color="#ffb800" />
        </a>
      </div>
    </div>
  );
};

export default Project;
