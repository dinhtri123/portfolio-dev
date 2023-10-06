import React from "react";
import styles from "./TitleStyle.module.css";

const Title = ({ children }) => {
  return (
    <div>
      <h2 className={styles.title}>{children}</h2>
    </div>
  );
};

export default Title;
