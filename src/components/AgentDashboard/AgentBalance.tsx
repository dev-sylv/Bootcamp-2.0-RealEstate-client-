import React from "react";
import styled from "styled-components";
import { FiStar } from "react-icons/fi"


const AgentBalance = () => {

    return(
        <>

            <Body>

                <Contain>

                    <Money>
                        <Rev>Agent Balance</Rev>

                        <Balance>307,000.00</Balance>
                    </Money>

                    <Money>
                        <Rev>Agent ID</Rev>

                        <Balance>34546BC</Balance>
                    </Money>

                    <Money>
                        <Rev>Agent Rating</Rev>

                        <Balance>
                            <FiStar />
                            <FiStar />
                            <FiStar />
                            <FiStar />
                        </Balance>
                    </Money>

                </Contain>

            </Body>

        </>
    )
}

export default AgentBalance;

// const Contain = styled.div``;

// const Contain = styled.div``;

const Balance = styled.div`
font-size: 30px;
font-weight: 700;
margin-top: 5px;
color: white
`;

const Rev = styled.div`
font-size: 16px;
font-weight: 700;
color: #e4e932;
`;

const Money = styled.div`
margin-right: 20px;
margin-left: 20px;
`;

const Contain = styled.div`
width: 95%;
height: 100%;
background-color: #511378;
border-radius: 10px 0 10px 0;
display: flex;
// flex-direction: column;
justify-content: space-between;
align-items: center;
padding-top: 40px;
padding-bottom: 40px
`;

const Body = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
