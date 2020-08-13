import React, { FC, useEffect, useState, Component } from "react";
import { useHistory } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import { CSSTransition } from "react-transition-group";
import abd from "../assets/miotlowiskoSmartphone.png";

const ProjectPhoto2: FC = (props) => {
  const vh = window.innerHeight;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="project-photo-box-2"
      data-aos="fade-in"
      data-aos-delay="3000"
    >
      <img src={`${props.children}`} />
    </div>
  );
};

export default ProjectPhoto2;
