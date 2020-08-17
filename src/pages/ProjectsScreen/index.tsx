import React, { Component } from "react";
import ProjectsHorizontalScreen from "../../components/projects_horizontal";
import { data } from "../ProjectsScreen/data";
import { dataMobile } from "../ProjectsScreen/dataMobile";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

class ProjectsScreen extends Component {
  constructor(props: any) {
    super(props);
  }
  state = {
    property: data.properties[0],
    propertyMobile: dataMobile.properties[0],
  };

  nextProperty = () => {
    if (window.matchMedia("(max-width:688px)").matches) {
      const newIndex = this.state.propertyMobile.index + 1;

      this.setState({
        propertyMobile: dataMobile.properties[newIndex],
      });
    } else {
      const newIndex = this.state.property.index + 1;
      this.setState({
        property: data.properties[newIndex],
      });
    }
  };

  prevProperty = () => {
    if (window.matchMedia("(max-width:688px)").matches) {
      const newIndex = this.state.propertyMobile.index - 1;

      this.setState({
        propertyMobile: dataMobile.properties[newIndex],
      });
    } else {
      const newIndex = this.state.property.index - 1;
      this.setState({
        property: data.properties[newIndex],
      });
    }
  };
  render() {
    const { property, propertyMobile } = this.state;

    if (window.matchMedia("(max-width:688px)").matches) {
      return (
        <div className="section-projects">
          <div className="triggers-holder">
            <div className="grid-elem_1">
              <button
                className="left"
                onClick={() => this.prevProperty()}
                disabled={propertyMobile.index === 0}
              >
                <AiOutlineArrowLeft />
              </button>
            </div>
            <div className="grid-elem_2">
              <button
                className="right"
                onClick={() => this.nextProperty()}
                disabled={
                  propertyMobile.index === dataMobile.properties.length - 1
                }
              >
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
          <ProjectsHorizontalScreen property={propertyMobile} />
        </div>
      );
    } else {
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
}

export default ProjectsScreen;
