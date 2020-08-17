import React, { FC } from "react";

import ProjectHeader from "./project_header";
import ProjectDescription from "./project_description";
import ProjectButton from "./project_button";
import PropTypes from "prop-types";

import ProjectPhoto from "./project_photo";
import ProjectPhoto2 from "./project_photo_2";

const SingleProject = ({ property }: any) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const {
    id,
    project_header,
    index,
    project_description,
    picture,
    picture_2,
    href,
  } = property;

  return (
    <div className="projects_item" id={`project-${index}`}>
      <ProjectPhoto2>{picture_2}</ProjectPhoto2>

      <ProjectPhoto>{picture}</ProjectPhoto>
      <ProjectHeader>{project_header}</ProjectHeader>
      <ProjectDescription>{project_description}</ProjectDescription>
      <ProjectButton>{index}</ProjectButton>
    </div>
  );
};

SingleProject.propTypes = {
  property: PropTypes.object.isRequired,
};
export default SingleProject;
