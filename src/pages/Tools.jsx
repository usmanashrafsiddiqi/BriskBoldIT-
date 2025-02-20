import React from 'react';
import { Box, Typography } from '@mui/material';
import automationanywhereimg from "/assets/automationanywhere.jpg";
import uipathimg from "/assets/uipath.png";
import softwareagimg from "/assets/softwareag.jpg";
import powerautomateimg from "/assets/powerautomate.jpg";
import druidimg from "/assets/druid1.png";
import twixiorimg from "/assets/twix.png";
import docaquireimg from "/assets/docaquire.png";
import abbyimg from "/assets/abby.png";
import powerbiimg from "/assets/powerbi.png";
import microsoftimg from "/assets/microsoft.jpg";

// Combine all images into a single array
const toolImages = [
    automationanywhereimg,
    uipathimg,
    softwareagimg,
    powerautomateimg,
    druidimg,
    twixiorimg,
    docaquireimg,
    abbyimg,
    powerbiimg,
    microsoftimg
];

const Tools = () => {
    return (
        <Box
            sx={{
                width: '100%',
                padding: '30px',
                background: 'transparent',  // Set background to transparent
                color: 'white',
            }}
        >
            {/* Expertise Heading */}
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '800',
                    color: 'white',
                    textAlign: 'center',
                    marginBottom: '30px',  // Increased bottom margin for spacing
                }}
            >
                HyperAutomation
            </Typography>

            {/* Wrapper to make the images responsive */}
            <Box sx={{ overflow: 'hidden', width: '100%' }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        animation: 'scroll 15s linear infinite', // Set animation speed
                    }}
                >
                    {/* Duplicate images to ensure smooth looping */}
                    {[...toolImages, ...toolImages].map((image, index) => (
                        <div key={index} style={{ marginRight: '20px' }}>
                            <img
                                src={image}
                                alt={`Tool ${index}`}
                                style={{
                                    width: '180px', // Default size for larger screens
                                    height: '180px', // Maintain square shape
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                    boxShadow: '0 0 15px 5px rgba(255, 255, 255, 0.3)',
                                    backgroundColor: 'white',
                                    border: '2px solid rgba(255, 255, 255, 0.6)',
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
                            width: 160px;  // Smaller size for medium screens
                            height: 160px;
                        }
                    }

                    @media (max-width: 768px) {
                        img {
                            width: 130px;  // Further reduce for smaller screens
                            height: 130px;
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

export default Tools;
