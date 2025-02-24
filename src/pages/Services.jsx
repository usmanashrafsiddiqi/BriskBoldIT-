import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Grid, Typography, Box, Card, CardContent } from "@mui/material";

// Correctly import all the required icons
import { faCogs, faThumbsUp, faPrint, faLanguage, faChild, faRobot } from "@fortawesome/free-solid-svg-icons";

export const Services = ({ data }) => {

    const iconMapping = {
        "fa fa-cogs": faCogs,
        "fa fa-thumbs-up": faThumbsUp,
        "fa fa-print": faPrint,
        "fa fa-language": faLanguage,
        "fa fa-robot": faRobot,
        "fa fa-child": faChild,
    };

    return (
        <div
            id="services"
            style={{
                marginBottom: '0px',
                background: 'transparent',
                padding: "20px",
                minHeight: '100vh',
            }}
        >
            <Container>
                {/* Section Title */}
                <Box textAlign="center" mb={6}>
                    <Typography
                        variant="h3"
                        className="text-4xl font-bold text-white"
                        sx={{
                            fontWeight: 500, color: "white",
                            fontFamily: '"Montserrat", sans-serif',
                        }}
                    >
                        Our Services
                    </Typography>
                    <Typography
                        variant="h5"
                        className="text-lg text-gray-600 mt-6 font-medium"
                        style={{
                            background: 'linear-gradient(45deg, #177dea, #b22fe3)',
                            WebkitBackgroundClip: 'text',
                            color: 'white',
                            fontWeight: '300',
                            marginTop: '20px'  // Adjust this value to move it lower
                        }}
                    >
                        We Build Robots. For a Better Future of Human Force.
                    </Typography>

                </Box>

                {/* Box around the service cards with thin border and transparent background */}
                <Box
                    sx={{
                        border: "0.25px solid white", // Thinner border around the box
                        borderRadius: "25px", // Increased border-radius to make the box more rounded
                        padding: "20px", // Padding around the box to ensure spacing from edges
                        background: "transparent", // Transparent background for the box
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Light shadow to make the box stand out
                    }}
                >
                    {/* Service Cards */}
                    <Grid container spacing={4} justifyContent="center">
                        {data
                            ? data.map((service, i) => {
                                const icon = iconMapping[service.icon] || faCogs;
                                return (
                                    <Grid item xs={12} sm={6} md={4} key={`${service.name}-${i}`} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Card
                                            sx={{
                                                borderRadius: "12px", // Round corners of individual card
                                                height: 230, // Fixed height for all cards
                                                width: 300,  // Increased width of cards
                                                display: "flex",
                                                flexDirection: "column",
                                                boxShadow: "none", // No box shadow to keep it simple
                                                border: "0.25px solid white",// Remove border
                                            }}
                                            style={{
                                                background: "rgba(255, 255, 255, 0.1)", // Light background
                                                backdropFilter: "blur(8px)", // Frosted glass effect with a blur
                                            }}
                                        >
                                            <CardContent
                                                className="text-center py-6 px-4 flex-grow"
                                                style={{ color: 'white' }}
                                            >
                                                {/* Icon */}
                                                <Box mb={3}>
                                                    <FontAwesomeIcon
                                                        icon={icon}
                                                        style={{
                                                            fontSize: "3rem",
                                                            color: "white",
                                                        }}
                                                    />
                                                </Box>

                                                {/* Service Title */}
                                                <Typography
                                                    variant="h6"
                                                    className="text-xl font-medium mb-2"
                                                    style={{
                                                        color: 'white', // Heading color changed to white
                                                        fontWeight: "800",
                                                        fontFamily: '"Montserrat", sans-serif'
                                                    }}
                                                >
                                                    {service.name}
                                                </Typography>

                                                {/* Service Description */}
                                                <Typography
                                                    variant="body2"
                                                    style={{
                                                        color: "white"
                                                    }}
                                                >
                                                    {service.text}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                );
                            })
                            : "Loading..."}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};
