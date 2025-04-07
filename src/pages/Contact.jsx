import React from "react";
import { Box, Container, Typography, Grid, Button, Card, CardContent } from "@mui/material";
import { Phone, WhatsApp } from "@mui/icons-material";
import dubaiimg from "/assets/dubai.png";
import canadaimg from "/assets/canada.png";
import japanimg from "/assets/japan.png";
import indianimg from "/assets/india.png";
import unitedimg from "/assets/united.png";

const locations = [
    {
        name: "Dubai",
        address: [
            "Office 3507",
            "Churchill Executive Tower",
            "Business Bay, Dubai, UAE",
        ],
        mobile: "(+971) 554372731",
        whatsapp: "+971554372731",
        img: dubaiimg,
    },
    {
        name: "Canada",
        address: [
            "100-4310, Sherwoodtowne Boulevard",
            "Mississauga, Ontario",
            "Canada, L4Z4C4",
        ],
        mobile: "(+1) 6474463712",
        whatsapp: "(+1) 6474463712",
        img: canadaimg,
    },
    {
        name: "Japan",
        address: [
            "7th Floor Wakamatsu building",
            "Honchome 3-3-6, Chuo-ku",
            "Tokyo, Japan",
        ],
        mobile: "(+81)7036162428",
        whatsapp: "(+81)7036162428",
        img: japanimg,
    },
    {
        name: "India",
        address: [
            "Delhi",
            "Jammu & Kashmir",
        ],
        mobile: "(+91)-9103163366",
        whatsapp: "(+91)-9103163366",
        img: indianimg,
    },
    {
        name: "United States",
        address: ["3400 COTTAGE WAY, STE G2 #24309", "Sacramento, CA 95825"],
        mobile: "(+1) 415 755 8939",
        img: unitedimg,
    },
];

export const Contact = () => {
    return (
        <Box
            id="contact"
            sx={{
                backgroundColor: "transparent",  // Set background color to transparent
                py: 5,
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Container sx={{ flexGrow: 1 }}>
                {/* Contact Us Heading */}
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 500,
                        color: "white",
                        fontFamily: '"font-comic", "Montserrat","sans-serif"',
                        textAlign: "center",
                        mb: 4
                    }}
                >
                    Contact Us
                </Typography>

                {/* Locations */}
                <Grid container spacing={4} mb={8}>
                    {locations.map((location, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    borderRadius: "12px",
                                    boxShadow: 3,
                                    height: "100%",
                                    border: '2px solid white',
                                    boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                                    display: "flex",
                                    flexDirection: "column",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                        boxShadow: 6,
                                        transition: "all 0.3s ease",
                                    }
                                }}
                                style={{
                                    background: "rgba(255, 255, 255, 0.1)", // Keep transparency on the cards
                                    backdropFilter: "blur(10px)", // Blur effect
                                    border: "none",
                                }}
                            >
                                <CardContent className="text-center py-6 px-4 flex-grow">
                                    <Box mb={3}>
                                        <img
                                            src={location.img}
                                            alt={`${location.name} icon`}
                                            width={50}
                                            height={50}
                                        />
                                    </Box>

                                    {/* Location Name with Gradient Effect */}
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: "500",
                                            fontFamily: '"font-comic", "Montserrat","sans-serif"',
                                            // background: 'linear-gradient(45deg, #177dea, #b22fe3)',
                                            // WebkitBackgroundClip: 'text',
                                            color: 'white',
                                            mb: 2
                                        }}
                                    >
                                        {location.name}
                                    </Typography>

                                    {/* Location Address */}
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "#fff",
                                            fontFamily: "Montserrat, sans-serif",
                                            fontWeight: "normal",
                                            mb: 2
                                        }}
                                    >
                                        {location.address.map((line, idx) => (
                                            <Box key={idx}>{line}</Box>
                                        ))}
                                    </Typography>

                                    {/* Mobile Number */}
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "#fff",
                                            fontFamily: "Montserrat, sans-serif",
                                            fontWeight: "normal",
                                            display: "flex",
                                            alignItems: "center",
                                            mb: 1
                                        }}
                                    >
                                        <Phone sx={{ color: "white", mr: 1 }} /> {location.mobile}
                                    </Typography>

                                    {/* WhatsApp */}
                                    {location.whatsapp && (
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#fff",
                                                fontFamily: "Montserrat, sans-serif",
                                                fontWeight: "normal",
                                                display: "flex",
                                                alignItems: "center",
                                                mb: 1
                                            }}
                                        >
                                            <WhatsApp sx={{ color: "#25D366", mr: 1 }} /> {location.whatsapp}
                                        </Typography>
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* "Get In Touch" Section at the bottom */}
            <Box sx={{ mt: "auto", textAlign: "center", padding: 4 }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 500,
                        color: "white",
                        fontFamily: '"font-comic", "Montserrat","sans-serif"',
                        mb: 2
                    }}
                >
                    Get In Touch
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: "#fff",
                        mb: 4,
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: "normal"
                    }}
                >
                    If you want to contact us, email us at
                    <br />
                    <a href="mailto:info@briskboldit.com" style={{ color: "#3182ce", fontWeight: "bold" }}>
                        info@briskboldit.com
                    </a>
                </Typography>

                {/* Simple Contact Button */}
                {/* Simple Contact Button */}
                <Box mt={4}>
                    <Button
                        variant="contained"
                        href="mailto: info@briskboldit.com"
                        sx={{
                            background: 'linear-gradient(45deg, #18b4e7, #2de9e8)', // Apply the gradient
                            color: "#fff",
                            "&:hover": {
                                background: 'linear-gradient(45deg, #18b4e7, #2de9e8)', // Keep the gradient on hover
                            },
                            fontWeight: "bold",
                            borderRadius: 2,
                            padding: "12px 30px",
                            boxShadow: 3,
                        }}
                    >
                        Send Us an Email
                    </Button>
                </Box>

            </Box>
        </Box>
    );
};
