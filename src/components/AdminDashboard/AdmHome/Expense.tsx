import React from "react";
import styled from "styled-components";
import { SiExpensify } from "react-icons/si";
import { FcSalesPerformance } from "react-icons/fc";
import { AiOutlineDollar } from "react-icons/ai";
import { GrDocumentPerformance } from "react-icons/gr";


const Expense = () => {

    return(
        <>

            <Body>

                <Contain>

                    <Total>

                        <Exp>Expenses</Exp>

                        <TotalName>

                            <Tot>
                            <TotalNum>N1,000,000.00</TotalNum>
                            <TotalAgent>Since Last Month</TotalAgent>
                            </Tot>

                            <Icon>
                                <SiExpensify />
                            </Icon>
                        </TotalName>

                    </Total>

                    <Total>

                        <Exp>Sales</Exp>

                        <TotalName>

                            <Tot>
                            <TotalNum>N26,000,000.00</TotalNum>
                            <TotalAgent>Since Last Month</TotalAgent>
                            </Tot>

                            <Icon>
                                <GrDocumentPerformance />
                            </Icon>
                        </TotalName>

                    </Total>

                    <Total>

                        <Exp>Rent</Exp>

                        <TotalName>

                            <Tot>
                            <TotalNum>N10,000,000.00</TotalNum>
                            <TotalAgent>Since Last Month</TotalAgent>
                            </Tot>

                            <Icon>
                                <AiOutlineDollar />
                            </Icon>
                        </TotalName>

                    </Total>

                </Contain>

            </Body>

        </>
    )
}

export default Expense;

// const Contain = styled.div``;

// const Contain = styled.div``;

// const Contain = styled.div``;

const Icon = styled.div`
font-size: 35px;
// color: #e4e932;
color: #511378;
`;

const TotalAgent = styled.div`
font-size: 13px;
// color: #e4e932;
color: #2c9f45;
margin-top: px;
`;

const TotalNum = styled.div`
font-size: 25px;
font-weight: 700;
// color: white;
color: #511378;
`;

const Tot = styled.div``;

const TotalName = styled.div`
display: flex;
width: 85%;
justify-content: space-between;
margin-left: 20px;
`;

const Exp = styled.div`
font-size: 16px;
font-weight: 700;
// color: white;
color: #511378;
margin-bottom: 20px;
margin-left: 20px;
`;

const Total = styled.div`
width: 32%;
height: 150px;
// background-color: #511378;
box-shadow: 0 0 3px #511378;
border-radius: 10px 0 10px 0;
display: flex;
flex-direction: column;
justify-content: center;
`;

const Contain = styled.div`
width: 95%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Body = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-top: 15px;
// align-items: center;
`;
