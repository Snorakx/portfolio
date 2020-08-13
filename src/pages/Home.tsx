import React, { Component } from "react";

import Nav from "../components/nav";
import HomeScreenContent from "../components/homeScreenContent";
import TechnologiesScreenContent from "../components/technologiesContent";
import ProjectsScreen from "./ProjectsScreen";
import ProjectsHorizontalScreen from "../components/projects_horizontal";
import TechScreen from "./TechnologiesScreen";

const HomeScreen = () => {
  return (
    <div className="section-home">
      <HomeScreenContent />
      <ProjectsScreen />
      <TechScreen />
    </div>
  );
};

export default HomeScreen;
