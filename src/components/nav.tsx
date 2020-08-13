import React, { FC } from "react";
import Header from "./header";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Nav: FC = (props) => {
  const vh = window.innerHeight;
  const top = window.top;
  return (
    <div className="nav-container">
      <Header />
      <div className="nav-buttons">
        <div className="btn-container">
          <Link
            className="nav-link"
            activeClass="active"
            to="home-background"
            spy={true}
            smooth={true}
            offset={-0.1 * vh}
            duration={500}
            delay={500}
          >
            HOME
          </Link>
          <Link
            className="nav-link"
            activeClass="active"
            to="section-projects"
            spy={true}
            smooth={true}
            offset={-0.08 * vh}
            duration={500}
            delay={500}
          >
            PROJECTS
          </Link>
          <Link
            className="nav-link"
            activeClass="active"
            to="section-tech"
            spy={true}
            smooth={true}
            offset={-0.08 * vh}
            duration={500}
            delay={500}
          >
            TECHNOLOGIES
          </Link>
          <Link
            className="nav-link"
            activeClass="active"
            to="techno"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            delay={500}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
