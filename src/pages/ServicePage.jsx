import React from 'react';
import { Box } from '@mui/material';
import HyperAutomation from './HyperAutomation';  // Import each service component
import DigitalTransformation from './DigitalTransformation';
import SoftwareDevelopment from './SoftwareDevelopment';
import Consultation from './Consultation';

const ServicePage = () => {
    return (
        <Box
            sx={{
                padding: '20px',
                background: 'transparent', // Apply gradient background
                // minHeight: '100vh', // Remove this to stop forcing full viewport height
                // Add marginBottom if necessary to reduce gap
                marginBottom: '20px', // Optional, if you want to reduce any space at the bottom
            }}
        >
            {/* HyperAutomation Section */}
            <Box sx={{ marginBottom: '2px' }}>
                <HyperAutomation />  {/* This will show the HyperAutomation component */}
            </Box>

            {/* DigitalTransformation Section */}
            <Box sx={{ marginBottom: '2px' }}>
                <DigitalTransformation />  {/* This will show the DigitalTransformation component */}
            </Box>

            {/* SoftwareDevelopment Section */}
            <Box sx={{ marginBottom: '2px' }}>
                <SoftwareDevelopment />  {/* This will show the SoftwareDevelopment component */}
            </Box>

            {/* Consultation Section */}
            <Box sx={{ marginBottom: '0' }}>
                <Consultation />  {/* This will show the Consultation component */}
            </Box>
        </Box>
    );
};

export default ServicePage;
