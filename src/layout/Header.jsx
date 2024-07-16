import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import "../App.css";

export default function Header() {
  const h4Style = {
    margin: 0,
    padding: "0 1rem",
    transition: "color 0.3s",
  };

  const handleMouseOver = (e) => {
    e.target.style.color = "black";
  };

  const handleMouseOut = (e) => {
    e.target.style.color = "gray";
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        position="static"
        sx={{
          backgroundColor: "white",
          borderRadius: "0.5rem",
          display: "flex",
          alignItems: "center",
          // boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          padding: "1rem 2rem",
        }}
      >
        <Box
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontSize: "4rem",
            color: "#ffb400",
          }}
          className="heading"
        >
          Portfolio
        </Box>
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
            paddingRight: "10rem",
            letterSpacing: "1px",
            color: "gray",
            cursor: "pointer",
          }}
        >
          {["Profile", "Experience", "Project"].map((text) => (
            <h4
              key={text}
              style={h4Style}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              {text}
            </h4>
          ))}
        </Box> */}
      </Box>
    </Box>
  );
}
