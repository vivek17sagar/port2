import { Box } from "@mui/material";
import React from "react";

const Certification = () => {
  return (
    <Box sx={{ padding: "2rem" }}>
      <h1 className="text-[2rem]">Certification</h1>
      <div>
        <div className=" p-3">
          <h2 className="font-semibold">Newton School - March 2023</h2>
          <div className="text-[12px]">
            <li>
              Full Stack Web Development with D.S.A till (Queue and Stack).
            </li>
            <li>
              Technical Stack Learned: Java, HTML, CSS, JavaScript, React.
            </li>
            <li>
              Participated in various coding contest organized by Newton School.
            </li>
            <li>
              Done various projects based on web technologies like Responsive
              websites, Making website clones of Netflix and Facebook etc.
            </li>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Certification;
