import React from "react";
import { Box } from "@mui/material";
import banner from "/assets/large2.png";
import tabletbanner from "/assets/tab1.jpg";
import mobilebanner from "/assets/mob1.jpg"
export const Header = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "30vh", sm: "50vh", md: "50vh" },
        backgroundImage:  `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 0.5s ease-in-out",
        "@media (max-width: 700px)": {
          backgroundImage: `url(${tabletbanner})`,
        },
        "@media (max-width: 400px)": {
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
