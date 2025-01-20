import React from 'react';
import CommonTabs from '../components/CommonTabs';
import { Typography, Box } from '@mui/material';

const Consultation = () => {
    const data = {
        tabs: [
            {
                head:"Consultation",
                label: "Consultation",
                title: 'Consultation',
                content: ["Expert advice, tailored to your goals.Leverage our consultancy to navigate complex challenges with confidence, backed by our proven expertise. Our consultants bring a wealth of industry experience, offering insights that drive real-world results."]
            },
            {
                label: "Training",
                title: 'Training',
                content: ["Empowering teams with knowledge and skills.Engage our training services to empower your team, ensuring they stay ahead in today’s fast-paced world. Our customized training programs are designed to inspire, engage, and upskill your workforce effectively."]
            },
        ]
    };

    return (
       
            
            <CommonTabs data={data} />
       
    );
};

export default Consultation;
