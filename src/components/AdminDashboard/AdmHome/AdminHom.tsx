import React from "react";
import styled from "styled-components";
// import DashHeader from "./DashHeader";
import { GoPerson } from "react-icons/go";
import { BsHousesFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { AiOutlineDollar } from "react-icons/ai";


const AdminHom = () => {

    return (

        <>

        <Body>

            <Contain>

                <Totals>

                    <div>Welcome SYLVIA,</div>

                    <Tots>
                        
                    <Total>

                <TotalName>  
                    <TotalNum>30</TotalNum>

                    <Icon>
                        <GoPerson />
                    </Icon>
                </TotalName>

                <TotalAgent>Total Agent</TotalAgent> 
                </Total>

                <Total>

                <TotalName>  
                    <TotalNum>500</TotalNum>

                    <Icon>
                        <BsHousesFill />
                    </Icon>
                </TotalName>

                <TotalAgent>Total Houses</TotalAgent> 
                </Total>

                <Total>

                <TotalName>  
                    <TotalNum>300</TotalNum>

                    <Icon>
                        <FiUsers />
                    </Icon>
                </TotalName>

                <TotalAgent>Total Users</TotalAgent> 
                </Total>

                <Total>

                <TotalName>  
                    <TotalNum>100</TotalNum>

                    <Icon>
                        <AiOutlineDollar />
                    </Icon>
                </TotalName>

                <TotalAgent>Total SoldOut</TotalAgent> 

                </Total>

                    </Tots>


                </Totals> 

            </Contain>

        </Body>

        </>
    )
}

export default AdminHom;

// const DashHead = styled.div``;

// const DashHead = styled.div``;

// const DashHead = styled.div``;

// const DashHead = styled.div``;

// const DashHead = styled.div``;

// const DashHead = styled.div``;

// const DashHead = styled.div``;

// const DashHead = styled.div``;

// const DashHead = styled.div``;

// const DashHead = styled.div``;

const Tots = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 15px;
`;

const TotalNum = styled.div`
font-size: 25px;
font-weight: 700;
// color: #e4e932;
color: white;
`;

const TotalName = styled.div`
display: flex;
width: 80%;
justify-content: space-between;
color: white;
align-items: center;
margin-left: 20px;
`;

const TotalAgent = styled.div`
font-size: 14px;
margin-left: 20px;
margin-top: 15px;
color: white;
`;

const Icon = styled.div`
font-size: 25px;
color: white;
`;

const Total = styled.div`
width: 23%;
height: 120px;
// background-color: #511378;
border-radius: 10px 0 10px 0;
box-shadow: 0 0 3px #039EE6;
display: flex;
flex-direction: column;
justify-content: center;
// // align-items: center;
// color: #e4e932;
`;

const Totals = styled.div`
width: 100%;
display: flex;
flex-direction: column;
// justify-content: space-between;
// align-items: center;
margin-top: 30px;

div{
    font-size: 25px;
    font-weight: 700;
    color: #039EE6;
}
`;

const Contain = styled.div`
width: 95%;
`;

const Body = styled.div`
// width: calc(100% - 285px);
width: 100%;
height: 100%;
display: flex;
justify-content: center;
margin-bottom: 15px;
// align-items: center;
`;


