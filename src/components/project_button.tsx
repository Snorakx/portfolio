import React, { FC } from "react";
import { useHistory } from "react-router-dom";

const ProjectButton: FC = (props) => {
  let handleHref = "";
  if (props.children === 0) {
    handleHref = "http://wp-start.cba.pl/";
  } else {
    handleHref = "http://miotlowisko.pl/trzymiotly/";
  }
  const history = useHistory();
  // const { href } = property;
  if (window.matchMedia("(max-width:688px)").matches) {
    return (
      <div className="project-button-box">
        <a href={handleHref} target="_blank">
          <div className="project-button">Check live!</div>
        </a>
      </div>
    );
  } else {
    return (
      <div
        className="project-button-box"
        data-aos="fade-in"
        data-aos-delay="2000"
      >
        <a href={handleHref} target="_blank">
          <div className="project-button">Check live!</div>
        </a>
      </div>
    );
  }
};

export default ProjectButton;
