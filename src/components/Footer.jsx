import React from 'react';
import { Box, Container, Typography, Link, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram,YouTube } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#2d3748',
                color: '#fff',
                py: 4,
                position: 'relative',
                width: '100%',
                bottom: 0,
                mt: 'auto', 
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Quick Links */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 ,color:"white"}}>
                            Quick Links
                        </Typography>
                        <Box>
                            <Link href="/" color="inherit" sx={{ display: 'block', mb: 1 }}>
                                Home
                            </Link>
                            <Link href="/about" color="inherit" sx={{ display: 'block', mb: 1 }}>
                                About Us
                            </Link>
                            <Link href="/services" color="inherit" sx={{ display: 'block', mb: 1 }}>
                                Services
                            </Link>
                            <Link href="/contact" color="inherit" sx={{ display: 'block', mb: 1 }}>
                                Contact Us
                            </Link>
                        </Box>
                    </Grid>

                  
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2,color:"white" }}>
                            Contact Us
                        </Typography>
                        <Box>
                            <Typography variant="body2">Email:hr@briskboldit.com</Typography>
                            <Typography variant="body2">Phone: +971506243891</Typography>
                            <Typography variant="body2">Address: Srinagar, Jammu & Kashmir
                            India</Typography>
                        </Box>
                    </Grid>

                  
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2,color:"white" }}>
                            Follow Us
                        </Typography>
                        <Box className="flex space-x-4 ">
  <a href="https://www.facebook.com/BriskBoldIT" target="_blank" rel="noopener noreferrer">
    <IconButton
      style={{ color: 'white' }} 
      className="p-2 hover:text-blue-500 transition-colors duration-200"
    >
      <Facebook />
    </IconButton>
  </a>

  <a href="https://x.com/bold_it" target="_blank" rel="noopener noreferrer">
    <IconButton
      style={{ color: 'white' }}
      className="p-2 hover:text-blue-500 transition-colors duration-200"
    >
      <Twitter />
    </IconButton>
  </a>

  <a href="https://www.linkedin.com/company/briskbold/" target="_blank" rel="noopener noreferrer">
    <IconButton
      style={{ color: 'white' }}
      className="p-2 hover:text-blue-500 transition-colors duration-200"
    >
      <LinkedIn />
    </IconButton>
  </a>
  <a href="https://www.youtube.com/@BriskBoldAIAutomation" target="_blank" rel="noopener noreferrer">
    <IconButton
      style={{ color: 'white' }}
      className="p-2 hover:text-blue-500 transition-colors duration-200"
    >
      <YouTube/>
    </IconButton>
  </a>

  <a href="https://www.instagram.com/briskboldaiandautomation?igsh=MXgycjJoMTVseXdrbg==" target="_blank" rel="noopener noreferrer">
    <IconButton
      style={{ color: 'white' }}
      className="p-2 hover:text-blue-500 transition-colors duration-200"
    >
      <Instagram />
    </IconButton>
  </a>
</Box>

                    </Grid>

                   
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 ,color:"white"}}>
                            Subscribe to Our Newsletter
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                style={{
                                    padding: '10px',
                                    borderRadius: '4px',
                                    border: 'none',
                                    marginRight: '10px',
                                    width: '100%',
                                    maxWidth: '300px',
                                }}
                            />
                            <button
                                style={{
                                    backgroundColor: '#3182ce',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '10px 20px',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                }}
                            >
                                Subscribe
                            </button>
                        </Box>
                    </Grid>
                </Grid>

               
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Typography variant="body2" color="inherit">
                     Copyright  &copy; {new Date().getFullYear()}  —  BriskBold AI and Automation
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
