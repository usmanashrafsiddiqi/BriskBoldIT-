import React from 'react';
import { Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from '@mui/material';

const toolsData = {
    ProcessMining: [
        'https://logowik.com/content/uploads/images/automation-anywhere1292.logowik.com.webp',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fmuOM47OKp5qwqSEuATmvUyoZ6Bp3kUW2A&s',
        'https://techchannel.com/wp-content/uploads/company-images/25F30A88-D68F-4B7E-B7BB-176F3D5A8706.jpg'
    ],
    RPAAIAutomation: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fmuOM47OKp5qwqSEuATmvUyoZ6Bp3kUW2A&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaer6OUw5nSzQZD2LzarVgEOFILGUl4t_thg&s',
        'https://logowik.com/content/uploads/images/automation-anywhere1292.logowik.com.webp',
    ],
    ConversationalAI: [
        'https://miro.medium.com/v2/resize:fit:3128/1*b9vA2iwZMmhUtRDF7bkAWw.png',
        'https://www.temenos.com/wp-content/uploads/2022/03/twixor-Logo-1.png',
    ],
    IntelligentDocumentProcessing: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fmuOM47OKp5qwqSEuATmvUyoZ6Bp3kUW2A&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3H2ATRJjg5Jk_dRBc1TYjXCZjVczKhu04Q&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAbIl_1z_P6bsi7AAB26ujGZaPFFALwPu88Cj4jnH2qk4smhNTpfjX0rzA76AwsPfp9M&usqp=CAU',
    ],
    Insights: [
        'https://logos-world.net/wp-content/uploads/2022/02/Microsoft-Power-BI-Symbol.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fmuOM47OKp5qwqSEuATmvUyoZ6Bp3kUW2A&s',
        'https://logowik.com/content/uploads/images/automation-anywhere1292.logowik.com.webp',
    ],
};

const QuestionsList = [
    'Why Choose BriskBold for HyperAutomation?',
    '• High quality Automatically Generated Documentation like PDDs and SDDs.',
    '• Reusable Component-based models for Accelerated Process Development.',
    '• Automated Quality Assurance lifecycle process.',
    '• Personalized Support Packages offered for your RPA programs.',
    '• Multi-Channel Support to achieve your automated business processes.',
];

const Tools = () => {
    return (
        <Box sx={{ width: '100%', paddingBottom: '30px' }}>
            {/* Add Heading Above the Table */}
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: '#000' }}>
            Expertise
            </Typography>

            {/* Table of Tools for Large Screens */}
            <TableContainer component={Paper} sx={{ marginBottom: '30px', display: { xs: 'none', sm: 'block' } }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Process Mining</TableCell>
                            <TableCell align="center">RPA /AI Automation</TableCell>
                            <TableCell align="center">Conversational AI</TableCell>
                            <TableCell align="center">Intelligent Document Processing(IDP)</TableCell>
                            <TableCell align="center">Insights</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow sx={{ '&:hover': { backgroundColor: '#f1f1f1' } }}>
                            {Object.keys(toolsData).map((category, index) => (
                                <TableCell key={index} align="center" sx={{ height: '400px', padding: '10px' }}>
                                    <Grid container direction="column" alignItems="center" spacing={2} sx={{ height: '100%' }}>
                                        {toolsData[category].map((toolImage, imgIndex) => (
                                            <Grid item key={imgIndex} sx={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    src={toolImage}
                                                    alt={`Tool ${imgIndex + 1}`}
                                                    style={{
                                                        width: '120px',
                                                        height: '100px',
                                                        objectFit: 'cover',
                                                        borderRadius: '8px',
                                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
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
                                    color: '#3182ce',
                                    marginBottom: '10px',
                                }}
                            >
                                {category.replace(/([A-Z])/g, ' $1').trim()}
                            </Typography>

                            <Grid container direction="column" alignItems="center" spacing={2}>
                                {toolsData[category].map((toolImage, imgIndex) => (
                                    <Grid item key={imgIndex} sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                        <img
                                            src={toolImage}
                                            alt={`Tool ${imgIndex + 1}`}
                                            style={{
                                                width: '100%',
                                                maxWidth: '120px',
                                                height: 'auto',
                                                objectFit: 'cover',
                                                borderRadius: '8px',
                                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                            }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* <Box sx={{ marginTop: '40px' }}>
                {QuestionsList.map((question, index) => (
                    <Typography key={index} variant="body1" sx={{ fontWeight: index === 0 ? 'bold' : 'normal', marginBottom: '10px', color: index === 0 ? '#3182ce' : '#333' }}>
                        {question}
                    </Typography>
                ))}
            </Box> */}
        </Box>
    );
};

export default Tools;
