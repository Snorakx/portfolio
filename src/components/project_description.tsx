import React, { FC, useEffect } from "react";
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
      data-aos-delay="1500"
      className="project-desc-box"
    >
      <div className="description">{props.children}</div>
    </div>
  );
};

export default ProjectDescription;
