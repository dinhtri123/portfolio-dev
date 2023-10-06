import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import { Icon } from "@iconify/react";
import useMediaQuery from "../Hooks/useMedia";

const menuItem = [
  {
    item: "HOME",
    href: "home",
  },
  {
    item: "ABOUT",
    href: "about",
  },
  {
    item: "SKILLS",
    href: "skills",
  },
  {
    item: "EXPERIENCE",
    href: "experience",
  },
  {
    item: "PROJECT",
    href: "project",
  },
  {
    item: "CONTACT",
    href: "contact",
  },
];

const Header = () => {
  const [active, setActive] = useState(0);
  const [activeMenu, setActiveMenu] = useState(false);
  const [darkmode, setDarkmode] = useState("light");
  const refActive = useRef();
  const refDarkmode = useRef();
  const isMobile = useMediaQuery(`(max-width: 767px)`);

  const handleToggleMenu = () => {
    setActiveMenu(!activeMenu);
    refActive.current.classList.remove(`${styles.headerActive}`);
  };

  const handleToggleDarkmode = async () => {
    setDarkmode(darkmode === "light" ? "dark" : "light");
    if (darkmode === "dark") {
      refDarkmode.current.classList.remove(`btnDark`);
      await localStorage.setItem("isDarkMode", "light");
    }
    if (darkmode === "light") {
      refDarkmode.current.classList.add(`btnDark`);
      await localStorage.setItem("isDarkMode", "dark");
    }
  };
  // handle active when scrolling the page
  useEffect(() => {
    const handleActiveMenuSCroll = () => {
      const home = document.querySelector("#home").getBoundingClientRect();
      if (home.top < 100) {
        setActive(0);
      }
      const about = document.querySelector("#about").getBoundingClientRect();
      if (about.top < 100) {
        setActive(1);
      }
      const skills = document.querySelector("#skills").getBoundingClientRect();
      if (skills.top < 100) {
        setActive(2);
      }
      const experience = document
        .querySelector("#experience")
        .getBoundingClientRect();
      if (experience.top < 100) {
        setActive(3);
      }
      const project = document
        .querySelector("#project")
        .getBoundingClientRect();
      if (project.top < 100) {
        setActive(4);
      }
      const contact = document
        .querySelector("#contact")
        .getBoundingClientRect();

      if (contact.bottom < 900) {
        setActive(5);
      }
    };
    window.addEventListener("scroll", handleActiveMenuSCroll);
    //cleanup
    return () => {
      window.removeEventListener("scroll", handleActiveMenuSCroll);
    };
  }, []);
  // get darkmode localStorage
  useEffect(() => {
    const getDarkModeLocalStorage =
      localStorage.getItem("isDarkMode") || "light";
    if (getDarkModeLocalStorage === "dark") {
      setDarkmode(getDarkModeLocalStorage);
      refDarkmode.current.classList.add("btnDark");
      document.body.classList.add("dark");
    } else {
      setDarkmode(getDarkModeLocalStorage);
      refDarkmode.current.classList.remove("btnDark");
      document.body.classList.remove("dark");
    }
  }, [darkmode]);

  useEffect(() => {
    const handleScrollFixedMenu = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        refActive.current.classList.add(`${styles.headerActive}`);
      } else {
        refActive.current.classList.remove(`${styles.headerActive}`);
      }
    };
    window.addEventListener("scroll", handleScrollFixedMenu);
    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScrollFixedMenu);
    };
  }, []);
  const handleScrollMenuClick = (index) => {
    setActive(index);
    setActiveMenu(!activeMenu);
  };
  return (
    <div
      className={
        darkmode === "dark"
          ? `${styles.header} ${styles.darkmodeHeader}`
          : `${styles.header}`
      }
      ref={refActive}
    >
      <div className={styles.headerContent}>
        <a href="/" className={styles.logo}>
          PORTFOILIO
        </a>
        <nav>
          <ul
            className={`${styles.navbar} ${
              isMobile ? `${styles.navbarMobile}` : ""
            } ${activeMenu ? `${styles.navbarMobileActive}` : ""} ${
              darkmode === "dark" ? `${styles.navbarMobileDark}` : ""
            }`}
          >
            {menuItem.map((menu, index) => (
              <li key={index} className={menu.href}>
                <a
                  href={"#" + menu.href}
                  onClick={() => handleScrollMenuClick(index)}
                  className={
                    index === active ? `${styles.navbarItemActive}` : ""
                  }
                >
                  {menu.item}
                </a>
              </li>
            ))}
          </ul>
          {isMobile && (
            <div
              className={`${styles.iconMenu} ${
                darkmode === "dark" ? `${styles.iconMenuDark}` : ""
              }`}
              onClick={handleToggleMenu}
            >
              {!activeMenu ? (
                <Icon icon="mingcute:menu-fill" />
              ) : (
                <Icon icon="ep:close-bold" />
              )}
            </div>
          )}
          <div></div>
          <div
            className={styles.darkmode}
            ref={refDarkmode}
            onClick={handleToggleDarkmode}
          >
            <span className={styles.toggle}>
              {darkmode === "light" ? (
                <Icon icon="ph:sun-light" />
              ) : (
                <Icon icon="ic:sharp-dark-mode" />
              )}
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
