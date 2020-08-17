import React, { FC, useEffect, useState, Component } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const ProjectHeader: FC = (props) => {
  const vh = window.innerHeight;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  if (window.matchMedia("(max-width:688px)").matches) {
    return (
      <div className="project-header-box">
        <h1 className="project-header">{props.children}</h1>
      </div>
    );
  } else {
    return (
      <div className="project-header-box">
        <h1 data-aos="fade-right" className="project-header">
          {props.children}
        </h1>
      </div>
    );
  }
};

export default ProjectHeader;
