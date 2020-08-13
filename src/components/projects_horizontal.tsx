import React, { FC, Component, useEffect } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { ScrollTo, ScrollArea } from "react-scroll-to";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
import ProjectHeader from "./project_header";
import ProjectDescription from "./project_description";
import ProjectButton from "./project_button";
import { data } from "../pages/ProjectsScreen/data";
import SingleProject from "./project_item";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Aos from "aos";

const ProjectsHorizontalScreen = ({ property }: any) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

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
};
export default ProjectsHorizontalScreen;
