import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./layout/Header";
import Profile from "./layout/Profile";

function App() {
  return (
    <>
      <Header />
      <Profile />
    </>
  );
}

export default App;
