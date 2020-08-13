import React, { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";

const ProjectButton: FC = (props) => {
  let handleHref = "";
  if (props.children === 1) {
    handleHref = "http://miotlowisko.pl/trzymiotly/";
  } else {
    handleHref = "http://wp-start.cba.pl/";
  }
  const history = useHistory();
  // const { href } = property;

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
};

export default ProjectButton;
