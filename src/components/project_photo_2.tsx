import React, { FC, useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const ProjectPhoto2: FC = (props) => {
  const vh = window.innerHeight;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  let handleHref = "";

  return (
    <div
      className="project-photo-box-2"
      data-aos="fade-in"
      data-aos-delay="3000"
    >
      <img
        src={`${props.children}`}
        alt="Projekt Frontend, Programista, Patryk Kozieł"
      />
    </div>
  );
};

export default ProjectPhoto2;
