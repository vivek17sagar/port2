import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./layout/Header";
import Profile from "./layout/Profile";
import Education from "./layout/Education";
import Skill from "./layout/Skill";
function App() {
  return (
    <>
      <Header />
      <Profile />
      <Education />
      <Skill />
    </>
  );
}

export default App;
