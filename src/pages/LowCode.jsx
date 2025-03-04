import React from 'react';
import { Box, Typography } from '@mui/material';
import low1 from "/assets/13.jpg";
import low2 from "/assets/14.jpg";
import low3 from "/assets/15.jpg";
import low4 from "/assets/16.jpg";
import low5 from "/assets/17.jpg";

const carouselImages = [
    low1,
    low2,
    low3,
    low4,
    low5
];

const LowCode = () => {
    return (
        <Box
            sx={{
                width: '100%',
                padding: '30px',
                background: 'transparent',  // <-- Set background to transparent
                color: 'white',
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: 800,
                    marginBottom: '30px',
                    fontSize: '2rem',
                    letterSpacing: '1px',
                    fontFamily: '"font-comic", "Montserrat","sans-serif"',
                }}
            >
                Low Code Expertise
            </Typography>

            {/* Wrapper to make the images responsive */}
            <Box sx={{ overflow: 'hidden', width: '100%' }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        animation: 'scroll 15s linear infinite',
                    }}
                >
                    {/* Duplicate images to ensure smooth looping */}
                    {[...carouselImages, ...carouselImages].map((image, index) => (
                        <div key={index} style={{ marginRight: '20px' }}>
                            <img
                                src={image}
                                alt={`Low Code ${index}`}
                                style={{
                                    width: '220px',
                                    height: '120px',
                                    borderRadius: '8px',
                                    margin: '0 auto',
                                    display: 'block',
                                    objectFit: 'cover',
                                    backgroundColor: "white",
                                    backdropFilter: "blur(10px)",
                                    border: '3px solid rgb(240, 240, 240)',
                                    boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                                }}
                            />
                        </div>
                    ))}
                </div>
            </Box>

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

                    /* Media Queries for Responsiveness */
                    @media (max-width: 1024px) {
                        img {
                            width: 150px;
                            height: 150px;
                        }
                        .scroll {
                            animation: scroll 15s linear infinite;
                        }
                    }

                    @media (max-width: 768px) {
                        img {
                            width: 100px;
                            height: 100px;
                        }
                        .scroll {
                            animation: scroll 12s linear infinite;
                        }
                    }

                    @media (max-width: 480px) {
                        img {
                            width: 80px;
                            height: 80px;
                        }
                        .scroll {
                            animation: scroll 10s linear infinite;
                        }
                    }
                `}
            </style>
        </Box>
    );
};

export default LowCode;
