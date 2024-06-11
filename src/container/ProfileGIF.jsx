import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/NWQ6KgXJ7x.json";

const ProfileGIF = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={700} width={700} />;
};

export default ProfileGIF;
