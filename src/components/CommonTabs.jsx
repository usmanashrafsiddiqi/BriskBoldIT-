import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

const CommonTabs = ({ data }) => {
    return (
        <Box sx={{ width: '100%', typography: 'body1', bgcolor: '#f4f6f8', paddingBottom: '30px' }}>

            <Grid container spacing={3} sx={{ maxWidth: '1200px', margin: '0 auto' }}>
                {data.tabs.map((tab, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <Paper
                            sx={{
                                padding: '20px',
                                borderRadius: '8px',
                                boxShadow: 3,
                                bgcolor: '#fff',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    marginBottom: '12px',
                                    fontWeight: 'bold',
                                    color: '#3182ce',
                                    textTransform: 'uppercase',
                                }}
                            >
                                {tab.title}
                            </Typography>
                            {tab.content.map((content, index) => (
                                <Typography
                                    key={index}
                                    variant="body1"
                                    sx={{
                                        color: '#333',
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
