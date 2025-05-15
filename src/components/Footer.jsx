import React from 'react';
import { Box, Container, Typography, Grid, IconButton, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, LinkedIn, Instagram, YouTube, WhatsApp } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#0a032d',
        backgroundImage: 'url(/assets/footer1.png)',
        backgroundPosition: 'center',
        backgroundRepeat: { xs: 'no-repeat', sm: 'repeat' },
        backgroundSize: { xs: 'cover', sm: 'contain' },
        color: '#fff',
        py: 4,
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent="center">
          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3} sx={{ mr: 6 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                mb: 2,
                background: 'linear-gradient(45deg, #177dea, #b22fe3)',
                WebkitBackgroundClip: 'text',
                color: 'white',
                fontFamily: '"font-comic","Montserrat","sans-serif"',
              }}
            >
              Quick Links
            </Typography>
            <Box>
              <MuiLink component={Link} to="/" color="inherit" display="block" mb={1}>
                Home
              </MuiLink>
              <MuiLink component={Link} to="/about" color="inherit" display="block" mb={1}>
                About Us
              </MuiLink>
              <MuiLink component={Link} to="/service-page" color="inherit" display="block" mb={1}>
                Services
              </MuiLink>
              <MuiLink component={Link} to="/contact" color="inherit" display="block" mb={1}>
                Contact Us
              </MuiLink>
              {/* Privacy Policy */}
              <MuiLink component={Link} to="/privacy-policy" color="inherit" display="block">
                Privacy Policy
              </MuiLink>
            </Box>
          </Grid>

          {/* Contact Us */}
          <Grid item xs={12} sm={6} md={3} sx={{ mr: 6 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                mb: 2,
                background: 'linear-gradient(45deg, #177dea, #b22fe3)',
                WebkitBackgroundClip: 'text',
                color: 'white',
                fontFamily: '"font-comic","Montserrat","sans-serif"',
              }}
            >
              Contact Us
            </Typography>
            <Box>
              <Typography variant="body2" mb={1}>
                Email: info@briskboldit.com
              </Typography>
              <Typography variant="body2" mb={1}>
                Phone: (+971) 554372731
              </Typography>
              <Typography variant="body2" mb={1}>
                Address: Business Bay, Dubai, UAE
              </Typography>
            </Box>
          </Grid>

          {/* Subscribe */}
          <Grid item xs={12} sm={6} md={3} sx={{ mr: 6 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                mb: 2,
                background: 'linear-gradient(45deg, #177dea, #b22fe3)',
                WebkitBackgroundClip: 'text',
                color: 'white',
                fontFamily: '"font-comic","Montserrat","sans-serif"',
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
                  width: '100%',
                  maxWidth: '300px',
                  backgroundColor: '#fff',
                  color: 'black',
                }}
              />
              <button
                style={{
                  background: 'linear-gradient(to right, #18b4e7, #2de9e8)',
                  color: '#fff',
                  border: 'none',
                  padding: '10px 20px',
                  cursor: 'pointer',
                }}
              >
                Subscribe
              </button>
            </Box>
          </Grid>
        </Grid>

        {/* Social Icons */}
        <Grid container justifyContent="center" sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              {[{
                href: "https://www.facebook.com/BriskBoldIT",
                icon: <Facebook />,
                hover: 'hover:text-blue-400'
              },{
                href: "https://x.com/BriskBoldAI",
                icon: <Twitter />,
                hover: 'hover:text-blue-400'
              },{
                href: "https://www.linkedin.com/company/briskbold/",
                icon: <LinkedIn />,
                hover: 'hover:text-blue-400'
              },{
                href: "https://www.youtube.com/@BriskBoldAIAutomation",
                icon: <YouTube />,
                hover: 'hover:text-red-500'
              },{
                href: "https://www.instagram.com/briskbold_ai_automation/",
                icon: <Instagram />,
                hover: 'hover:text-pink-500'
              },{
                href: "https://whatsapp.com/channel/0029VaBneGqLI8YX7LAQHs1k",
                icon: <WhatsApp />,
                hover: 'hover:text-green-400'
              }].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer">
                  <IconButton
                    sx={{
                      backgroundColor: '#0a2260',
                      '&:hover': { background: 'linear-gradient(to right, #18b4e7, #2de9e8)' },
                      padding: 1,
                      borderRadius: '8px'
                    }}
                  >
                    {item.icon}
                  </IconButton>
                </a>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} — BriskBold AI and Automation
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
