import React from "react";
import { Container, Grid, Typography, Box, Button } from "@mui/material";

export const Header = () => {
  return (
    <header
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("src/assets/briskboldbanner.jpg")',
        marginBottom: "50px",
        paddingBottom: "20px",
        height: "auto",
        minHeight: "300px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Mobile background image (will be applied on small screens) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{
            backgroundImage: `url(src/assets/newmobile.jpg)`,  
           
        }}
      ></div>

      {/* Tablet background image (will be applied on tablets) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden md:block"
        style={{
          backgroundImage: 'url("src/assets/tabletbanner.jpg")', 
        }}
      ></div>

      {/* Overlay for darker background */}
      <Box className="absolute inset-0 bg-black opacity-50"></Box>

    
    </header>
  );
};
