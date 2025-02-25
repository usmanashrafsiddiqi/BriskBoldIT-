import React from 'react';
import { Box } from '@mui/material';
import HyperAutomation from './HyperAutomation';
import DigitalTransformation from './DigitalTransformation';
import SoftwareDevelopment from './SoftwareDevelopment';
import Consultation from './Consultation';

const ServicePage = () => {
    return (
        <Box
            sx={{
                margin: 0, // Remove all margins
                padding: 0, // Remove all padding
                background: 'transparent', // Apply gradient background
            }}
        >
            {/* HyperAutomation Section */}
            <Box sx={{ marginBottom: 0, padding: 0 }}>
                <HyperAutomation />
            </Box>

            {/* DigitalTransformation Section */}
            <Box sx={{ marginBottom: 0, padding: 0 }}>
                <DigitalTransformation />
            </Box>

            {/* SoftwareDevelopment Section */}
            <Box sx={{ marginBottom: 0, padding: 0 }}>
                <SoftwareDevelopment />
            </Box>

            {/* Consultation Section */}
            <Box sx={{ marginBottom: 0, padding: 0 }}>
                <Consultation />
            </Box>
        </Box>
    );
};

export default ServicePage;
