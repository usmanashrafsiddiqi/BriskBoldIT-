import React from 'react';
import { Box, Typography } from '@mui/material';
import nasdaqimg from "/assets/nasdaq.jpg";
import abodeimg from "/assets/abode.jpg";
import wabisabiimg from "/assets/wabisabi.jpg";
import ucmimg from "/assets/ucm.jpg";
import derimg from "/assets/der.jpg";

const carouselImages = [
    nasdaqimg,
    abodeimg,
    wabisabiimg,
    ucmimg,
    derimg
];

const Customer = () => {
    return (
        <Box
            sx={{
                width: '100%',
                padding: '30px',
                background: 'transparent',  // Set the background to transparent
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
                Trusted by top analysts, loved by customers.
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
                                alt={`Customer ${index}`}
                                style={{
                                    width: '220px',  // Default size for larger screens
                                    height: '120px',  // Default height
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
                            width: 150px;  // Reduce size for medium screens
                            height: 150px;
                        }
                    }

                    @media (max-width: 768px) {
                        img {
                            width: 120px;  // Reduce size further for smaller screens
                            height: 120px;
                        }
                    }

                    @media (max-width: 480px) {
                        img {
                            width: 100px;  // Even smaller size for very small screens
                            height: 100px;
                        }
                    }
                `}
            </style>
        </Box>
    );
};

export default Customer;
