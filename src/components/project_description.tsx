import React, { FC, useEffect, useState, Component } from "react";
import { useHistory } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";

const ProjectDescription: FC = (props) => {
  const vh = window.innerHeight;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      data-aos="fade-right"
      data-aos-delay="2000"
      className="project-desc-box"
    >
      <div className="description">{props.children}</div>
    </div>
  );
};

export default ProjectDescription;
