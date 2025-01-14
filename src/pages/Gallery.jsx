import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { Image } from "./Image";

export const Gallery = (props) => {
    return (
        <div
            id="portfolio"
            style={{
                backgroundImage: 'url(/assets/partnerbanner.png)',  // <-- Add your background image here
                backgroundSize: "cover", // Ensures the background image covers the entire container
                backgroundPosition: "center", // Centers the background image
                paddingTop: "3rem",
                paddingBottom: "3rem",
                overflow: "hidden",
                backgroundRepeat: "no-repeat", // Prevents the image from repeating
            }}
        >
            <Container>
                <Box sx={{ textAlign: "center", marginBottom: "3rem" }}>
                    <Typography variant="h4" className="font-bold " 
                    sx={{ fontWeight: "800", color:"white" }}
                  >
                        Partners and Vendors
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "black",
                            maxWidth: "60rem",
                            margin: "auto",
                            marginTop: "1rem",
                            
                        }}
                        style={{ 
                            color: 'white',
                            }}
                    >
                       We are proud to collaborate with trusted partners and esteemed vendors who help us deliver exceptional solutions. Together, we drive innovation and provide top-notch products and services to our clients. Their expertise and commitment are key to making our vision a reality.
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
                                        borderRadius: "8px", 
                                        backgroundColor:"white"
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
