import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/NWQ6KgXJ7x.json";
import "./index.css";
const ProfileGIF = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="gif-container">
      {/* <Lottie options={defaultOptions} /> */}
      {/* <Box sx={{ position: "absolute", zIndex: "-2", opacity: "0.7" }}> */}
      <video
        poster="https://static.observablehq.com/assets/marketing/components/home-hero-ga/hero-ga-poster-light.png"
        playsInline
        loop
        autoPlay
        style={{
          transition: "opacity 0.05s ease 0s",
          opacity: 1,
          mixBlendMode: "unset",
          width: "100%",
        }}
      >
        <source
          src="https://static.observablehq.com/assets/marketing/components/home-hero-ga/hero-ga-1440-light.webm"
          type="video/webm"
        />
        <source
          src="https://static.observablehq.com/assets/marketing/components/home-hero-ga/hero-ga-1440-light.mp4"
          type="video/mp4"
        />
      </video>
      {/* </Box> */}
    </div>
  );
};

export default ProfileGIF;
