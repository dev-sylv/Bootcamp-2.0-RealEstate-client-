import React from "react";
import { useRoutes } from "react-router";
import styled from "styled-components";
import UserComp from "../UserDashboard/UserComp";
import UserHeader from "../UserDashboard/UserHeader";
import UserSidebar from "../UserDashboard/UserSidebar";


const UserRoutes = () => {

    const element = useRoutes([
        {
            path: "/userhome",
            element: <UserComp />,
        },
        // {
        //     path: "/adminupload",
        //     element: <AdminUpload />,
        // },
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
                        <UserHeader />
                    </Head>

                    <Bottom>

                        <Side>
                            <UserSidebar />
                        </Side>

                        <DashRoute>
                            {element}
                        </DashRoute>

                    </Bottom>

                    </Body>

        </>
    )
}

export default UserRoutes;


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



