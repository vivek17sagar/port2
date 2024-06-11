import * as React from "react";
import { Box, ThemeProvider } from "@mui/material";
import bgImage from "../assets/bgImage.png";
import ProfileGIF from "../container/ProfileGIF";

export default function Profile() {
  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = "#FBBF24";
    e.target.style.color = "#FFFFFF";
    e.target.style.borderColor = "transparent";
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = "#FBBF24";
    e.target.style.borderColor = "#FCD34D";
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "2rem",
      }}
    >
      <Box
        sx={{
          width: "70%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          borderRadius: "0.5rem",
          padding: "2rem",
        }}
      >
        <Box>
          <h1 style={{ fontSize: "3rem" }}>
            I'm Vivek Sagar{" "}
            <span style={{ color: "#ffb400", fontSize: "4rem" }}>
              Front-end
            </span>{" "}
            Developer
          </h1>
          <h5
            style={{
              fontWeight: "500",
              fontSize: "0.8rem",
              wordSpacing: "0.3rem",
            }}
          >
            With one year of experience as a Frontend Developer at Track Four
            Infotech Pvt Ltd,
            <br /> I've specialized in crafting dynamic web interfaces using
            technologies like JavaScript and ReactJS.
            <br /> My role involved seamlessly integrating third-party APIs and
            maintaining high coding standards for scalable solutions.
            <br /> Working collaboratively in Track Four's dynamic environment,
            I've honed my skills in delivering captivating user experiences.
            <br /> I look forward to continuing my contributions to innovative
            projects in the frontend development domain at Track Four Infotech.
          </h5>
          <button
            style={{
              backgroundColor: "transparent",
              marginTop: "1.25rem",
              transition:
                "background-color 0.3s, color 0.3s, border-color 0.3s",
              color: "#FBBF24",
              fontWeight: "600",
              padding: "0.5rem 1rem",
              border: "1px solid #FCD34D",
              borderRadius: "0.375rem",
              cursor: "pointer",
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Hire Me
          </button>
        </Box>
        <Box>
          <ProfileGIF />
        </Box>
      </Box>
    </Box>
  );
}
