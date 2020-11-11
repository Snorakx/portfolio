import React, { FC } from "react";
import Typed from "react-typed";
import HomeButton from "./home_button";
import svg from "../assets/feeling_proud.svg";
import Particles from "react-tsparticles";

const HomeScreenContent: FC = (props) => {
  return (
    <div className="home-background">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#f0f0f0",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 100,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 90,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#000",
            },
            links: {
              color: "#00d563",
              distance: 220,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 100000,
              },
              value: 80,
            },
            opacity: {
              value: 0,
            },
            shape: {
              type: "square",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
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
          smartBackspace={false}
          showCursor={false}
        />
      </div>
      <HomeButton />
      <img
        className="svg-home"
        src={svg}
        alt="patryk kozieł portfolio programista"
      />
    </div>
  );
};

export default HomeScreenContent;
