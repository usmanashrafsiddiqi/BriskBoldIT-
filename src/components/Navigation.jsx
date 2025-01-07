import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Menu, MenuItem, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import logo from "../assets/logowebsite.jpg";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navigation = () => {
    const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleServicesMenuClick = (event) => {
        setServicesAnchorEl(event.currentTarget);
    };

    const handleCloseServicesMenu = () => {
        setServicesAnchorEl(null);
    };

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#2d3748', boxShadow: 3 }}>
            <Toolbar>
                {/* Logo */}
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ width: 82, height: 61 }}
                    />
                </Box>

                {/* Navigation Buttons */}
                <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center' }}>
                    <Button component={Link} to="/" color="inherit" sx={{ marginRight: 2 }}>
                        Home
                    </Button>
                    <Button component={Link} to="/about" color="inherit" sx={{ marginRight: 2 }}>
                        About
                    </Button>

                    {/* Services Dropdown with Down Arrow Icon */}
                    <Button
                        color="inherit"
                        sx={{
                            marginRight: 2,
                            display: 'flex',
                            alignItems: 'center',
                            paddingRight: 0,
                            paddingLeft: 1,
                        }}
                        onClick={handleServicesMenuClick}
                    >
                        Services
                        <ArrowDropDownIcon sx={{ marginLeft: 0.5 }} />
                    </Button>
                    <Menu
                        anchorEl={servicesAnchorEl}
                        open={Boolean(servicesAnchorEl)}
                        onClose={handleCloseServicesMenu}
                        sx={{ mt: 1 }}
                    >
                        <MenuItem component={Link} to="/hyper-automation" onClick={handleCloseServicesMenu}>
                            Hyper Automation
                        </MenuItem>
                        <MenuItem component={Link} to="/digital-transformation" onClick={handleCloseServicesMenu}>
                            Digital Transformation
                        </MenuItem>
                        <MenuItem component={Link} to="/software-development" onClick={handleCloseServicesMenu}>
                            Software/Web Design & Development
                        </MenuItem>
                        <MenuItem component={Link} to="/consultation" onClick={handleCloseServicesMenu}>
                            Consultation / Training
                        </MenuItem>
                    </Menu>

                    {/* Resources Link */}
                    <Button component={Link} to="/resources" color="inherit" sx={{ marginRight: 2 }}>
                        Resources
                    </Button>

                    {/* Other buttons */}
                    <Button component={Link} to="/contact" color="inherit">
                        Contact Us
                    </Button>
                </Box>

                {/* Mobile Menu Icon */}
                <IconButton
                    color="inherit"
                    sx={{ display: { xs: 'block', lg: 'none' } }}
                    onClick={handleMobileMenuToggle}
                >
                    <MenuIcon />
                </IconButton>

                {/* Mobile Dropdown Menu */}
                {mobileMenuOpen && (
                    <Box sx={{ position: 'absolute', top: '64px', right: 0, backgroundColor: 'white', boxShadow: 3 }}>
                        {/* <Button component={Link} to="/" color="inherit" sx={{ width: '100%', textAlign: 'left', color: '#2d3748' }}> */}

                        //aise sabko apne hisab se color dena mobile k liye
                        <Button component={Link} to="/" color="inherit" sx={{ width: '100%', textAlign: 'left', color: 'red' }}>
                            Home
                        </Button>
                        <Button component={Link} to="/about" color="inherit" sx={{ width: '100%', textAlign: 'left', color: 'red' }}>
                            About
                        </Button>
                        <Button
                            color="inherit"
                            sx={{ width: '100%', textAlign: 'left' , color: 'red'}}
                            onClick={handleServicesMenuClick}
                        >
                            Services
                            <ArrowDropDownIcon sx={{ marginLeft: 0 }} />
                        </Button>
                        <Button component={Link} to="/customer" color="inherit" sx={{ width: '100%', textAlign: 'left', color: 'red'}}>
                            Customer
                        </Button>
                        <Button component={Link} to="/tools" color="inherit" sx={{ width: '100%', textAlign: 'left', color: 'red' }}>
                            Tools
                        </Button>
                        <Button component={Link} to="/resources" color="inherit" sx={{ width: '100%', textAlign: 'left' , color: 'red'}}>
                            Resources
                        </Button>
                        <Menu
                            anchorEl={servicesAnchorEl}
                            open={Boolean(servicesAnchorEl)}
                            onClose={handleCloseServicesMenu}
                            sx={{ mt: 1 }}
                        >
                            <MenuItem component={Link} to="/hyper-automation" onClick={handleCloseServicesMenu}>
                                Hyper Automation
                            </MenuItem>
                            <MenuItem component={Link} to="/digital-transformation" onClick={handleCloseServicesMenu}>
                                Digital Transformation
                            </MenuItem>
                            <MenuItem component={Link} to="/software-development" onClick={handleCloseServicesMenu}>
                                Software/Web Design & Development
                            </MenuItem>
                            <MenuItem component={Link} to="/consultation" onClick={handleCloseServicesMenu}>
                                Consultation / Training
                            </MenuItem>
                        </Menu>
                        <Button component={Link} to="/contact" color="inherit" sx={{ width: '100%', textAlign: 'left' }}>
                            Contact Us
                        </Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;
