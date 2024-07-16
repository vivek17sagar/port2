import React from "react";
import "./index.css";

const ProfileGIF = () => {
  return (
    <div className="gif-container">
      <video
        poster="https://static.observablehq.com/assets/marketing/components/home-hero-ga/hero-ga-poster-light.png"
        playsInline
        loop
        muted
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
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ProfileGIF;
