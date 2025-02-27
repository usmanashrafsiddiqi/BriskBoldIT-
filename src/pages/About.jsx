import React from "react";
import { Container, Typography, Box, Button, Grid } from "@mui/material";
import { School, Lightbulb, Speed, Loop, PeopleAlt, Verified } from "@mui/icons-material";  // Imported new icons

export const About = (props) => {
    return (
        <div
            id="about"
            className="py-20"
            style={{
                position: "relative",
                paddingRight: "50px",
                paddingLeft: "50px",
                minHeight: "100vh",
                paddingBottom: "50px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                background: 'transparent',
            }}
        >
            <Container>
                <Grid container spacing={4} alignItems="flex-start" justifyContent="flex-start">
                    <Grid item xs={12} md={9}>
                        <Box
                            className="about-text space-y-6"
                            sx={{
                                textAlign: "left",
                                paddingTop: { xs: "20px", sm: "20px", md: "50px" },
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    fontFamily: "font-comic, sans-serif",
                                    fontWeight: 500,
                                    color: "white",
                                    fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
                                }}
                            >
                                About Us
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: "Montserrat, sans-serif",
                                    fontWeight: "normal",
                                    color: "white",
                                    lineHeight: 1.6,
                                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                                    marginBottom: "2rem",
                                }}
                            >
                                {props.data ? props.data.paragraph : "Loading..."}
                            </Typography>

                            <Typography
                                variant="h5"
                                sx={{
                                    fontFamily: "font-comic, sans-serif",
                                    fontWeight: "normal",
                                    color: "white",
                                    marginBottom: "1rem",
                                    fontWeight: "300",
                                    fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.8rem" },
                                }}
                            >
                                Why Choose Us?
                            </Typography>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    border: "0.1px solid white", // Thinner border
                                    backgroundColor: "transparent",
                                    width: "100%",
                                    marginBottom: "2rem",
                                    flexDirection: { xs: "column", sm: "row" }, // Stack boxes on small devices
                                    justifyContent: { md: "flex-start" }, // Start from the left on larger screens
                                    maxWidth: { md: "100%" }, // Increased width for large devices
                                    marginLeft: { md: "100px" }, // Move the box towards the right on larger screens
                                }}
                            >
                                {props.data
                                    ? props.data.Why.map((item, i) => {
                                        if (i < 6) {  // Ensure we have 6 sections
                                            // Icon selection based on the section name
                                            const icons = [
                                                <School sx={{ fontSize: 30, color: "#177dea" }} />,       // Expertise
                                                <Lightbulb sx={{ fontSize: 30, color: "#177dea" }} />,    // Innovation
                                                <Speed sx={{ fontSize: 30, color: "#177dea" }} />,        // Agility
                                                <Loop sx={{ fontSize: 30, color: "#177dea" }} />,         // Adaptability
                                                <PeopleAlt sx={{ fontSize: 30, color: "#177dea" }} />,    // Customer-Centric
                                                <Verified sx={{ fontSize: 30, color: "#177dea" }} />,     // Empty section with an icon (or can be left empty)
                                            ];

                                            return (
                                                <Box
                                                    key={`why-${i}`}
                                                    sx={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        border: "1px solid white",
                                                        width: { xs: "100%", sm: "33.33%" }, // 100% width for small devices, 33.33% for larger devices
                                                        padding: { xs: "8px", sm: "16px" }, // Padding adjustment for small devices
                                                        boxSizing: "border-box",
                                                        ...(i === 5 && { border: "none" }), // No border for the last section
                                                    }}
                                                >
                                                    {/* Icon */}
                                                    <Box sx={{ marginBottom: "8px" }}>
                                                        {icons[i]} {/* Display the corresponding icon */} 
                                                    </Box>

                                                    {/* Title (heading) */}
                                                    <Typography
                                                        variant="h6"
                                                        sx={{
                                                            fontFamily: "Montserrat, sans-serif",
                                                            fontWeight: "bold",
                                                            background: "linear-gradient(45deg, #177dea, #b22fe3)",
                                                            WebkitBackgroundClip: "text",
                                                            color: "white",
                                                            marginBottom: { xs: "4px", sm: "8px" }, // Adjust margin for small devices
                                                        }}
                                                    >
                                                        {item.title}
                                                    </Typography>

                                                    {/* Description */}
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            fontFamily: "Montserrat, sans-serif",
                                                            fontWeight: "normal",
                                                            color: "white",
                                                            lineHeight: 1.8,
                                                            fontSize: { xs: "0.8rem", sm: "1rem" }, // Smaller font size for small devices
                                                        }}
                                                    >
                                                        {item.description}
                                                    </Typography>
                                                </Box>
                                            );
                                        }
                                        return null;
                                    })
                                    : "Loading..."}
                            </Box>

                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: { xs: "center", md: "flex-start" },
                                    marginTop: "40px",
                                }}
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    href="#contact"
                                    sx={{
                                        padding: "12px 30px",
                                        fontSize: { xs: "14px", sm: "16px", md: "18px" },
                                        fontWeight: "bold",
                                        borderRadius: "5px",
                                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                        background: 'linear-gradient(45deg, #18b4e7, #2de9e8)',
                                        "&:hover": {
                                            background: 'linear-gradient(45deg, #18b4e7, #2de9e8)',
                                        },
                                    }}
                                >
                                    Get In Touch
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
