import React, { FC, useEffect, useState, Component } from "react";
import { useHistory } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import { CSSTransition } from "react-transition-group";

const ProjectHeader: FC = (props) => {
  const vh = window.innerHeight;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="project-header-box">
      <h1 data-aos="fade-right" className="project-header">
        {props.children}
      </h1>
    </div>
  );
};

export default ProjectHeader;
