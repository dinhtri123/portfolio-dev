import React from "react";
import styles from "./FooterStyle.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapper}>
        <p>Copyright ©2023 by DevDT | All Rights Reverved</p>
      </div>
    </div>
  );
};

export default Footer;
