import React, { useEffect } from "react";
import styles from "./KeyvisualStyle.module.css";
import Typed from "typed.js";
import { Icon } from "@iconify/react";

const Keyvisual = () => {
  const el = React.useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className={styles.keyvisual} id="home">
        <div className={styles.keyvisualSocial}>
          <a href="https://www.facebook.com/dinhtri.1062001/" target="_blank">
            <Icon icon="eva:facebook-fill" />
          </a>
          <a href="https://github.com/dinhtri123" target="_blank">
            <Icon icon="bi:github" />
          </a>
          <a
            href="https://www.linkedin.com/in/pham-dinh-tri-dev/"
            target="_blank"
          >
            <Icon icon="ri:linkedin-fill" />
          </a>
        </div>
        <div className={styles.keyvisualContent}>
          <div className={styles.keyvisualPersonal}>
            <img src="/img-personal.jpg" alt="" />
          </div>
          <h2 className={styles.keyvisualName}>PHẠM ĐÌNH TRÍ</h2>
          <p className={styles.keyvisualJob}>
            I am a{" "}
            <span ref={el} className={styles.keyvisualJobsName}>
              Frontend Developer
            </span>
          </p>
          <a
            className={styles.downloadCV}
            href="/FE_DEV_PhamDinhTri.pdf"
            download={"FE_DEV_PhamDinhTri.pdf"}
          >
            Download CV
          </a>
        </div>
        <div className={styles.keyvisualJobSmall}>Frontend Developer</div>
      </div>
    </>
  );
};

export default Keyvisual;
