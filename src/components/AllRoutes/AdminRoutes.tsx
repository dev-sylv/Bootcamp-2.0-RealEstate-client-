import React from "react";
import { useRoutes } from "react-router";
import styled from "styled-components";
import Homee from "../AdminDashboard/AdminHome";
// import AdminHome from "../AdminDashboard/AdminHome";
import AdminUpload from "../AdminDashboard/AdminUpload";
import DashHeader from "../AdminDashboard/DashHeader";
import SideBar from "../AdminDashboard/SideBar";
import HouseRent from "../HouseRent/HouseRent";
// import HomeScreen from "../Home/HomeSreen";
import HouseSale from "../HouseSale/HouseSale";

const AdminRoutes = () => {
  const element = useRoutes([
    {
      path: "/admindashboard",
      element: <Homee />,
    },
    {
      path: "/adminupload",
      element: <AdminUpload />,
    },
    {
      path: "/houseforsale",
      element: <HouseSale />,
    },
    {
      path: "/houseforrent",
      element: <HouseRent />,
    },
  ]);

  return (
    <>
      <Body>
        <Head>
          <DashHeader />
        </Head>

        <Bottom>
          <Side>
            <SideBar />
          </Side>

          <DashRoute>{element}</DashRoute>
        </Bottom>
      </Body>
    </>
  );
};

export default AdminRoutes;

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
