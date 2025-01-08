import React from 'react';
import CommonTabs from '../components/CommonTabs';

const SoftwareDevelopment = () => {
    const data = {
        tabs: [
            {
                label: "Analysis",
                title: 'Process',
                content: ["Detailed analysis of the software is performed to identify overall requirements of the client. This step is necessary to make adjustments and to ensure that software functions properly at the end."]
            },
            {
                label: "Design",
                title: 'Process',
                content: ["Software design is a process to transform user requirements into some suitable form, which helps the user to understand the final outing as well as programmer in software coding and implementation. The software design process can be divided into the following three level of phases of design :Interface Design,Architectural Design,Detailed Design"]
            },
            {
                label: "Development",
                title: 'Process',
                content: ["Development starts once the developer gets the design document which is translated into source code and then the development is divided in modules/units and actual coding is started. All the components of the software are implemented in this phase. This is the longest phase of the agile software development life cycle."]
            },
            {
                label: "Testing",
                title: 'Process',
                content: ["All types of functional testing are performed in this phase like unit testing, integration testing, system testing, acceptance testing as well as non-functional testing to make sure that the product is actually solving the needs addressed and gathered during the requirements phase."]
            },
            {
                label: "Implementation",
                title: 'Process',
                content: ["A replica of the production environment 'Staging' is created where they (Customer, BA) repeat the final testing. If the customer finds the application as expected, then it will go to the production for operations."]
            },
            {
                label: "Operations & Maintenance",
                title: 'Process',
                content: ["After the deployment of a product into the production environment, the normal operations starts, then the actual problems might occur and it needs to be solved from time to time where our team stands with you. We provide a selection of support & maintenance packages that keep your softwares healthy and effective."]
            },
        ]
    };

    return <CommonTabs data={data} />;
};

export default SoftwareDevelopment;
