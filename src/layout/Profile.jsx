import * as React from "react";
import { Box, ThemeProvider } from "@mui/material";
// import bgImage from "../assets/bgImage.png";
import ProfileGIF from "../container/ProfileGIF";
import Contact from "./Contact";
import styled from "styled-components";
import DialogFull from "../container/DialogFull";
import "../App.css";
import "./index.css";

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

  const [open, setOpen] = React.useState(false);

  const ResponsiveText = styled.div`
    font-size: 16px; /* Default font size */

    @media (min-width: 576px) {
      font-size: 18px; /* Font size for small devices */
    }

    @media (min-width: 768px) {
      font-size: 20px; /* Font size for medium devices */
    }

    @media (min-width: 992px) {
      font-size: 24px; /* Font size for large devices */
    }

    @media (min-width: 1200px) {
      font-size: 28px; /* Font size for extra-large devices */
    }
  `;

  const ResponsiveHead = styled.span`
    font-size: 16px; /* Default font size */
    color: #ffb400

    @media (min-width: 576px) {
      font-size: 18px; /* Font size for small devices */
      color: #ffb400
    }

    @media (min-width: 768px) {
      font-size: 40px; /* Font size for medium devices */
      color: #ffb400
    }

    @media (min-width: 1000px) {
      font-size: 60px; /* Font size for large devices */
      color: #ffb400
    }

    @media (min-width: 1200px) {
      font-size: 80px; /* Font size for extra-large devices */
      color: #ffb400
    
  `;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "2rem",
        }}
      >
        <DialogFull open={open} func={setOpen} />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            borderRadius: "0.5rem",
            padding: "2rem 2rem 10rem 10rem",
          }}
        >
          <Box>
            <ResponsiveText>
              I'm Vivek Sagar
              <ResponsiveHead>Front-end</ResponsiveHead> Developer
            </ResponsiveText>

            <h5
              style={{
                fontWeight: "500",
                fontSize: "1rem",
                wordSpacing: "0.3rem",
                // minWidth: "900px",
              }}
              className="subtitle"
            >
              With one year of experience as a Frontend Developer at Track Four
              Infotech Pvt Ltd,
              <br /> I've specialized in crafting dynamic web interfaces using
              technologies like JavaScript and ReactJS.
              <br /> My role involved seamlessly integrating third-party APIs
              and maintaining high coding standards for scalable solutions.
              <br /> Working collaboratively in Track Four's dynamic
              environment, I've honed my skills in delivering captivating user
              experiences.
              <br /> I look forward to continuing my contributions to innovative
              projects in the frontend development domain at Track Four
              Infotech.
            </h5>

            <a
              href="mailto:viveksagar7319@gmail.com"
              style={{ textDecoration: "none" }}
            >
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
            </a>
            <button
              style={{
                backgroundColor: "#FCD34D",
                marginTop: "1.25rem",
                transition:
                  "background-color 0.3s, color 0.3s, border-color 0.3s",
                color: "white",
                fontWeight: "600",
                padding: "0.5rem 1rem",
                border: "1px solid #FCD34D",
                borderRadius: "0.375rem",
                cursor: "pointer",
                marginLeft: "1rem",
              }}
              // onMouseOver={handleMouseOver}
              // onMouseOut={handleMouseOut}
              onClick={() => setOpen(true)}
            >
              Projects
            </button>
          </Box>
          <Box className="profile_gif">
            <ProfileGIF />
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: "fixed" }}>
        <Contact />
      </Box>
    </>
  );
}
