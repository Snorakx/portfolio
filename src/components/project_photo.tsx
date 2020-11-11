import React, { FC, useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const ProjectPhoto: FC = (props) => {
  const vh = window.innerHeight;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="project-photo-box" data-aos="fade-in" data-aos-delay="3000">
      <img src={`${props.children}`} alt="Projekt FrontEnd Patryk Kozieł" />
      {/* <img src={"../assets/miotlowiskoSmartphone.png"} /> */}
    </div>
  );
};

export default ProjectPhoto;
