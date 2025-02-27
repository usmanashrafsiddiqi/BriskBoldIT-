import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

const Resources = () => {
  
    const videos = [
        { title: 'How to use AI in our daily lives', url: 'https://www.youtube.com/embed/b0Aj0EPE-_s?si=08hcepOydefAAokE' },
        { title: 'UiPath Vs Automation', url: 'https://www.youtube.com/embed/iBhJW1rpLww?si=Z29Gbfom_GrFVMCd' },
        { title: 'Conversational AI and Use Cases', url: 'https://www.youtube.com/embed/0jPwLVZ7nSQ?si=m-mZMkAuQASy-1Lw' },
        { title: 'The Future Of Low Code #joget #Briskbold' , url: "https://www.youtube.com/embed/h5ZR06KgfjM?si=YQxVlwzN_jSPwulh"  },
    ];

    return (
        <Box
            sx={{
                background: 'transparent', // Background gradient color
                py: 6,
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: 'center',
                        mb: 4,
                        color: 'white',  
                        fontFamily: 'Montserrat, sans-serif',  
                        fontWeight: 800,  
                    }}
                >
                    YouTube Resources
                </Typography>

                <Grid container spacing={4}>
                    {videos.map((video, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card
                                sx={{
                                    boxShadow: 3,
                                    borderRadius: '8px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',  
                                    backdropFilter: 'blur(10px)',  
                                    padding: '16px',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    "&:hover": {
                                        transform: 'scale(1.05)', 
                                        boxShadow: '0 0 15px rgba(255, 255, 255, 0.7)',  
                                    },
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            mb: 2,
                                            fontWeight: 'bold',
                                            display: 'block',
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis',
                                            color: 'white',  
                                        }}
                                    >
                                        {video.title}
                                    </Typography>

                                    <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={video.url}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title={video.title}
                                            style={{ position: 'absolute', top: 0, left: 0 }}
                                        ></iframe>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Resources;
