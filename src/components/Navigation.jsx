import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import logo from "/assets/logofinal.png";

const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundImage: 'linear-gradient(to right, #10374e, #356683)',
                boxShadow: 3,
            }}
        >
            <Toolbar>
                {/* Logo */}
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ width: 150, height: 41 }}
                    />
                </Box>

                {/* Navigation Buttons for larger screens */}
                <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', fontWeight: "800" }}>
                    <Button component={Link} to="/" color="inherit" sx={{ marginRight: 2 }}>
                        Home
                    </Button>
                    <Button component={Link} to="/about" color="inherit" sx={{ marginRight: 2 }}>
                        About
                    </Button>

                    <Button component={Link} to="/service-page" color="inherit" sx={{ marginRight: 2 }}>
                        Services
                    </Button>

                    <Button component={Link} to="/resources" color="inherit" sx={{ marginRight: 2 }}>
                        Resources
                    </Button>

                    <Button component={Link} to="/contact" color="inherit">
                        Contact Us
                    </Button>
                </Box>

                {/* Mobile Menu Icon */}
                <IconButton
                    color="inherit"
                    sx={{ display: { xs: 'block', lg: 'none' } }} // Only show on small and medium screens
                    onClick={handleMobileMenuToggle}
                >
                    <MenuIcon />
                </IconButton>

                {/* Mobile Dropdown Menu */}
                {mobileMenuOpen && (
                    <Box
                        sx={{
                            position: 'fixed',
                            top: '64px', // Keep it below the AppBar
                            left: '50%',
                            transform: mobileMenuOpen ? 'translateX(-50%)' : 'translateX(-100%)', // Ensure it slides in from left to center
                            backgroundColor: 'white',
                            boxShadow: 3,
                            width: '80%',
                            maxWidth: '400px',
                            background: 'rgba(255, 255, 255, 0.9)', // Slight transparency for the background
                            backdropFilter: 'blur(5px)', // Frosted effect
                            borderRadius: '8px',
                            padding: '8px',
                            opacity: 1,
                            transition: 'transform 0.5s ease-in-out', // Smooth transition
                            zIndex: 9999, // Ensure it's on top
                        }}
                    >
                        {/* All Navigation Links with Black Text */}
                        <Button
                            component={Link}
                            to="/"
                            sx={{
                                width: '100%',
                                textAlign: 'left',
                                color: 'black',  // Black text color
                                fontFamily: 'Montserrat',
                                fontWeight: 400,
                            }}
                            onClick={() => setMobileMenuOpen(false)} // Close the menu on click
                        >
                            Home
                        </Button>
                        <Button
                            component={Link}
                            to="/about"
                            sx={{
                                width: '100%',
                                textAlign: 'left',
                                color: 'black',  // Black text color
                                fontFamily: 'Montserrat',
                                fontWeight: 400,
                            }}
                            onClick={() => setMobileMenuOpen(false)} // Close the menu on click
                        >
                            About
                        </Button>
                        <Button
                            component={Link}
                            to="/service-page"
                            sx={{
                                width: '100%',
                                textAlign: 'left',
                                color: 'black',  // Black text color
                                fontFamily: 'Montserrat',
                                fontWeight: 400,
                            }}
                            onClick={() => setMobileMenuOpen(false)} // Close the menu on click
                        >
                            Services
                        </Button>
                        <Button
                            component={Link}
                            to="/resources"
                            sx={{
                                width: '100%',
                                textAlign: 'left',
                                color: 'black',  // Black text color
                                fontFamily: 'Montserrat',
                                fontWeight: 400,
                            }}
                            onClick={() => setMobileMenuOpen(false)} // Close the menu on click
                        >
                            Resources
                        </Button>
                        <Button
                            component={Link}
                            to="/contact"
                            sx={{
                                width: '100%',
                                textAlign: 'left',
                                color: 'black',  // Black text color
                                fontFamily: 'Montserrat',
                                fontWeight: 400,
                            }}
                            onClick={() => setMobileMenuOpen(false)} // Close the menu on click
                        >
                            Contact Us
                        </Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;
