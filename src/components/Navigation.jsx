import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import logo from "/assets/logofinal.png";

const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeButton, setActiveButton] = useState(null);  // Track the active button

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const buttonStyle = (buttonName) => ({
        borderRadius: 3,
        marginRight: 2,
        background: activeButton === buttonName ? "linear-gradient(to right, #18b4e7, #2de9e8)" : "transparent",
        color: activeButton === buttonName ? "#fff" : "inherit",
        "&:hover": {
            background: "linear-gradient(to left, #18b4e7, #2de9e8)",
            color: "#fff"
        }
    });

    return (
        <AppBar
            position="sticky"
            sx={{
                background: 'transparent',
                boxShadow: 0, // Remove default shadow
                backdropFilter: 'blur(10px)', // Apply the blur effect
                backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slight transparency for the frosted look
                zIndex: 1200, // Ensure it stays on top
                transition: 'background-color 0.3s ease', // Smooth background color transition
            }}
        >
            <Toolbar>
                {/* Logo */}
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <Link to={'/'}>
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ width: 150, height: 41 }}
                            sx={buttonStyle('Home')}
                            onClick={() => handleButtonClick('Home')}
                        />
                    </Link>    
                </Box>

                {/* Navigation Buttons for larger screens */}
                <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', fontWeight: "800" }}>
                    <Button
                        component={Link}
                        to="/"
                        color="inherit"
                        sx={buttonStyle('Home')}
                        onClick={() => handleButtonClick('Home')}
                    >
                        Home
                    </Button>
                    <Button
                        component={Link}
                        to="/about"
                        color="inherit"
                        sx={buttonStyle('About')}
                        onClick={() => handleButtonClick('About')}
                    >
                        About
                    </Button>

                    <Button
                        component={Link}
                        to="/service-page"
                        color="inherit"
                        sx={buttonStyle('Services')}
                        onClick={() => handleButtonClick('Services')}
                    >
                        Services
                    </Button>

                    <Button
                        component={Link}
                        to="/resources"
                        color="inherit"
                        sx={buttonStyle('Resources')}
                        onClick={() => handleButtonClick('Resources')}
                    >
                        Resources
                    </Button>

                    <Button
                        component={Link}
                        to="/contact"
                        color="inherit"
                        sx={buttonStyle('Contact')}
                        onClick={() => handleButtonClick('Contact')}
                    >
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
                            backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slight transparency for the background
                            backdropFilter: 'blur(5px)', // Frosted effect
                            borderRadius: '8px',
                            padding: '8px',
                            opacity: 1,
                            transition: 'transform 0.5s ease-in-out', // Smooth transition
                            zIndex: 9999, // Ensure it's on top
                        }}
                    >
                        <Button
                            component={Link}
                            to="/"
                            sx={{
                                width: '100%',
                                textAlign: 'left',
                                color: 'black',
                                fontFamily: 'Montserrat',
                                fontWeight: 400,
                            }}
                            onClick={() => {
                                setMobileMenuOpen(false);
                                setActiveButton('Home');
                            }} // Close and mark as active
                        >
                            Home
                        </Button>
                        <Button
                            component={Link}
                            to="/about"
                            sx={{
                                width: '100%',
                                textAlign: 'left',
                                color: 'black',
                                fontFamily: 'Montserrat',
                                fontWeight: 400,
                            }}
                            onClick={() => {
                                setMobileMenuOpen(false);
                                setActiveButton('About');
                            }} // Close and mark as active
                        >
                            About
                        </Button>
                        <Button
                            component={Link}
                            to="/service-page"
                            sx={{
                                width: '100%',
                                textAlign: 'left',
                                color: 'black',
                                fontFamily: ' font-comic',
                                fontWeight: 400,
                            }}
                            onClick={() => {
                                setMobileMenuOpen(false);
                                setActiveButton('Services');
                            }} // Close and mark as active
                        >
                            Services
                        </Button>
                        <Button
                            component={Link}
                            to="/resources"
                            sx={{
                                width: '100%',
                                textAlign: 'left',
                                color: 'black',
                                fontFamily: ' font-comic',
                                fontWeight: 400,
                            }}
                            onClick={() => {
                                setMobileMenuOpen(false);
                                setActiveButton('Resources');
                            }} // Close and mark as active
                        >
                            Resources
                        </Button>
                        <Button
                            component={Link}
                            to="/contact"
                            sx={{
                                width: '100%',
                                textAlign: 'left',
                                color: 'black',
                                fontFamily: 'Montserrat',
                                fontWeight: 400,
                            }}
                            onClick={() => {
                                setMobileMenuOpen(false);
                                setActiveButton('Contact');
                            }} // Close and mark as active
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
