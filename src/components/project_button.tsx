import React, { FC } from "react";
import { useHistory } from "react-router-dom";

const ProjectButton: FC = (props) => {
  let handleHref = "";
  if (props.children === 0) {
    handleHref = "https://findremotejobs.netlify.app/";
  } else if (props.children === 1) {
    handleHref = "https://desirelabs.eu/";
  } else if (props.children === 2) {
    handleHref = "https://github.com/Snorakx/KanbanApp";
  } else if (props.children === 3) {
    handleHref = "http://wp-start.cba.pl/";
  } else if (props.children === 4) {
    handleHref = "http://x-media.pl";
  } else if (props.children === 5) {
    handleHref = "http://miotlowisko.pl/trzymiotly";
  }

  const history = useHistory();
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
