import React from 'react';
import CommonTabs from '../components/CommonTabs';


const HyperAutomation = () => {
    const data = {
        tabs: [
            {
                label: "Discover Processes",
                title: "Opportunity Identification",
                content: [
                    "Opportunity identification and prioritization is key in any RPA adoption. Our team of business analysts know where and how RPA can drive cost reduction, higher accuracy and improved customer satisfaction.",
                ],
            },
            {
                label: "Build Processes",
                title: "Design & Development",
                content: [
                    "From simple to advanced, we build automations quickly. Our solutions are designed and built in a component based models which are very fast to build and very easily to maintain.",
                ],
            },
            {
                label: "Manage and Run",
                title: "Implementation & Testing",
                content: [
                    "Deploy, manage and optimize processes. Testing stages of the process can be explained as  Component testing, System testing, Acceptance testing",
                ],
            },
            {
                label: "Measure and Maintenance",
                title: "Support & Maintenance",
                content: [
                    "Measure operations and performance to align with business outcomes. We keep your processes and automation robots healthy and productive for better ROI(Return On Investement)",
                ],
            },
            {
                label: "Training",
                title: "Training & Enablement",
                content: [
                    "We help companies to build their internal capabilities to adapt, scale and bring business value along with competitive advantages and continuous improvement of your internal Centre of Excellence.",
                ],
            },
        ],
    };


    return <CommonTabs data={data} />;
};

export default HyperAutomation;
