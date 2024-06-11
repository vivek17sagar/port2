import * as React from "react";
import { Box, ThemeProvider } from "@mui/material";
import bgImage from "../assets/bgImage.png";

export default function Profile() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "2rem",
      }}
    >
      {/* <ThemeProvider
        theme={{
          palette: {
            primary: {
              main: "white",
              dark: "#0066CC",
            },
          },
        }}
      > */}
      <Box
        sx={{
          width: "90%",
          height: 100,
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          borderRadius: 1,
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      />
      {/* </ThemeProvider> */}
    </Box>
  );
}
