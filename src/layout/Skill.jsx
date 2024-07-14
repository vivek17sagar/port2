import React, { useEffect, useState } from "react";
import Chart from "../container/Chart";
// import programming_icon from "../assets/programmig_icon.png";
// import tech_icon from "../assets/tech_icon.png";
// import core_icon from "../assets/core_icon.png";
// import tools_icon from "../assets/tools_icon.png";
// import skill_icon from "../assets/skill_icon.png";
import dataSet from "../Data/SkillData";
import { Box } from "@mui/material";
import ResSkill from "./ResSkill";
import "./index.css";

const Skill = () => {
  const [activeSkill, setActiveSkill] = useState("technical");
  const [switchSkill, setswitchSkill] = useState(0);

  function debounce(func, wait) {
    let timeout;
    return function () {
      const context = this,
        args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

  function onViewportSizeChange() {
    const viewportWidth = window.innerWidth;
    console.log("Viewport size changed!");
    console.log("Current viewport width:", viewportWidth);
    if (viewportWidth <= 1440) {
      setswitchSkill(1);
    } else {
      setswitchSkill(0);
    }
  }

  window.addEventListener("resize", debounce(onViewportSizeChange, 200));

  useEffect(() => {
    onViewportSizeChange();
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "2rem" }}>
      <Box
        sx={{
          width: "85%",
          display: switchSkill == 0 ? "flex" : "null",
          alignItems: "center",
          justifyContent: "space-around",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          borderRadius: "0.5rem",
          padding: "2rem",
        }}
      >
        {switchSkill == 0 ? (
          <Box
            sx={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              padding: "3rem",
              borderRadius: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ffb400]-500 duration-200 text-black ${
                activeSkill == "technical" ? "bg-[#ffb400]" : null
              } border flex p-5 rounded-md font-bold text-[1.3rem] items-center justify-center gap-2 cursor-pointer`}
              onClick={() => setActiveSkill("technical")}
            >
              <div>
                {/* <img src={skill_icon} alt="programming-Icon" className="w-6" /> */}
              </div>
              <div>Technical Skills</div>
            </div>
            <div
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ffb400]-500 duration-200 text-black ${
                activeSkill == "programming" ? "bg-[#ffb400]" : null
              } border flex p-5 rounded-md font-bold text-[1.3rem] items-center justify-center gap-2 cursor-pointer`}
              onClick={() => setActiveSkill("programming")}
            >
              <div>
                {/* <img
                  src={programming_icon}
                  alt="programming-Icon"
                  className="w-6"
                /> */}
              </div>
              <div>Programming</div>
            </div>
            <div
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ffb400]-500 duration-200 text-black ${
                activeSkill == "Technologies" ? "bg-[#ffb400]" : null
              } border flex p-5 rounded-md font-bold text-[1.3rem] items-center justify-center gap-2 cursor-pointer`}
              onClick={() => setActiveSkill("Technologies")}
            >
              <div>
                {/* <img src={tech_icon} alt="tech-Icon" className="w-6" /> */}
              </div>
              <div>Technologies</div>
            </div>

            {/* <div
              className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white border flex p-5 rounded-md font-bold text-[1.3rem] items-center justify-center gap-2"
              onClick={() => setActiveSkill("Core")}
            >
              <div>
                <img src={core_icon} alt="core-Icon" className="w-6" />
              </div>
              <div>Core CS</div>
            </div> */}
            <div
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ffb400]-500 duration-200 text-black ${
                activeSkill == "tools" ? "bg-[#ffb400]" : null
              } border flex p-5 rounded-md font-bold text-[1.3rem] items-center justify-center gap-2 cursor-pointer`}
              onClick={() => setActiveSkill("tools")}
            >
              <div>
                {/* <img src={tools_icon} alt="tools-Icon" className="w-6" /> */}
              </div>
              <div>Tools</div>
            </div>
          </Box>
        ) : (
          <ResSkill setActiveSkill={setActiveSkill} />
        )}
        <Box
          className="border-solid p-[5rem] flex flex-col gap-5 min-h-[700px] skillChart"
          sx={{
            borderRadius: "16px",
            backdropFilter: "blur(3px)",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <Chart dataSet={dataSet} activeSkill={activeSkill} />
        </Box>
      </Box>
    </Box>
  );
};

export default Skill;
