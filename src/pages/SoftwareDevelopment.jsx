import React from 'react';
import CommonTabs from '../components/CommonTabs';
import { Typography, Box } from '@mui/material';

const SoftwareDevelopment = () => {
    const data = {
        tabs: [
            {
                head:"Software Development",
                label: "Analysis",
                title: 'Analysis',
                content: ["Insight-driven planning for smarter solutions.Work with our experts to identify the best strategies, ensuring your project starts with a clear path to success. We dive deep into your business needs to create a roadmap that guarantees successful outcomes."]
            },
            {
                label: "Design",
                title: 'Design',
                content: ["Crafting user-centric, visually stunning designs.Engage us to create designs that not only look great but also deliver exceptional user experiences. Our design philosophy combines creativity with functionality, ensuring every project is a visual delight."]
            },
            {
                label: "Development",
                title: 'Development',
                content: ["Building robust, scalable applications.Choose our team to build applications that grow with your business, ensuring long-term success. We specialize in crafting solutions that are as flexible as they are powerful, adapting to your evolving needs."]
            },
            {
                label: "Testing",
                title: 'Testing',
                content: ["Ensuring flawless performance, every time.Trust our thorough testing processes to deliver software that performs flawlessly under any condition. Our comprehensive testing ensures your software not only works but excels under all circumstances."]
            },
            {
                label: "Implementation",
                title: 'Implementation',
                content: ["Seamless integration for instant impact.Rely on us for smooth implementation, minimizing downtime and maximizing your investment’s impact. We ensure that every implementation is smooth, efficient, and fully aligned with your business goals."]
            },
            {
                label: "Operations & Maintenance",
                title: 'Operations & Maintenance',
                content: ["Continuous support for lasting success.Partner with us for ongoing support, ensuring your systems remain reliable and up to date. Our proactive maintenance services keep your systems running smoothly, with minimal disruption."]
            },
        ]
    };

    return (
      
          
            <CommonTabs data={data} />
     
    );
};

export default SoftwareDevelopment;
