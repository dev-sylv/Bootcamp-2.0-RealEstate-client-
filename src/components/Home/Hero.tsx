import React from "react";
import styled from "styled-components";


const Hero = () => {

    return(
        <>

            <Body>

                <Contain>

                    <Left>

                        <Buy>Buy, Sell and Rent Properties</Buy>

                        <Need>Need a perfect place to live right now? Here's the best offer for you! Amazing house with the most comfort layout is fully equipped with everything needed.</Need>

                        <Start>Get Started</Start>

                    </Left>

                    <Right>

                        <Hold1>
                            <Image style={{width: "150%", height:"165%", transform:"rotate(315deg)", position:"absolute", top:"-40px", left:"-170px"}} src="/images/featureds.jpg" /> 
                        </Hold1>

                        <Hold2>
                            <Image style={{width: "150%", height:"165%", transform:"rotate(315deg)", position:"absolute", top:"-60px", left:"-50px"}} src="/images/slide1.jpg"/> 
                        </Hold2>

                        <Hold3>
                            <Image style={{width: "150%", height:"165%", transform:"rotate(315deg)", position:"absolute", top:"-40px", left:"-60px"}} src="/images/jacksonville.jpg"/> 
                        </Hold3>

                        <Hold4>
                            <Image style={{width: "150%", height:"165%", transform:"rotate(315deg)", position:"absolute", top:"15px", left:"-140px"}} src="/images/dallas-1.jpg" /> 
                        </Hold4>

                        {/* <Hold5>
                            <Image style={{}} src="/images/dallas-1.jpg" /> 
                        </Hold5> */}

                    </Right>

                </Contain>

                <Black></Black>

            </Body>

        </>
    )
}

export default Hero;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

const Black = styled.div`
display: none;

@media screen and (max-width: 768px) {
     display: flex;
     position: absolute;
     width: 100%;
     height:100%;
     background-color: black;
     opacity: 0.6;
}
`;

const Image = styled.img``;

const Hold5 = styled.div`
// display: none;

// @media screen and (max-width: 768px) {
//     display: flex;
//     width: 300px;
//     height: 300px;
//     border-radius: 30px;
//     // transform: rotate(45deg);
//     background-color: #F6F9FF;
//     border: none;
//     overflow: hidden;
// }

@media screen and (max-width: 768px) {
  display: none;
}
`;

const Hold4 = styled.div`
width: 250px;
height: 250px;
border-radius: 30px;
transform: rotate(45deg);
background-color: #D4EAFF;
position: absolute;
right: -210px;
top: 30px;
border: none;
overflow: hidden;
z-index: 100;

@media screen and (max-width: 768px) {
  display: none;
}
`;

const Hold3 = styled.div`
width: 200px;
height: 200px;
border-radius: 30px;
transform: rotate(45deg);
background-color: #D4EAFF;
position: absolute;
left: 25px;
bottom: 100px;
border: none;
overflow: hidden;
z-index: 100;

@media screen and (max-width: 768px) {
  display: none;
}
`;

const Hold2 = styled.div`
width: 300px;
height: 300px;
border-radius: 35px;
transform: rotate(45deg);
background-color: #D4EAFF;
position: absolute;
right: 190px;
top: 50px;
border: none;
overflow: hidden;
z-index: 100;

@media screen and (max-width: 768px) {
  display: none;
}
`;

const Hold1 = styled.div`
width: 400px;
height: 400px;
border-radius: 50px;
transform: rotate(45deg);
background-color: #D4EAFF;
position: absolute;
right: -120px;
bottom: -50px;
border: none;
// background-image: url("/images/slide1.jpg");
// background-position: contain;
overflow: hidden;
z-index: 100;

@media screen and (max-width: 768px) {
  display: none;
}
`;

const Right = styled.div`
width: 50%;
height: 100%;
position: relative;

@media screen and (max-width: 768px) {
    margin-top: 80px;
}
`;

const Start = styled.button`
outline: 0;
grid-gap: 8px;
align-items: center;
// background: 0 0;
border: 1px solid #511378;
border-radius: 30px;
cursor: pointer;
display: inline-flex;
flex-shrink: 0;
font-size: 16px;
gap: 8px;
justify-content: center;
line-height: 1.5;
overflow: hidden;
// padding: 12px 16px;
width: 200px;
height: 50px;
text-decoration: none;
text-overflow: ellipsis;
transition: all .20s ease-out;
white-space: nowrap;
color: #511378;
// background-color: #004DFF;
background-color: #ffffff;
font-weight: 600;

:hover {
    box-shadow: 4px 4px 0 #511378;
    transform: translate(-4px,-4px);
}
:focus-visible{
    outline-offset: 1px;
}

@media screen and (max-width: 768px) {
    width: 170px;
    height: 45px;
    font-size: 14px;
}

@media screen and (max-width: 375px) {
    width: 140px;
    height: 40px;
    font-size: 13px;
}
`;

const Need = styled.div`
color: #511378;
// color: #494949;
font-size: 16px;
font-weight: 600;
margin-top: 35px;
margin-bottom:35px;
width: 90%;

@media screen and (max-width: 768px) {
  font-size: 15px;
  width: 70%;
  text-align: center;
  margin-top: 25px;
  margin-bottom:25px;
  color: white;
}

@media screen and (max-width: 425px) {
  font-size: 13px;
}

@media screen and (max-width: 375px) {
  font-size: 11px;
  width: 75%;
}
`;

const Buy = styled.div`
width: 100%;
color: #511378;
// color: #00afff;
font-size: 65px;
font-weight: 600;

@media screen and (max-width: 768px) {
  font-size: 45px;
  width: 80%;
  text-align: center;
  color: white;
}

@media screen and (max-width: 425px) {
  font-size: 35px;
}

@media screen and (max-width: 375px) {
  font-size: 25px;
}
`;

const Left = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
z-index: 100;

@media screen and (max-width: 768px) {
  width: 100%;
  align-items: center;
  color: white;
}
`;

const Contain = styled.div`
width: 90%;
height: 100%;
display: flex;
// flex-direction: column;
justify-content: space-between;
align-items: center;

@media screen and (max-width: 768px) {
  flex-wrap: wrap;
  flex-direction: column;
    margin-top: 130px;
    justify-content: center;
    align-items: center;
}
`;

const Body = styled.div`
width: 100%;
height: 100vh;
// padding-top: 80px;
// padding-bottom: 50px;
display: flex;
justify-content: center;
align-itemjs: center;
position: relative;
overflow: hidden;

@media screen and (max-width: 768px) {
  height: 100%;
  background-image: url("/images/9.jpg");
  background-position: contain;
}
`;
