import React from "react";
import { useRoutes } from "react-router";
import styled from "styled-components";
import AgentComp from "../AgentDashboard/AgentComp";
import AgentHeader from "../AgentDashboard/AgentHeader";
import AgentSidebar from "../AgentDashboard/AgentSidebar";
import AgentUpload from "../AgentDashboard/AgentUpload";


const AgentRoutes = () => {

    const element = useRoutes([
        {
            path: "/agenthome",
            element: <AgentComp />,
        },
        {
            path: "/agentupload",
            element: <AgentUpload />,
        },
        // {
        //     path: "/houseforsale",
        //     element: <HouseSale />,
        // },
        // {
        //     path: "/houseforrent",
        //     element: <HouseRent />,
        // },
    ])

    return (
        <>

            

                            <Body>

                    <Head>
                        <AgentHeader />
                    </Head>

                    <Bottom>

                        <Side>
                            <AgentSidebar />
                        </Side>

                        <DashRoute>
                            {element}
                        </DashRoute>

                    </Bottom>

                    </Body>

        </>
    )
}

export default AgentRoutes;


// const DashHead = styled.div``;

const DashRoute = styled.div`
width: calc(100% - 275px);
height: 100%;
`;

const Side = styled.div`
width: 250px;
height: 100vh;
postition: fixed;
`;

const Bottom = styled.div`
width: 100%;
display: flex;
`;

const Head = styled.div`
width: 100%;
height: 65px;
`;

const Body = styled.div`
width: 100%;
height: 100%;
overflow: hidden;
`;



