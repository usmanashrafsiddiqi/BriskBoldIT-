import React, { useState, useEffect } from "react";
import { Box, Typography, Paper } from "@mui/material";

const CommonTabs = ({ data }) => {
  const [currentTab, setCurrentTab] = useState(0); // To track the current content
  const [flip, setFlip] = useState(false); // Controls the flip effect

  useEffect(() => {
    const interval = setInterval(() => {
      setFlip(true); // Trigger flip animation
      setTimeout(() => {
        // After the flip animation ends, switch to the next tab
        setCurrentTab((prevTab) => (prevTab + 1) % data.tabs.length);
        setFlip(false); // Reset the flip effect
      }, 1000); // After 1 second (duration of flip)
    }, 4000); // Change content every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [data.tabs.length]);

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        position: "relative",
        minHeight: "50vh",
        height: "100%",
        margin: 0,
        padding: 0,
        backgroundColor: "transparent", // Ensure no background color is set
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Title Header */}
      <Box sx={{ textAlign: "center", marginBottom: "30px" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "800",
            color: "white",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3rem" },
          }}
        >
          {data.tabs[0]?.head}
        </Typography>
      </Box>

      {/* Single Box that flips */}
      <Box
        sx={{
          perspective: "1500px", // 3D effect
          width: "100%",
          maxWidth: "800px",
          height: "auto",
        }}
      >
        <Box
          sx={{
            transformStyle: "preserve-3d",
            height: "110%", // Increased height a little
            display: "flex",
            flexDirection: "column",
            transition: "transform 5s ease-in-out",
            transform: `rotateY(${flip ? 180 : 0}deg)`, // Flip only if flip is true
          }}
        >
          {/* Tab Content (This will flip between tabs) */}
          <Paper
            sx={{
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
              padding: "15px",
              color: "white",
              transform: flip ? "rotateY(180deg)" : "rotateY(0deg)", // Apply rotation effect
              transition: "transform 5s ease-in-out",
              backfaceVisibility: "hidden", // Hide the backside
              backdropFilter: "blur(10px)", // Frosted glass effect
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Slight transparency for the frosted effect
              border: "1px solid rgba(255, 255, 255, 0.9)", // Shiny white border
              boxShadow: "0 4px 10px rgba(255, 255, 255, 0.3)", // Add subtle glowing effect
            }}
          >
            {/* Title (Tab Label) */}
            <Box
              sx={{
                backgroundColor: "transparent", // Make summary transparent to let gradient show
                color: "white",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "white",
                  width: "100%",
                }}
              >
                {data.tabs[currentTab]?.label}
              </Typography>
            </Box>

            {/* Content */}
            <Box
              sx={{
                backgroundColor: "transparent", // Transparent background so background image shows through
                padding: "15px",
                borderRadius: "0px 0px 10px 10px",
                fontSize: "1rem",
              }}
            >
              <Typography variant="body1">
                {data.tabs[currentTab]?.content[0]}
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default CommonTabs;
