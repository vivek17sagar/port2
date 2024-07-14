import { Box } from "@mui/material";
import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Skillfield = () => {
  return (
    <Box sx={{ padding: "2rem" }}>
      <h1 className="text-[2rem]">TechStack</h1>
      <Stack direction="row" sx={{ flexWrap: "wrap" }}>
        <Chip
          label="ReactJS"
          sx={{
            backgroundColor: "#3b82f6",
            color: "white",
            margin: "0.5rem",
          }}
        />
        <Chip
          label="Javascript"
          sx={{ backgroundColor: "#ffb400", color: "white", margin: "0.5rem" }}
        />
        <Chip
          label="CSS"
          sx={{ backgroundColor: "#07a2d2", color: "white", margin: "0.5rem" }}
        />

        <Chip
          label="Java"
          sx={{ backgroundColor: "#ef4444", color: "white", margin: "0.5rem" }}
        />
        <Chip
          label="Material-UI"
          sx={{ backgroundColor: "#007fff", color: "white", margin: "0.5rem" }}
        />
        <Chip
          label="Tailwind-CSS"
          sx={{ backgroundColor: "#07a2d2", color: "white", margin: "0.5rem" }}
        />
        <Chip
          label="Typescript"
          sx={{ backgroundColor: "#98e587", color: "white", margin: "0.5rem" }}
        />
        <Chip
          label="Rxjs"
          sx={{ backgroundColor: "#c2185b", color: "white", margin: "0.5rem" }}
        />
        <Chip
          label="HTML"
          sx={{ backgroundColor: "#07a2d2", color: "white", margin: "0.5rem" }}
        />
        <Chip
          label="Keycloak"
          sx={{ backgroundColor: "#f25022", color: "white", margin: "0.5rem" }}
        />
        <Chip
          label="ReduxJS"
          sx={{ backgroundColor: "#945fd7", color: "white", margin: "0.5rem" }}
        />

        <Chip
          label="Bootstrap"
          sx={{ backgroundColor: "#8f12fe", color: "white", margin: "0.5rem" }}
        />
      </Stack>
    </Box>
  );
};

export default Skillfield;
