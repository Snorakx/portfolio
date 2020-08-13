import React, { FC } from "react";
import Typed from "react-typed";
import HomeButton from "./home_button";

const HomeScreenContent: FC = (props) => {
  return (
    <div className="home-background">
      <div className="welcome-text-box">
        <Typed
          className="welcome-text_1"
          strings={["Hi! I'm Patryk!"]}
          typeSpeed={50}
          backSpeed={30}
          smartBackspace={true}
          showCursor={false}
        />
      </div>
      <div className="welcome-text-box_1">
        <Typed
          className="welcome-text"
          strings={["I'm a Frontend Developer!"]}
          typeSpeed={40}
          backSpeed={50}
          startDelay={2000}
          smartBackspace={true}
        />
      </div>
      <HomeButton />
    </div>
  );
};

export default HomeScreenContent;
