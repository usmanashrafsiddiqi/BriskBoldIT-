import React from 'react';
import CommonTabs from '../components/CommonTabs';

const Consultation = () => {
    const data = {
        tabs: [
            {
                label: "Consultation",
                title: 'Consultation',
                content: ["Consultation services at the BriskBold are the key elements in all our projects, as there is no project of any kind that can succeed without it. We aim to understand the nature of the existing problem at any entity, to discover its dimensions and to study the stages of work currently being used with its advantages and disadvantages. Our consulting services focus on organization's critical issues and opportunities: strategy, marketing, operations, technology, digital transformation, advanced analytics etc. We bring deep, functional expertise and capture value across boundaries and between the silos of any organization."]
            },
            {
                label: "Training",
                title: 'Training',
                content: ["At BriskBold, we provide you with an exceptional training journey. With a wide range of courses available to suit every skill level as well as tailored made courses for the organizations. We offer online, onsite, and hands on training with 1:1 learning experience."]
            },
           
        ]
    };

    return <CommonTabs data={data} />;
};

export default Consultation;
