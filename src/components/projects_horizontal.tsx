import React, { FC } from "react";

import SingleProject from "./project_item";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ProjectsHorizontalScreen = ({ property }: any) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  if (window.matchMedia("(max-width:688px)").matches) {
    return (
      <div className="projects-main-container">
        <SingleProject property={property} />
      </div>
    );
  } else {
    return (
      <div className="projects-main-container">
        <TransitionGroup className="background-image">
          <CSSTransition
            key={property.id}
            timeout={{ enter: 3000, exit: 1500 }}
            classNames="slide"
          >
            <SingleProject property={property} />
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
};
export default ProjectsHorizontalScreen;
