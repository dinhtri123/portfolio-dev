import React, { useEffect } from "react";
import styles from "./KeyvisualStyle.module.css";
import Typed from "typed.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Keyvisual = () => {
  const el = React.useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Wordpress Developer", "UI/UX Designer"],
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
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://github.com/dinhtri123" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/pham-dinh-tri-dev/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <div className={styles.keyvisualContent}>
          <div className={styles.keyvisualPersonal}>
            <img src="./public/img-personal.jpg" alt="" />
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
            href="Frontend Developer - Phạm Đình Trí.pdf"
            download={"Frontend Developer - Phạm Đình Trí.pdf"}
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
