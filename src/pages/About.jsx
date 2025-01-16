import React from "react";
import { Container, Typography, Box, Button, Grid } from "@mui/material";

export const About = (props) => {
    return (
        <div
            id="about"
            className="py-20"
            style={{
                backgroundImage: `url(/assets/aboutbgg.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundAttachment: "scroll",
                paddingRight: "50px",
                paddingLeft: "50px",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                paddingTop: "80px",
                paddingBottom: "80px",
            }}
        >
            {/* Media query to remove background image and apply gradient for medium and small screens */}
            <style>
                {`
                    @media (max-width: 960px) {
                        #about {
                            background-image:linear-gradient(45deg, #a60961, #100c68) !important;
                            background-size: cover;
                            background-position: center center;
                            background-repeat: no-repeat;
                        }
                    }
                `}
            </style>

            <Container>
                <Grid container spacing={4} alignItems="flex-start" justifyContent="flex-start">
                    {/* Text Section (Left side for larger screens) */}
                    <Grid item xs={12} md={6}>
                        <Box className="about-text space-y-6" sx={{ textAlign: "left" }}>
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

                            <Grid container spacing={2}>
                                {/* Render the points for 'Why' (3 boxes on the top) */}
                                <Grid item xs={12} sm={4}>
                                    <Grid container spacing={2}>
                                        {props.data
                                            ? props.data.Why.map((item, i) => (
                                                <Grid item xs={12} key={`${item.title}-${i}`} sx={{ display: 'flex', justifyContent: 'center' }}>
                                                    <Box
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
                                                            height: { xs: "120px", sm: "120px", md: "150px" },
                                                            width: { xs: "100%", sm: "100%", md: "180px" },
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
                                                                color: "white",
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
                                            ))
                                            : "Loading..."}
                                    </Grid>
                                </Grid>

                                {/* Render the points for 'Why2' (2 boxes on the bottom) */}
                                <Grid item xs={12} sm={6}>
                                    <Grid container spacing={2}>
                                        {props.data
                                            ? props.data.Why2.map((item, i) => (
                                                <Grid item xs={12} key={`${item.title}-${i}`} sx={{ display: 'flex', justifyContent: 'center' }}>
                                                    <Box
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
                                                            height: { xs: "120px", sm: "120px", md: "150px" },
                                                            width: { xs: "100%", sm: "100%", md: "180px" },   
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
                                                                color: "white",
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
                                            ))
                                            : "Loading..."}
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Box mt={4}>
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
                                        "&:hover": {
                                            backgroundColor: "#1d4ed8",
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
