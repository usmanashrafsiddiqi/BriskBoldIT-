import React from "react";
import { Box } from "@mui/material";

export const Header = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "40vh", sm: "50vh", md: "60vh" },
        backgroundImage: 'url("src/assets/briskboldbanner.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 0.5s ease-in-out",
        "@media (max-width: 1200px)": {
          backgroundImage: 'url("src/assets/tabtwo.jpg")',
        },
        "@media (max-width: 768px)": {
          backgroundImage: 'url("src/assets/tabbbb.jpg")',
          
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      </Box>
    </Box>
  );
};
