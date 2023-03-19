import React from "react";
import { useRoutes } from "react-router";
import styled from "styled-components";
import AdminHome from "../AdminDashboard/AdminHome";
import AdminUpload from "../AdminDashboard/AdminUpload";
import DashHeader from "../AdminDashboard/DashHeader";
import SideBar from "../AdminDashboard/SideBar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomeScreen from "../Home/HomeSreen";
import About from "../AboutUs/AboutUs";
import Propeties from "../Properties/Propeties";

const AllRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/properties",
      element: <Propeties />,
    },
  ]);

  return (
    <div>
      <Header />
      <Container>
        {element}
        <Footer />
      </Container>
    </div>
  );
};

export default AllRoutes;

// const DashHead = styled.div``;

const Container = styled.div`
  padding-top: 100px;
`;

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
