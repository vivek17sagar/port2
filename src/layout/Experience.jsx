import * as React from "react";
import { Box, ThemeProvider } from "@mui/material";
import bgImage from "../assets/bgImage.png";
import ExperienceGIF from "../container/ExperienceGIF";

export default function Education() {
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
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          width: "85%",
          display: "flex",
          justifyContent: "space-between",
          padding: "2rem",
          borderRadius: "0.5rem",
        }}
      >
        <Box sx={{ transform: "scaleX(-1) " }}>
          <ExperienceGIF />
        </Box>

        <Box
          sx={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            display: "flex",
            width: "60%",
            padding: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          <Box>
            {" "}
            <div>
              <h1 className="text-[2rem]">Experience</h1>
              <div className=" p-3">
                <h2 className="font-semibold">Newton School - (Intern)</h2>
                <div className="text-[12px]">
                  <li>
                    Full Stack Web Development with D.S.A till (Queue and
                    Stack).
                  </li>
                  <li>
                    Technical Stack Learned: Java, HTML, CSS, JavaScript, React.
                  </li>
                  <li>
                    Participated in various coding contest organized by Newton
                    School.
                  </li>
                  <li>
                    Done various projects based on web technologies like
                    Responsive websites, Making website clones of Netflix and
                    Facebook etc.
                  </li>
                </div>
              </div>
              <div className="p-3">
                <h2 className="font-semibold">
                  Track Four Infotech - eOxegen (Software Developer)
                </h2>
                <div className="text-[12px]">
                  <li>
                    As a software developer at Track Four Infotech Pvt Ltd, I
                    specialized in JavaScript and ReactJS
                    technologies.Specialized in JavaScript & ReactJS for dynamic
                    frontend solutions.
                  </li>
                  <li>
                    Integrated third-party & internal APIs for seamless data
                    exchange
                  </li>
                  <li>
                    Ensured coding standards for scalability and
                    maintainability.
                  </li>
                  <li>
                    Collaborated cross-functionally to enhance application
                    architecture.
                  </li>
                  <li>
                    Proficient in troubleshooting & debugging to ensure
                    reliability.
                  </li>
                  <li>
                    Stayed updated with the latest JavaScript & ReactJS trends.
                  </li>
                  <li>
                    Contributed to delivering high-quality and innovative
                    solutions.
                  </li>
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
