import React from 'react';
import { Box, Typography } from '@mui/material';
import software1 from "/assets/1.jpg";
import software2 from "/assets/2.jpg";
import software3 from "/assets/3.jpg";
import software4 from "/assets/4.jpg";
import software5 from "/assets/5.jpg";
import software6 from "/assets/6.jpg";
import software7 from "/assets/7.jpg";
import software8 from "/assets/8.jpg";
import software9 from "/assets/9.jpg";
import software10 from "/assets/10.jpg";
import software11 from "/assets/11.jpg";
import software12 from "/assets/12.jpg";

const carouselImages = [
    software1,
    software2,
    software3,
    software4,
    software5,
    software6,
    software7,
    software8,
    software9,
    software10,
    software11,
    software12,
];

const Software = () => {
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
                    fontWeight: 500,
                    marginBottom: '30px',
                    fontSize: '2rem',
                    letterSpacing: '1px',
                    fontFamily: '"font-comic", "Montserrat","sans-serif"',
                }}
            >
                Software Development
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
                                alt={`Software ${index}`}
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

export default Software;
