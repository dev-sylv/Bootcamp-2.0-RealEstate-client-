import React from "react";
import styled from "styled-components";


const DashHeader = () => {

    return (

        <>

            <DashHead>

                <Contain>

                    <Logo>LOGO</Logo>

                    <User>
                        <UserImg src="/images/woman.png" />

                        <UserName>Sylvia Adimike</UserName>
                    </User>

                </Contain>

            </DashHead>

        </>
    )
}

export default DashHeader;

// const DashHead = styled.div``;

// const DashHead = styled.div``;

// const DashHead = styled.div``;

// const DashHead = styled.div``;

const UserName = styled.h5`
font-size: 16px;
font-weight: 700;
margin-left: 15px;
`;

const UserImg = styled.img`
width: 30px;
height: 30px;
border-radius: 50%;
border: 2px solid white;
`;

const User = styled.div`
display: flex;
align-items: center;
`;

const Logo = styled.div`
font-size: 27px;
font-weight: 700;
`;

const Contain = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
color: white;
`;

const DashHead = styled.div`
width: 100%;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
background-color: #039EE6;
position: fixed;
z-index: 500;
`;

