import React from 'react';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const carouselImages = [
    'https://images.unsplash.com/photo-1562783912-21ad31ee2a83?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://media.istockphoto.com/id/2110589244/photo/ai-text-artificial-intelligence-digital-concept-chatbot-assistant-ai-chatbot.jpg?s=2048x2048&w=is&k=20&c=5oOCWjtd3yZvukSPngxrKkrIOYNe99IrlgAf8neCYuY=',
    'https://plus.unsplash.com/premium_photo-1682002135678-87b8a2fdde50?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://media.istockphoto.com/id/1933417108/photo/ai-chatbot-artificial-intelligence-concept.jpg?s=2048x2048&w=is&k=20&c=0vyuUTGrtFH_u13z0_b1icMS6vokRftmcQ4dyU0QZbA=',
    'https://images.unsplash.com/photo-1619679505795-a4d0e6be5e02?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];


const arrowStyle = {
    background: 'transparent',
    border: 'none',
    fontSize: '2rem',
    color: '#FF6F61',
    cursor: 'pointer',
    outline: 'none',
    padding: '0',
    zIndex: 10, 
};

const Customer = () => {
   
    const settings = {
        dots: true, 
        infinite: true,
        speed: 500, 
        slidesToShow: 3, 
        slidesToScroll: 1, 
        centerMode: true, 
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2, 
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, 
                },
            },
        ],
        nextArrow: (
            <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                <button style={arrowStyle}>→</button>
            </div>
        ),
        prevArrow: (
            <div style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                <button style={arrowStyle}>←</button>
            </div>
        ),
    };

    return (
        <Box sx={{ width: '100%', padding: '30px' }}>
           
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    background: 'linear-gradient(45deg, #FF6F61, #6B5B95)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontWeight: 'bold',
                    marginBottom: '30px',
                    fontSize: '2rem',
                    letterSpacing: '1px',
                }}
            >
                Trusted by top analysts, loved by customers.
            </Typography>

           
            <Slider {...settings} style={{ position: 'relative' }}>
                {carouselImages.map((image, index) => (
                    <div key={index}>
                        <img
                            src={image}
                            alt={`Customer ${index}`}
                            style={{
                                width: '200px',
                                height: '200px',
                                borderRadius: '8px',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                margin: '0 auto', 
                                display: 'block', 
                            }}
                        />
                    </div>
                ))}
            </Slider>
        </Box>
    );
};

export default Customer;
