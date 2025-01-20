import React from 'react';
import CommonTabs from '../components/CommonTabs';
import { Typography, Box } from '@mui/material';

const DigitalTransformation = () => {
    const data = {
        tabs: [
            {
                 head:"Digital Transformation",
                label: "IT Transformation",
                title: 'IT Transformation',
                content: ["Modernize IT, revolutionize your future.Choose us to modernize your IT infrastructure, ensuring future-ready solutions that drive success. We don’t just upgrade your IT; we future-proof your business with cutting-edge technology."]
            },
            {
                label: "Data Transformation",
                title: 'Data Transformation',
                content: ["Unlock the power of your data.Rely on us to harness your data’s full potential, turning it into a strategic asset for your business. Our advanced data transformation services ensure your data drives smarter, faster decisions."]
            },
            {
                label: "Business Process Transformation",
                title: 'Business Process Transformation',
                content: ["Streamline operations, boost performance.Collaborate with us to redesign your processes, unlocking greater efficiency and innovation. We help you reimagine your business processes for a more agile and resilient organization."]
            },
            {
                label: "AI Transformation",
                title: 'AI Transformation',
                content: ["Empower innovation with AI-driven solutions.Trust us to lead your AI transformation, unlocking new possibilities and driving business growth. Our AI solutions are crafted to seamlessly integrate into your operations, delivering exponential value."]
            },
        ]
    };

    return (
       
           
            <CommonTabs data={data} />
        
    );
};

export default DigitalTransformation;
