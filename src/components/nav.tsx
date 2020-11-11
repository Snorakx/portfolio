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
import { GiFizzingFlask } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";

const Nav: FC = (props) => {
  const vh = window.innerHeight;
  const top = window.top;

  if (window.matchMedia("(max-width:688px)").matches) {
    return (
      <div className="nav-container">
        <Header />
        <div className="nav-buttons">
          <div className="btn-container">
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
              <GiFizzingFlask></GiFizzingFlask>
            </Link>
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
              <AiFillHome></AiFillHome>
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="section-contact"
              spy={true}
              smooth={true}
              offset={-0.08 * vh}
              duration={500}
              delay={500}
            >
              <IoIosContact></IoIosContact>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
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
              duration={300}
              delay={100}
            >
              Home
            </Link>
            <Link
              className="nav-link"
              activeClass="active"
              to="section-projects"
              spy={true}
              smooth={true}
              offset={-0.08 * vh}
              duration={300}
              delay={100}
            >
              Projects
            </Link>
            {/* <Link
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
          </Link> */}
            <Link
              className="nav-link"
              activeClass="active"
              to="section-contact"
              spy={true}
              smooth={true}
              offset={-0.08 * vh}
              duration={300}
              delay={100}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default Nav;
