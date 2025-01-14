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
                backgroundImage: 'url(/assets/customerbg.png)',
               
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                color: 'white',
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    background: 'linear-gradient(45deg, #FF6F61, #6B5B95)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontWeight: 'bold',
                    marginBottom: '30px',
                    fontSize: '2rem',
                    letterSpacing: '1px',
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
                        animation: 'scroll 20s linear infinite', // Continuous scroll animation
                    }}
                >
                    {/* Duplicate images to ensure smooth looping */}
                    {[...carouselImages, ...carouselImages].map((image, index) => (
                        <div key={index} style={{ marginRight: '20px' }}>
                            <img
                                src={image}
                                alt={`Customer ${index}`}
                                style={{
                                    width: '220px',
                                    height: '120px',
                                    borderRadius: '8px',
                                    // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
                                    margin: '0 auto',
                                    display: 'block',
                                    objectFit: 'cover',
                                    backgroundColor:"white",

                                    // Enhanced Glass effect styling
                                    background: "rgba(255, 255, 255, 0.05)", 
                                    backdropFilter: "blur(10px)", 
                                    border: '3px solid rgba(255, 255, 255, 0.13)', 
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

export default Customer;
