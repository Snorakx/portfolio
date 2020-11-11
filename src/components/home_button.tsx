import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-scroll";

const HomeButton: FC = (props) => {
  const history = useHistory();

  const goToProjects = () => {
    history.push("/projects");
  };
  const vh = window.innerHeight;

  return (
    <div className="home-button-box">
      <Link
        className="link"
        activeClass="active"
        to="section-projects"
        spy={true}
        smooth={true}
        offset={-0.08 * vh}
        duration={500}
        delay={100}
      >
        <div className="home-button">Projects</div>
      </Link>
      <Link
        className="link"
        activeClass="active"
        to="section-contact"
        spy={true}
        smooth={true}
        offset={-0.1 * vh}
        duration={500}
        delay={100}
      >
        <div className="home-button_1">Contact</div>
      </Link>
    </div>
  );
};

export default HomeButton;
