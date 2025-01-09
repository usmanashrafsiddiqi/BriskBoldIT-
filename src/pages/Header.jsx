import React from "react";
import { Box } from "@mui/material";
import banner from "/assets/briskboldbanner.jpg";
import tabletbanner from "/assets/tabtwo.jpg";
import mobilebanner from "/assets/tabbbb.jpg"
export const Header = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "40vh", sm: "50vh", md: "60vh" },
        backgroundImage:  `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 0.5s ease-in-out",
        "@media (max-width: 1200px)": {
          backgroundImage: `url(${tabletbanner})`,
        },
        "@media (max-width: 768px)": {
          backgroundImage: `url(${mobilebanner})`,
          
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
          // backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      </Box>
    </Box>
  );
};
