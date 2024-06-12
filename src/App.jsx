import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./layout/Header";
import Profile from "./layout/Profile";
import Experience from "./layout/Experience";
import Education from "./layout/Education";
import Skill from "./layout/Skill";
import { Box } from "@mui/material";
import Skillfield from "./layout/Skillfield";
import Certification from "./layout/Certification";
import Project from "./layout/Project";

function App() {
  return (
    <>
      <Header />
      <Profile />
      <Box sx={{ display: "flex" }}>
        <Box>
          <Experience />
          <Skill />
        </Box>
        <Box
          sx={{
            width: "20%",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            marginTop: "2rem",
            borderRadius: "0.5rem",
          }}
        >
          <Skillfield />
          <hr />
          <Education />
          <hr />
          <Certification />
        </Box>
      </Box>
      {/* <Box>
        <Project />
      </Box> */}
    </>
  );
}

export default App;
