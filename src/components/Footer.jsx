import React from 'react';
import { Box, Container, Typography, Link, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, YouTube, WhatsApp } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#0a032d', // Keep the background color as it was
                backgroundImage: 'url(/assets/footer1.png)', // Your design image URL
                backgroundPosition: 'center', // Position the image in the center
                backgroundRepeat: {
                    xs: 'no-repeat',  // For screens below 750px, prevent repeat
                    sm: 'repeat',     // For screens 750px and above, allow repeat
                },
                backgroundSize: {
                    xs: 'cover',       // For smaller screens, make sure image covers the area
                    sm: 'contain',     // For larger screens, keep image contained
                },
                color: '#fff', // Keep the text color white
                py: 4,
                position: 'relative', // Make sure the box stays relative
                width: '100%', // Full width to make sure it stretches across the screen
                bottom: 0, // Place it at the bottom
                mt: 0, // No margin on top
            }}
        >
            <Container maxWidth="lg">
                {/* Center the first row */}
                <Grid container spacing={6} justifyContent="center">
                    {/* Quick Links */}
                    <Grid item xs={12} sm={6} md={3} sx={{ mr: 6 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: '500',
                                mb: 2,
                                background: 'linear-gradient(45deg, #177dea, #b22fe3)',
                                WebkitBackgroundClip: 'text',
                                color: 'white',
                                fontFamily: '"font-comic", "Montserrat","sans-serif"',
                            }}
                        >
                            Quick Links
                        </Typography>
                        <Box>
                            <Link href="/" color="inherit" sx={{ display: 'block', mb: 1 }}>
                                Home
                            </Link>
                            <Link href="/about" color="inherit" sx={{ display: 'block', mb: 1 }}>
                                About Us
                            </Link>
                            <Link href="/service-page" color="inherit" sx={{ display: 'block', mb: 1 }}>
                                Services
                            </Link>
                            <Link href="/contact" color="inherit" sx={{ display: 'block', mb: 1 }}>
                                Contact Us
                            </Link>
                        </Box>
                    </Grid>

                    {/* Contact Us */}
                    <Grid item xs={12} sm={6} md={3} sx={{ mr: 6 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: '500',
                                mb: 2,
                                background: 'linear-gradient(45deg, #177dea, #b22fe3)',
                                WebkitBackgroundClip: 'text',
                                color: 'white',
                                fontFamily: '"font-comic", "Montserrat","sans-serif"',
                            }}
                        >
                            Contact Us
                        </Typography>
                        <Box>
                            <Typography variant="body2" sx={{ fontFamily: 'Montserrat', fontWeight: 'normal', mb: 1 }}>
                                Email: info@briskboldit.com
                            </Typography>
                            <Typography variant="body2" sx={{ fontFamily: 'Montserrat', fontWeight: 'normal', mb: 1 }}>
                                Phone: (+971) 554372731
                            </Typography>
                            <Typography variant="body2" sx={{ fontFamily: 'Montserrat', fontWeight: 'normal', mb: 1 }}>
                                Address: Business Bay, Dubai, UAE
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Subscribe to Newsletter */}
                    <Grid item xs={12} sm={6} md={3} sx={{ mr: 6 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: '500',
                                mb: 2,
                                background: 'linear-gradient(45deg, #177dea, #b22fe3)',
                                WebkitBackgroundClip: 'text',
                                color: 'white',
                                fontFamily: '"font-comic", "Montserrat","sans-serif"',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            Subscribe to Our Newsletter
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                style={{
                                    padding: '10px',
                                    border: '1px solid #fff',
                                    marginRight: 0,
                                    width: '100%',
                                    maxWidth: '300px',
                                    backgroundColor: '#fff',
                                    color: 'black',
                                }}
                            />
                            <button
                                style={{
                                    background: 'linear-gradient(to right, #18b4e7, #2de9e8)', // Apply the gradient here
                                    color: '#fff',
                                    border: 'none',
                                    padding: '10px 20px',
                                    borderRadius: '1px',
                                    cursor: 'pointer',
                                    transition: 'background 0.3s ease',
                                }}
                            >
                                Subscribe
                            </button>
                        </Box>
                    </Grid>
                </Grid>

                {/* Follow Us Section */}
                <Grid container justifyContent="center" sx={{ mt: 4 }}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box
                            className="flex justify-center"
                            sx={{ gap: 2 }} // Adding gap between the icon boxes
                        >
                            <a href="https://www.facebook.com/BriskBoldIT" target="_blank" rel="noopener noreferrer">
                                <IconButton
                                    sx={{
                                        backgroundColor: '#0a2260',
                                        '&:hover': {
                                            background: 'linear-gradient(to right, #18b4e7, #2de9e8)',
                                        },
                                        padding: 1,
                                        borderRadius: '8px',
                                    }}
                                >
                                    <Facebook sx={{ color: 'white' }} />
                                </IconButton>
                            </a>

                            <a href="https://x.com/BriskBoldAI" target="_blank" rel="noopener noreferrer">
                                <IconButton
                                    sx={{
                                        backgroundColor: '#0a2260',
                                        '&:hover': {
                                            background: 'linear-gradient(to right, #18b4e7, #2de9e8)',
                                        },
                                        padding: 1,
                                        borderRadius: '8px',
                                    }}
                                >
                                    <Twitter sx={{ color: 'white' }} />
                                </IconButton>
                            </a>

                            <a href="https://www.linkedin.com/company/briskbold/" target="_blank" rel="noopener noreferrer">
                                <IconButton
                                    sx={{
                                        backgroundColor: '#0a2260',
                                        '&:hover': {
                                            background: 'linear-gradient(to right, #18b4e7, #2de9e8)',
                                        },
                                        padding: 1,
                                        borderRadius: '8px',
                                    }}
                                >
                                    <LinkedIn sx={{ color: 'white' }} />
                                </IconButton>
                            </a>

                            <a href="https://www.youtube.com/@BriskBoldAIAutomation" target="_blank" rel="noopener noreferrer">
                                <IconButton
                                    sx={{
                                        backgroundColor: '#0a2260',
                                        '&:hover': {
                                            background: 'linear-gradient(to right, #18b4e7, #2de9e8)',
                                        },
                                        padding: 1,
                                        borderRadius: '8px',
                                    }}
                                >
                                    <YouTube sx={{ color: 'white' }} />
                                </IconButton>
                            </a>

                            <a href="https://www.instagram.com/briskbold_ai_automation/" target="_blank" rel="noopener noreferrer">
                                <IconButton
                                    sx={{
                                        backgroundColor: '#0a2260',
                                        '&:hover': {
                                            background: 'linear-gradient(to right, #18b4e7, #2de9e8)',
                                        },
                                        padding: 1,
                                        borderRadius: '8px',
                                    }}
                                >
                                    <Instagram sx={{ color: 'white' }} />
                                </IconButton>
                            </a>

                            {/* WhatsApp Icon */}
                            <a href="https://whatsapp.com/channel/0029VaBneGqLI8YX7LAQHs1k" target="_blank" rel="noopener noreferrer">
                                <IconButton
                                    sx={{
                                        backgroundColor: '#0a2260',
                                        '&:hover': {
                                            background: 'linear-gradient(to right, #18b4e7, #2de9e8)',
                                        },
                                        padding: 1,
                                        borderRadius: '8px',
                                    }}
                                >
                                    <WhatsApp sx={{ color: 'white' }} />
                                </IconButton>
                            </a>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Typography variant="body2" color="inherit" sx={{ fontFamily: 'Montserrat', fontWeight: 'normal' }}>
                        Copyright &copy; {new Date().getFullYear()} — BriskBold AI and Automation
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
