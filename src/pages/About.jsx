import React from "react";
import { Container, Typography, Box, Button, Grid } from "@mui/material";

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
                paddingBottom: "80px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
        >
            {/* Background Image with a glass effect */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(/assets/aboutbgg.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    filter: "blur(1px)",
                    zIndex: -1,
                }}
            ></div>

            {/* Media query to apply correct styles for small and medium screens */}
            <style>
                {`
                    /* Apply padding-top to start from the top for large screens */
                    @media (min-width: 960px) {
                        #about {
                            padding-top: 0px;  /* Remove large padding for large screens */
                        }
                    }

                    /* For medium and small screens, reduce padding-top or set to 0 */
                    @media (max-width: 960px) {
                        #about {
                            padding-top: 20px;  /* Small padding for medium and small screens */
                            background-image: linear-gradient(45deg, #a60961, #100c68) !important;
                            background-size: cover;
                            background-position: center center;
                            background-repeat: no-repeat;
                            align-items: flex-start;  /* Align text to the top */
                        }
                    }
                `}
            </style>

            <Container>
                <Grid container spacing={4} alignItems="flex-start" justifyContent="flex-start">
                    {/* Text Section (Left side for larger screens) */}
                    <Grid item xs={12} md={9}>
                        <Box
                            className="about-text space-y-6"
                            sx={{
                                textAlign: "left",
                                paddingTop: { xs: "20px", sm: "20px", md: "50px" },
                            }}
                        >
                            {/* About Us Title */}
                            <Typography
                                variant="h4"
                                sx={{
                                    fontFamily: "Montserrat, sans-serif",
                                    fontWeight: 800,
                                    color: "white",
                                    fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
                                }}
                            >
                                About Us
                            </Typography>

                            {/* Paragraph Text */}
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

                            {/* Why Choose Us Section */}
                            <Typography
                                variant="h5"
                                sx={{
                                    fontFamily: "Montserrat, sans-serif",
                                    fontWeight: "normal",
                                    color: "white",
                                    marginBottom: "1rem",
                                    fontWeight: "bold",
                                    fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.8rem" },
                                }}
                            >
                                Why Choose Us?
                            </Typography>

                            {/* Render the points for 'Why' */}
                            <Grid container spacing={6}>
                                {props.data
                                    ? props.data.Why.map((item, i) => {
                                          if (i < 3) {
                                              return (
                                                  <Grid
                                                      item
                                                      xs={12}
                                                      sm={12}
                                                      md={4} // For the first 3 boxes, make them take up 4 columns
                                                      key={`why-${i}`}
                                                  >
                                                      <Box
                                                          className="about-box"
                                                          sx={{
                                                              display: "flex",
                                                              flexDirection: "column",
                                                              justifyContent: "center",
                                                              borderRadius: "8px",
                                                              backgroundColor: "rgba(255, 255, 255, 0.1)", // Keep box transparency as is
                                                              backdropFilter: "blur(10px)",
                                                              boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
                                                              padding: "16px",
                                                              marginBottom: "16px",
                                                              height: { xs: "auto", sm: "auto", md: "130px" },
                                                              display: "flex",
                                                              justifyContent: "space-between",
                                                              flexDirection: "column",
                                                              "&:hover": {
                                                                  transform: "scale(1.05)",
                                                                  boxShadow: "0 0 15px rgba(255, 255, 255, 0.9)",
                                                                  transition: "all 0.3s ease",
                                                              },
                                                          }}
                                                      >
                                                          {/* Title (heading) */}
                                                          <Typography
                                                              variant="h6"
                                                              sx={{
                                                                  fontFamily: "Montserrat, sans-serif",
                                                                  fontWeight: "bold",
                                                                  background: "linear-gradient(45deg, #177dea, #b22fe3)",
                                                                  WebkitBackgroundClip: "text",
                                                                  color: "transparent",
                                                                  marginBottom: "8px",
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
                                                              }}
                                                          >
                                                              {item.description}
                                                          </Typography>
                                                      </Box>
                                                  </Grid>
                                              );
                                          }

                                          // For "Adaptability" and "Customer-Centric" box (index 3 and 4), they will go in the second row
                                          return (
                                              <Grid
                                                  item
                                                  xs={12}
                                                  sm={12}
                                                  md={4} 
                                                  key={`why-${i}`}
                                              >
                                                  <Box
                                                      className="about-box"
                                                      sx={{
                                                          display: "flex",
                                                          flexDirection: "column",
                                                          justifyContent: "center",
                                                          borderRadius: "8px",
                                                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                                                          backdropFilter: "blur(10px)",
                                                          boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
                                                          padding: "16px",
                                                          marginBottom: "16px",
                                                          height: { xs: "auto", sm: "auto", md: "130px" },
                                                          display: "flex",
                                                          justifyContent: "space-between",
                                                          flexDirection: "column",
                                                          "&:hover": {
                                                              transform: "scale(1.05)",
                                                              boxShadow: "0 0 15px rgba(255, 255, 255, 0.9)",
                                                              transition: "all 0.3s ease",
                                                          },
                                                      }}
                                                  >
                                                      {/* Title (heading) */}
                                                      <Typography
                                                          variant="h6"
                                                          sx={{
                                                              fontFamily: "Montserrat, sans-serif",
                                                              fontWeight: "bold",
                                                              background: "linear-gradient(45deg, #177dea, #b22fe3)",
                                                              WebkitBackgroundClip: "text",
                                                              color: "transparent",
                                                              marginBottom: "8px",
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
                                                          }}
                                                      >
                                                          {item.description}
                                                      </Typography>
                                                  </Box>
                                              </Grid>
                                          );
                                      })
                                    : "Loading..."}
                            </Grid>

                            {/* Button Section */}
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
                                        background: 'linear-gradient(45deg, #177dea, #b22fe3)',
                                        "&:hover": {
                                            background: 'linear-gradient(45deg, #177dea, #b22fe3)',
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
