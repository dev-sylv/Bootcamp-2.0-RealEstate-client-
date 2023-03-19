import React from "react";
import { useRoutes } from "react-router-dom";
import styled from "styled-components";
import About from "../AboutUs/AboutUs";
// import AdminHome from "../AdminDashboard/AdminHome";
// import AdminUpload from "../AdminDashboard/AdminUpload";
// import DashHeader from "../AdminDashboard/DashHeader";
import SideBar from "../AdminDashboard/SideBar";
import Contact from "../Contact/Contact";
import HomeScreen from "../Home/HomeSreen";
import Signin from "../UserAuth/Signin";
import Signup from "../UserAuth/Signup";
import AgentSignin from "../AgentAuth/Signin";
import AgentSignUp from "../AgentAuth/Signup";
import SignUpHome from "../UserAuth/SignUpHome";
import SignInHome from "../UserAuth/SignInHome";
import AdminSignin from "../AdminAuth/AdminLogin";
import Agents from "../AgentsComp/Agents";
import Propeties from "../Properties/Properties";

const AllRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "/agents",
      element: <Agents />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/properties",
      element: <Propeties />,
    },
    {
      path: "/getstarted",
      element: <SignUpHome />,
    },
    {
      path: "/login",
      element: <SignInHome />,
    },
    {
      path: "/user-signup",
      element: <Signup />,
    },
    {
      path: "/user-signin",
      element: <Signin />,
    },
    {
      path: "/agent-signup",
      element: <AgentSignUp />,
    },
    {
      path: "/agent-signin",
      element: <AgentSignin />,
    },
    {
      path: "/admin-login",
      element: <AdminSignin />,
    },
    {
      path: "/about-us",
      element: <About />,
    },
  ]);

  return element;
};

export default AllRoutes;

// const DashHead = styled.div``;

const DashRoute = styled.div`
  width: calc(100% - 275px);
  height: 100%;
`;

const Side = styled.div`
  width: 250px;
  height: 100vh;
  position: fixed;
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
