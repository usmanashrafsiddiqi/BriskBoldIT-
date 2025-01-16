import React from 'react';
import { Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from '@mui/material';
import automationanywhereimg from "/assets/automationanywhere.jpg";
import uipathimg from "/assets/uipath.png";
import softwareagimg from "/assets/softwareag.jpg";
import powerautomateimg from "/assets/powerautomate.jpg";
import druidimg from "/assets/druid1.png";
import twixiorimg from "/assets/twix.png";
import docaquireimg from "/assets/docaquire.png";
import abbyimg from "/assets/abby.png";
import powerbiimg from "/assets/powerbi.png";

const toolsData = {
    ProcessMining: [
        automationanywhereimg,
        uipathimg,
        softwareagimg,
    ],
    RPAAIAutomation: [
        uipathimg,
        powerautomateimg,
        automationanywhereimg,
    ],
    IntelligentDocumentProcessing: [
        uipathimg,
        docaquireimg,
        abbyimg,
    ],
    Insights: [
        powerbiimg,
        uipathimg,
        automationanywhereimg,
    ],
    ConversationalAI: [
        druidimg,
        twixiorimg,
    ],
};

const Tools = () => {
    return (
        <Box
            sx={{
                width: '100%',
                paddingBottom: '30px',
                backgroundImage: 'url(/assets/servicelatest.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    fontFamily: 'Montserrat, sans-serif', 
                    fontWeight: '800',
                    color: 'white', 
                    textAlign: 'center',
                    marginBottom: '20px',
                    paddingTop: '50px', 
                }}
            >
                Expertise
            </Typography>

            {/* Table of Tools for Large Screens */}
            <TableContainer
                component={Paper}
                sx={{
                    marginBottom: '30px',
                    display: { xs: 'none', sm: 'block' },
                    background: 'transparent',
                    boxShadow: 'none',
                    border: 'none',  
                    padding: 0,     
                }}
            >
                <Table sx={{ backgroundColor: 'transparent' }}>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: 'transparent' }}>
                            <TableCell
                                align="center"
                                sx={{
                                    fontFamily: 'Montserrat, sans-serif', 
                                    fontWeight: 'bold',
                                    borderBottom: 'none', 
                                    backgroundImage: 'linear-gradient(45deg, #177dea, #b22fe3)',
                                    WebkitBackgroundClip: 'text',
                                    color: 'transparent',
                                }}
                            >
                                Process Mining
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{
                                    fontFamily: 'Montserrat, sans-serif', 
                                    fontWeight: 'bold', 
                                    borderBottom: 'none', 
                                    backgroundImage: 'linear-gradient(45deg, #177dea, #b22fe3)',
                                    WebkitBackgroundClip: 'text',
                                    color: 'transparent',
                                }}
                            >
                                RPA /AI Automation
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{
                                    fontFamily: 'Montserrat, sans-serif', 
                                    fontWeight: 'bold',
                                    borderBottom: 'none', 
                                    backgroundImage: 'linear-gradient(45deg, #177dea, #b22fe3)',
                                    WebkitBackgroundClip: 'text',
                                    color: 'transparent',
                                }}
                            >
                                Insights
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{
                                    fontFamily: 'Montserrat, sans-serif', 
                                    fontWeight: 'bold',
                                    borderBottom: 'none', 
                                    backgroundImage: 'linear-gradient(45deg, #177dea, #b22fe3)',
                                    WebkitBackgroundClip: 'text',
                                    color: 'transparent',
                                }}
                            >
                                Intelligent Document <br></br>Processing
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{
                                    fontFamily: 'Montserrat, sans-serif', 
                                    fontWeight: 'bold', 
                                    borderBottom: 'none', 
                                    backgroundImage: 'linear-gradient(45deg, #177dea, #b22fe3)',
                                    WebkitBackgroundClip: 'text',
                                    color: 'transparent',
                                }}
                            >
                                Conversational AI
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {Object.keys(toolsData).map((category, index) => (
                                <TableCell
                                    key={index}
                                    align="center"
                                    sx={{
                                        height: '400px',
                                        padding: '10px',
                                        backgroundColor: 'transparent',
                                        fontFamily: 'Montserrat, sans-serif', 
                                        fontWeight: 'normal',
                                        borderBottom: 'none', 
                                    }}
                                >
                                    <Grid container direction="column" alignItems="center" spacing={2} sx={{ height: '100%' }}>
                                        {toolsData[category].map((toolImage, imgIndex) => (
                                            <Grid item key={imgIndex} sx={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    src={toolImage}
                                                    alt={`Tool ${imgIndex + 1}`}
                                                    style={{
                                                        width: '125px',
                                                        height: '110px',
                                                        objectFit: 'cover',
                                                        borderRadius: '8px',
                                                        boxShadow: '0 0 15px 5px rgba(255, 255, 255, 0.3)',
                                                        backgroundColor: 'white',
                                                        border: '2px solid rgba(255, 255, 255, 0.6)',
                                                        
                                                        marginTop: toolImage === twixiorimg ? '-64px' : '0',
                                                    }}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Column-wise Layout for Medium and Small Screens */}
            <Box sx={{ display: { xs: 'block', sm: 'none' }, marginBottom: '30px' }}>
                <Grid container spacing={4}>
                    {Object.keys(toolsData).map((category, index) => (
                        <Grid item xs={12} key={index}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    marginBottom: '10px',
                                    whiteSpace: 'nowrap', 
                                    backgroundImage: 'linear-gradient(45deg, #177dea, #b22fe3)',
                                    WebkitBackgroundClip: 'text',
                                    color: 'transparent',
                                }}
                            >
                                {category.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([a-zA-Z])\/([a-zA-Z])/g, '$1/$2').trim()}
                            </Typography>

                            {/* Horizontal layout for images on small screens */}
                            <Grid container direction="row" justifyContent="center" spacing={2}>
                                {toolsData[category].map((toolImage, imgIndex) => (
                                    <Grid item key={imgIndex} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <img
                                            src={toolImage}
                                            alt={`Tool ${imgIndex + 1}`}
                                            style={{
                                                width: '100px',  
                                                height: 'auto',
                                                objectFit: 'cover',
                                                borderRadius: '8px',
                                                boxShadow: '0 0 15px 5px rgba(255, 255, 255, 0.3)',  
                                                backgroundColor: 'white', 
                                                border: '2px solid rgba(255, 255, 255, 0.6)',
                                            }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Tools;
