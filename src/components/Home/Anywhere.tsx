import React from "react";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";


const Anywhere = () => {

    return (
        <>

            <Any>

                <Contain>

                    <Box>

                        <Buy>Rent Property from Anywhere</Buy>

                        <Icon>
                            <AiFillHome />
                        </Icon>

                        <Real>Real Estate means property and the fixed assets on it. Buying and selling of home, land, property</Real>

                    </Box>

                    <Box>

                        <Buy>Professional & Friendly Agents</Buy>

                        <Icon>
                            <AiFillHome />
                        </Icon>

                        <Real>Real Estate means property and the fixed assets on it. Buying and selling of home, land, property</Real>

                    </Box>

                    <Box>

                        <Buy>Buy and Sell Awesome Property</Buy>

                        <Icon>
                            <AiFillHome />
                        </Icon>

                        <Real>Real Estate means property and the fixed assets on it. Buying and selling of home, land, property</Real>

                    </Box>

                </Contain>

            </Any>


        </>
    )
}

export default Anywhere;

// const Any = styled.div``;

// const Any = styled.div``;

// const Any = styled.div``;

// const Any = styled.div``;

// const Any = styled.div``;

// const Any = styled.div``;

const Real = styled.div`
font-size: 15px;
`;

const Icon = styled.div`
margin-top: 15px;
margin-bottom: 15px;
font-size: 27px;
`;

const Buy = styled.div`
font-size: 27px;
font-weight: 600;
`;

const Box = styled.div`
width: 250px;
height: 250px;
padding: 15px 25px;
display: flex;
flex-direction: column;
justify-content: center;
// box-shadow: 0 0 3px #511378;
// box-shadow: 0 0 5px #00afff;
// background-color: #511378;
background-color: #52325d;
color: white;
`;

const Contain = styled.div`
width: 90%;
display: flex;
justify-content: center;
gap: 3rem;
flex-wrap: wrap;
// position: absolute;
// top: -70px;
z-index: 200;
// padding-bottom: 50px;
// background-color: white;
`;

const Any = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
position: relative;
padding-bottom: 50px;
padding-top: 50px;
`;

