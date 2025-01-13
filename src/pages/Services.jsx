import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Grid, Typography, Box, Card, CardContent } from "@mui/material";
// Importing the required icons
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
                marginBottom: '50px',
                backgroundImage: `url("/assets/servicebantwo.jpg")`,
                backgroundSize: 'cover',
                padding: "20px",
                minHeight: '100vh', 
            }}
        >
            <Container>
                {/* Section Title */}
                <Box textAlign="center" mb={6}>
                    <Typography
                        variant="h3"
                        className="text-4xl font-bold text-black-800"
                        sx={{ fontWeight: 500 }}
                    >
                        Our Services
                    </Typography>
                    <Typography
                        variant="h5"
                        className="text-lg text-gray-600 mt-4 font-medium"
                        style={{
                            background: 'linear-gradient(45deg, #FF6F61, #6B5B95)',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            fontWeight: 'bold'
                        }}
                    >
                        We Build Robots. For a Better Future of Human Force.
                    </Typography>
                </Box>

                {/* Service Cards */}
                <Grid container spacing={4} justifyContent="center">
                    {data
                        ? data.map((service, i) => {
                              const icon = iconMapping[service.icon] || faCogs;
                              return (
                                  <Grid item xs={12} sm={6} md={4} key={`${service.name}-${i}`}>
                                      <Card
                                          sx={{
                                              borderRadius: "12px",
                                              boxShadow: 3,
                                              height: "100%",
                                              display: "flex",
                                              flexDirection: "column",
                                              // Hover effect to slightly scale the card
                                              "&:hover": {
                                                  transform: "scale(1.05)", 
                                                  boxShadow: 6, 
                                                  transition: "all 0.3s ease",
                                              }
                                          }}
                                          style={{
                                              // Transparent background for the card
                                              background: "rgba(255, 255, 255, 0.1)", 
                                              backdropFilter: "blur(10px)", 
                                              border: "none", 
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
                                                  style={{ color: 'white' }} 
                                              >
                                                  {service.name}
                                              </Typography>

                                              {/* Service Description */}
                                              <Typography
                                                  variant="body2"
                                                  style={{
                                                      background: 'linear-gradient(45deg, #FF6F61, #6B5B95)',
                                                      WebkitBackgroundClip: 'text',
                                                      color: 'transparent',
                                                      fontWeight: "500"
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
            </Container>
        </div>
    );
};
