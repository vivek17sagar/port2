import { Box } from "@mui/material";
import React from "react";

const Education = () => {
  return (
    <Box sx={{ padding: "2rem" }}>
      <h1 className="text-[2rem]">Education</h1>
      <div>
        <div className=" p-3">
          <h2 className="font-semibold">
            Global Mansarovar University - Bhopal
          </h2>
          <h3 className="font-semibold text-sm">
            B.C.A - Bachelor Of Computer Application
          </h3>
          <h3 className="font-semibold text-sm">Year - 2022</h3>
          <h3 className="font-semibold text-sm">CGPA/Percentage - 7.53/10.0</h3>
        </div>
        <hr />
        <div className=" p-3">
          <h2 className="font-semibold">
            Adarsh Bal Vidhya Mandir Sr. Sec. School - Aklera
          </h2>
          <h3 className="font-semibold text-sm">Intermediate-XII - Science</h3>
          <h3 className="font-semibold text-sm">Year - 2018</h3>
          <h3 className="font-semibold text-sm">CGPA/Percentage - 54%</h3>
        </div>
        <hr />
        <div className=" p-3">
          <h2 className="font-semibold">
            Modern Education Society Sec. School - Aklera
          </h2>
          <h3 className="font-semibold text-sm">Matric-X</h3>
          <h3 className="font-semibold text-sm">Year - 2016</h3>
          <h3 className="font-semibold text-sm">CGPA/Percentage - 73.82%</h3>
        </div>
      </div>
    </Box>
  );
};

export default Education;
