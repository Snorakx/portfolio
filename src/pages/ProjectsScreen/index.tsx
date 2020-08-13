import React, { Component } from "react";
import ProjectsHorizontalScreen from "../../components/projects_horizontal";
// import HorizontalScroll from "react-scroll-horizontal";
import { data } from "../ProjectsScreen/data";
import { CSSTransition } from "react-transition-group";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

class ProjectsScreen extends Component {
  constructor(props: any) {
    super(props);
  }
  state = {
    appearHome: true,
    property: data.properties[0],
  };

  toggleAppear = () => {
    this.setState({
      appearHome: !this.state.appearHome,
    });
  };

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.properties[newIndex],
    });
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.properties[newIndex],
    });
  };
  render() {
    const { appearHome, property } = this.state;
    return (
      <div className="section-projects">
        <div className="triggers-holder">
          <div className="grid-elem_1">
            <button
              className="left"
              onClick={() => this.prevProperty()}
              disabled={property.index === 0}
            >
              <AiOutlineArrowLeft />
            </button>
          </div>
          <div className="grid-elem_2">
            <button
              className="right"
              onClick={() => this.nextProperty()}
              disabled={property.index === data.properties.length - 1}
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>

        <ProjectsHorizontalScreen property={property} />
      </div>
    );
  }
}

export default ProjectsScreen;
