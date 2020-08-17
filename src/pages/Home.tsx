import React, { Component } from "react";

import HomeScreenContent from "../components/homeScreenContent";
import ProjectsScreen from "./ProjectsScreen";
import ContactScreen from "./ContactScreen";

const HomeScreen = () => {
  return (
    <div className="section-home">
      <HomeScreenContent />
      <ProjectsScreen />
      <ContactScreen />
    </div>
  );
};

export default HomeScreen;
