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
        margin: 0, // Remove margin here
        padding: 0, // Remove padding here
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column", // Stack header and content vertically
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 0, // Removed top padding
        paddingBottom: 0, // Removed bottom padding
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
          {data.tabs[0]?.head} {/* Display heading from data */}
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
            transition: "transform 5s ease-in-out", // Increased duration to 4 seconds
            transform: `rotateY(${flip ? 180 : 0}deg)`, // Flip only if flip is true
          }}
        >
          {/* Tab Content (This will flip between tabs) */}
          <Paper
            sx={{
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #1c2057, #0b0b37)", // Apply gradient to background
              padding: "15px",
              color: "white",
              transform: flip ? "rotateY(180deg)" : "rotateY(0deg)", // Apply rotation effect
              transition: "transform 5s ease-in-out", // Increased duration to 4 seconds
              backfaceVisibility: "hidden", // Hide the backside
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
                  color: "white",
                  width: "100%",
                }}
              >
                {data.tabs[currentTab]?.label} {/* Accordion Label */}
              </Typography>
            </Box>

            {/* Content */}
            <Box
              sx={{
                backgroundColor: "transparent",
                padding: "15px",
                borderRadius: "0px 0px 10px 10px",
                fontSize: "1rem",
              }}
            >
              <Typography variant="body1">
                {data.tabs[currentTab]?.content[0]} {/* Accordion Content */}
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default CommonTabs;
