import React from "react";
import styled from "styled-components";
import DashHeader from "./DashHeader";
import { FaHome, FaCloudUploadAlt }  from "react-icons/fa";
import { MdPointOfSale,  } from "react-icons/md";
import { AiFillMessage, AiOutlineLogout } from "react-icons/ai";


const SideBar = () => {

    return (

        <>

        <Body>

            <Contain>

                <Top>

                    <Admin>ADMINISTRATOR</Admin>

                    <Home>
                        <Icon>
                            <FaHome />
                        </Icon>

                        <HomeText>Home</HomeText>
                    </Home>

                    <Home>
                        <Icon>
                            <MdPointOfSale />
                        </Icon>

                        <HomeText>House For Sale</HomeText>
                    </Home>

                    <Home>
                        <Icon>
                            <FaHome />
                        </Icon>

                        <HomeText>House For Rent</HomeText>
                    </Home>

                    <Home>
                        <Icon>
                            <FaCloudUploadAlt />
                        </Icon>

                        <HomeText>Upload House</HomeText>
                    </Home>

                    <Home>
                        <Icon>
                            <AiFillMessage />
                        </Icon>

                        <HomeText>Feedback</HomeText>
                    </Home>

                </Top>

                <Bottom>
                    <Home>
                        <Icon>
                            <AiOutlineLogout />
                        </Icon>

                        <HomeText>Logout</HomeText>
                    </Home>
                </Bottom>

            </Contain>

        </Body>

        </>
    )
}

export default SideBar;

// const DashHead = styled.div``;

// const DashHead = styled.div``;

// const DashHead = styled.div``;

const Bottom = styled.div``;

const HomeText = styled.div`
font-size: 16px;
// color: #e4e932;
font-weight: 700;
`;

const Icon = styled.div`
font-size: 17px;
margin-right: 10px;
// color: #e4e932;
`;

const Home = styled.div`
display: flex;
align-items: center;
margin-bottom: 30px;
cursor: pointer;
`;

const Admin = styled.div`
font-size: 20px;
font-weight: 700;
margin-bottom: 30px;
`;

const Top = styled.div`

`;

const Contain = styled.div`
width: 90%;
height: 90%;
color: white;
display: flex;
flex-direction: column;
justify-content: space-between;
// align-items: center;
margin-left: 30px;
`;

const Body = styled.div`
width: 250px;
height: calc(100vh - 65px);
display: flex;
justify: content;
align-items: center;
position: fixed;
background-color: #511378;
`;


