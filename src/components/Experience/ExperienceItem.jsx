import React from "react";
import styles from "./ExperienceStyle.module.css";
import { dataExperience } from "./ExperienceData";

const ExperienceItem = () => {
  return (
    <>
      {dataExperience.map((item, index) => (
        <div key={index} className={`${styles.expTimelineContent} mt-cs`}>
          <div className={`${styles.expTimelineWrapper}`}>
            <span className={styles.circleTime}></span>
            <div className={styles.expTimelineItem}>
              <div>
                <h3 className={styles.expCompany}>{item.name}</h3>
                <h4>
                  {item.position} - ({item.time})
                </h4>
              </div>
              <div>
                <h4>{item.titleRespon}:</h4>
                <ul>
                  {item.listRespon.map((list, index) => (
                    <li key={index}>- {list.item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>{item.titleGained}:</h4>
                <ul>
                  {item.listGained.map((list, index) => (
                    <li key={index}>- {list.item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ExperienceItem;
