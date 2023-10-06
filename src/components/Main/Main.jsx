import React from "react";
import Keyvisual from "../Keyvisual/Keyvisual";
import About from "../About/About";
import Skills from "../Skills/SKills";
import Experience from "../Experience/Experience";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";

const Main = () => {
  return (
    <div>
      <Keyvisual></Keyvisual>
      <div className="container">
        <About></About>
        <Skills></Skills>
        <Experience></Experience>
        <Project></Project>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Main;
