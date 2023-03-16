import React from "react";
import styled from "styled-components";


const Revenue = () => {

    return(
        <>

            <Body>

                <Contain>

                    <Rev>Total Revenue</Rev>

                    <Balance>37,000,000.00</Balance>

                </Contain>

            </Body>

        </>
    )
}

export default Revenue;

// const Contain = styled.div``;

// const Contain = styled.div``;

const Balance = styled.div`
color: white;
font-size: 40px;
margin-left: 20px;
font-weight: 700;
margin-top: 10px;
`;

const Rev = styled.div`
color: white;
font-size: 20px;
margin-left: 20px;
font-weight: 700;
color: #e4e932;
`;

const Contain = styled.div`
width: 95%;
height: 100%;
background-color: #511378;
border-radius: 10px 0 10px 0;
display: flex;
flex-direction: column;
justify-content: center;
`;

const Body = styled.div`
width: 100%;
height: 150px;
display: flex;
justify-content: center;
// align-items: center;
`;
