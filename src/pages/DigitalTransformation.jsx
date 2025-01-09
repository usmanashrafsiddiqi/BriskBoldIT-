import React from 'react';
import CommonTabs from '../components/CommonTabs';

const DigitalTransformation = () => {
    const data = {
        tabs: [
            {
                label: "IT Transformation",
                title: 'IT Transformation',
                content: ["Business today needs secure IT environments for seamless internal and external communication. IT transformation optimizes existing systems to align with business goals and future growth, enabling a modern, automated, and agile infrastructure. This transformation enhances data quality, drives faster innovation, and provides valuable insights for better decision-making."]
            },
            {
                label: "Data Transformation",
                title: 'Data Transformation',
                content: ["Organizations face data overload from various sources, making effective management crucial. Data transformation reorganizes data to make it more accessible and useful. We help convert data into valuable insights, enabling better decision-making, real-time information, and a competitive edge for faster results"]
            },
            {
                label: "Business Process Transformation",
                title: 'Business Process Transformation',
                content: ["Business Process Transformation focuses on radically changing processes to meet new goals, often driven by digital transformation. It modernizes processes, incorporates new technologies, and improves system integration. Our experts help businesses automate tasks, enhance operations, and align processes with goals to boost efficiency and sustainability."]
            },
            {
                label: "AI Transformation",
                title: 'AI Transformation',
                content: ["AI transformation is the next step in digital evolution, enabling businesses to stay competitive. It requires digital transformation to prepare data and processes for AI integration. Our experienced data engineers help incorporate AI into your business, enabling faster adaptation and achieving future objectives."]
            },
        ]
    };

    return <CommonTabs data={data} />;
};

export default DigitalTransformation;
