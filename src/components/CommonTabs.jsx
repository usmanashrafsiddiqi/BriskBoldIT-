import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

const CommonTabs = ({ data }) => {
    return (
        <Box
            sx={{
                width: '100%',
                typography: 'body1',
                bgcolor: '#f4f6f8',
                position: 'relative',
                backgroundImage: `url('/assets/hyperbg.jpg')`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat', 
                minHeight: "100vh",
                height: "100%",
                margin: 0, 
                padding: 0,  
                marginBottom: 0,
            }}
        >
            {/* Loop through the data and render the headings */}
            <Grid container justifyContent="center" sx={{ marginBottom: '20px' }}>
                {data.tabs.map((tab, index) => (
                    <Grid item xs={12} key={index}>
                        <Typography
                            variant="h3"
                            sx={{
                               color:"white",
                                textAlign: 'center', 
                                fontFamily: 'Montserrat, sans-serif', 
                                fontWeight:"800"
                            }}
                        >
                            {tab.head}
                        </Typography>
                    </Grid>
                ))}
            </Grid>

            {/* Render the content of the tabs */}
            <Grid 
                container 
                spacing={3} 
                sx={{ 
                    maxWidth: '1200px', 
                    margin: '0 auto', 
                    justifyContent: { xs: 'flex-start', sm: 'center' }, 
                    alignItems: 'stretch',  
                }}
            >
                {data.tabs.map((tab, index) => (
                    <Grid 
                        item 
                        xs={12}  
                        sm={6}    
                        md={6}    
                        key={index}
                        sx={{ 
                            display: 'flex', 
                            justifyContent: 'flex-start', 
                            alignItems: 'stretch',  
                            marginBottom: '40px',  
                        }}
                    >
                        <Paper
                            sx={{
                                padding: '20px',
                                borderRadius: '12px', 
                                boxShadow: 6, 
                                height: '100%',  
                                width: { xs: '90%', sm: '80%' },  
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start', 
                                border: '2px solid rgba(255, 255, 255, 0.3)',
                                backdropFilter: 'blur(10px)', 
                                background: 'rgba(255, 255, 255, 0.1)', 
                                transition: 'all 0.3s ease', 
                                '&:hover': {
                                    boxShadow: 12, 
                                    transform: 'scale(1.05)', 
                                },
                            }}
                        >
                            {/* Title of each box with gradient style */}
                            <Typography
                                variant="h5"
                                sx={{
                                    marginBottom: '12px',
                                    fontWeight: 'bold',
                                    background: 'linear-gradient(45deg, #177dea, #b22fe3)', 
                                    WebkitBackgroundClip: 'text', 
                                    color: 'transparent', 
                                    textTransform: 'uppercase',
                                }}
                            >
                                {tab.title}
                            </Typography>

                            {/* Content Text */}
                            {tab.content.map((content, index) => (
                                <Typography
                                    key={index}
                                    variant="body1"
                                    sx={{
                                        color: 'white',
                                        lineHeight: '1.6',
                                        marginBottom: '12px', 
                                    }}
                                >
                                    {content}
                                </Typography>
                            ))}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CommonTabs;
