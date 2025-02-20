import React from 'react';
import CommonTabs from '../components/CommonTabs';
import { Typography, Box } from '@mui/material';

const HyperAutomation = () => {
    const data = {

        tabs: [
            
            {
               head:"Hyperautomation",
                label: "Discover Processes",
                title: "RPA/AI Automation",
                content: [
                    "Effortless automation, powered by AI. Experience unmatched efficiency with tailored automation solutions that evolve with your business needs. Our solutions are designed to not just automate but to innovate, helping you stay ahead in a competitive market.",
                ],
            },
            {
                label: "Build Processes",
                title: "Process Mining",
                content: [
                    "Uncover hidden efficiencies in your processes.Trust us to reveal the hidden potential in your operations, driving continuous improvement and cost savings. With our expertise, turn your process data into actionable insights that drive sustainable growth.",
                ],
            },
            {
                label: "Manage and Run",
                title: "Conversational AI",
                content: [
                    "Engage smarter with AI-driven conversations.Partner with us for cutting-edge conversational AI that enhances customer satisfaction and loyalty. Our conversational AI solutions ensure every interaction is meaningful, personal, and efficient.",
                ],
            },
            {
                label: "Measure and Maintenance",
                title: "Insights",
                content: [
                    "Data-driven decisions, simplified.Let us turn your data into actionable insights, giving you a competitive edge in decision-making. We empower your business with predictive analytics, turning insights into foresight for better planning.",
                ],
            },
            {
                label: "Training",
                title: "IDP (Intelligent Document Processing)",
                content: [
                    "Transform documents into actionable insights.Count on our expertise to streamline your document workflows, saving time and boosting accuracy. Our solutions intelligently extract, process, and analyse data, transforming how you handle information.",
                ],
            },
        ],
    };

    return (
       
            



            <CommonTabs data={data} />
       
    );
};

export default HyperAutomation;
