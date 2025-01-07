import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { Image } from "./Image";

export const Gallery = (props) => {
    return (
        <div
            id="portfolio"
            style={{
                backgroundColor: "#f7fafc",
                paddingTop: "3rem",
                paddingBottom: "3rem",
                overflow: "hidden", 
            }}
        >
            <Container>
                <Box sx={{ textAlign: "center", marginBottom: "3rem" }}>
                    <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2d3748" }}>
                        Gallery
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#718096",
                            maxWidth: "42rem",
                            margin: "auto",
                            marginTop: "1rem",
                        }}
                    >
                        Explore our AI Gallery, showcasing innovative projects that harness the
                        power of artificial intelligence to transform industries. From automation
                        to data analysis, see how AI is shaping the future.
                    </Typography>
                </Box>

                {/* Create a scrollable container for images */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        animation: "scroll 20s linear infinite", 
                    }}
                >
                    {props.data ? (
                        // Duplicate images to create a seamless scroll effect
                        [...props.data, ...props.data].map((d, i) => (
                            <div
                                key={`${d.title}-${i}`}
                                style={{
                                    marginRight: "20px", 
                                    display: "inline-block",
                                }}
                            >
                                <div
                                    style={{
                                        position: "relative",
                                        width: "200px", 
                                        height: "auto",
                                        overflow: "hidden",
                                        borderRadius: "12px", 
                                    }}
                                >
                                    <Image
                                        title={d.title}
                                        largeImage={d.largeImage}
                                        smallImage={d.smallImage}
                                        sx={{
                                            borderRadius: "12px",
                                            width: "100%",
                                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                            "&:hover": {
                                                transform: "scale(1.05)", 
                                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        ))
                    ) : (
                        <Typography variant="body1" sx={{ color: "#718096", textAlign: "center" }}>
                            Loading...
                        </Typography>
                    )}
                </div>
            </Container>

            {/* CSS for continuous scrolling */}
            <style>
                {`
                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-100%);
                        }
                    }
                `}
            </style>
        </div>
    );
};
