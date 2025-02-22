import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';

const CommonTabs = ({ data }) => {
  return (
    <Box
      sx={{
        width: '100%',
        typography: 'body1',
        position: 'relative',
        minHeight: '100vh',
        height: '100%',
        margin: 0, // Remove margin
        padding: 0, // Remove padding
        backgroundColor: 'transparent', // Set background to transparent
      }}
    >
      {/* Title Header */}
      <Box sx={{ textAlign: 'center', marginBottom: '30px' }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: '800',
            color: 'white',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3rem' }, // Adjust font size based on screen size
          }}
        >
          {data.tabs[0]?.head} {/* Display heading from data */}
        </Typography>
      </Box>

      {/* Tabs Container */}
      <Grid container justifyContent="center" spacing={2}>
        {data.tabs.map((tab, index) => (
          <Grid item xs={12} md={8} key={index} sx={{ width: '100%' }}>
            {/* Paper (simulating accordion behavior without the toggle) */}
            <Paper
              sx={{
                boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #1c2057, #0b0b37)', // Apply gradient to background
                '&:hover': {
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                },
                width: '100%',
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              {/* Title (previously AccordionSummary) */}
              <Box
                sx={{
                  backgroundColor: 'transparent', // Make summary transparent to let gradient show
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '15px',
                  textAlign: 'left',
                }}
              >
                <Typography
                  sx={{
                    textTransform: 'uppercase',
                    fontSize: '1.2rem',
                    color: 'white', // Keep text white for good contrast on dark background
                    width: '100%',
                  }}
                >
                  {tab.label} {/* Accordion Label */}
                </Typography>
              </Box>

              {/* Content (previously AccordionDetails) */}
              <Box
                sx={{
                  backgroundColor: 'transparent', // Transparent to keep gradient visible
                  padding: '15px',
                  borderRadius: '0px 0px 10px 10px',
                  color: 'white', // White text for good contrast on dark background
                  fontSize: '1rem',
                }}
              >
                <Typography variant="body1">
                  {tab.content[0]} {/* Accordion Content */}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CommonTabs;
