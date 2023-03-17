import React from "react";
import { useRoutes } from "react-router";
import styled from "styled-components";
// import AdminHome from "../AdminDashboard/AdminHome";
// import AdminUpload from "../AdminDashboard/AdminUpload";
// import DashHeader from "../AdminDashboard/DashHeader";
import SideBar from "../AdminDashboard/SideBar";
import Contact from "../Contact/Contact";
import HomeScreen from "../Home/HomeSreen";
import Signin from "../User/Signin";
import Signup from "../User/Signup";
import SignUpHome from "../User/SignUpHome";


const AllRoutes = () => {

    const element = useRoutes([
        {
            path: "/",
            element: <HomeScreen />
        },
        {
            path: "/contact",
            element: <Contact />
        },
        {
            path: "/getstarted",
            element: <SignUpHome />
        },
        {
            path: "/signup",
            element: <Signup />
        },
        {
            path: "/signin",
            element: <Signin />
        },
    ])

    return element
}

export default AllRoutes;


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



