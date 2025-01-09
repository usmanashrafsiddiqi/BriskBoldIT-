import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { Phone, WhatsApp } from "@mui/icons-material"; 
import dubaiimg from "/assets/dubai.png";
import canadaimg from "/assets/canada.png";
import japanimg from "/assets/Japan.png";
import indianimg from "/assets/India.png";
import unitedimg from "/assets/Unitedstates.png";
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
        mobile: "(+1647) 4463712",
        whatsapp: "(+1647) 4463712",
        img: canadaimg,
    },
    {
        name: "Japan",
        address: [
            "7th Floor Wakamatsu building",
            "Honchome 3-3-6, Chuo-ku",
            "Tokyo, Japan",
        ],
        mobile: "(+81) 8034365974",
        whatsapp: "(+81) 8034365974",
        img: japanimg,
    },
    {
        name: "India",
        address : [
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
        <Box id="contact" sx={{ backgroundColor: "#f7fafc", py: 12 }}>
            <Container>
                {/* Contact Header */}
                <Box mb={8} sx={{ textAlign: "center" }}>
                    <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2d3748", mb: 2 }}>
                        Get In Touch
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#000", mb: 4 }}>
                        If you want to contact us, email us at
                        <br />
                        <a href="mailto:hr@briskboldit.com" style={{ color: "#3182ce", fontWeight: "bold" }}>
                        hr@briskboldit.com
                        </a>
                    </Typography>

                    {/* Simple Contact Button */}
                    <Box mt={4}>
                        <Button
                            variant="contained"
                            href="mailto: hr@briskboldit.com"
                            sx={{
                                backgroundColor: "#3182ce",
                                color: "#fff",
                                "&:hover": {
                                    backgroundColor: "#2b6cb0",
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

                {/* Locations */}
                <Grid container spacing={4}>
                    {locations.map((location, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                sx={{
                                    boxShadow: 3,
                                    borderRadius: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    minHeight: 250,
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                        boxShadow: 6,
                                    },
                                    padding: 2, 
                                    backgroundColor: "#fff", 
                                }}
                            >
                                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                                    <img
                                        src={location.img}
                                        alt={`${location.name} icon`}
                                        width={50} // Increased icon size
                                        height={50}
                                        // style={{ borderRadius: "50%" }} 
                                    />
                                    <Typography variant="h6" sx={{ fontWeight: "bold", ml: 2 }}>
                                        {location.name}
                                    </Typography>
                                </Box>
                                <Box sx={{ padding: 2 }}>
                                    <Typography variant="body2" sx={{ color: "#4a5568", fontWeight: "bold", mb: 2 }}>
                                        {location.address.map((line, idx) => (
                                            <Box key={idx}>{line}</Box>
                                        ))}
                                    </Typography>

                                    
                                    <Typography variant="body2" sx={{ color: "#2d3748", fontWeight: "bold", display: "flex", alignItems: "center", mb: 1 }}>
                                        <Phone sx={{ color: "black", mr: 1 }} /> {location.mobile}
                                    </Typography>

                                    
                                    {location.whatsapp && (
                                        <Typography variant="body2" sx={{ color: "#2d3748", fontWeight: "bold", display: "flex", alignItems: "center", mb: 1 }}>
                                            <WhatsApp sx={{ color: "#25D366", mr: 1 }} /> {location.whatsapp}
                                        </Typography>
                                    )}
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};
