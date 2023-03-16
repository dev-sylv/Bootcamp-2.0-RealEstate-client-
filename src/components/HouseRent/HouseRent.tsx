import React from "react";
import styled from "styled-components";
import { GrView } from "react-icons/gr";


const HouseRent = () => {

    return (
        <>

        <Body>

            <Contain>

                    <Austin>
                        <AustinImg src="/images/room3.jpg" />
                            <AustinText>
                                <Text1 style={{background:"#e4e932", color:" #314963"}}>Featured</Text1>
                                <Text1>Ikorodu</Text1>
                        </AustinText>

                        <Text>Apartment in Memorial Texas</Text>
                        <Text3>N2.5m</Text3>

                        <Down>
                            <Sale>For Sale</Sale>
                            <GrView />
                        </Down>
                    </Austin>

                    <Austin>
                        <AustinImg src="/images/room4.jpg" />
                            <AustinText>
                                <Text1 style={{background:"#e4e932", color:" #314963"}}>Featured</Text1>
                                <Text1>Ikoyi</Text1>
                        </AustinText>

                        <Text>Apartment in Memorial Texas</Text>
                        <Text3>N2.5m</Text3>

                        <Down>
                            <Sale>For Sale</Sale>
                            <GrView />
                        </Down>
                    </Austin>

                    <Austin>
                        <AustinImg src="/images/room1.jpg" />
                            <AustinText>
                                <Text1 style={{background:"#e4e932", color:" #314963"}}>Featured</Text1>
                                <Text1>Ajah</Text1>
                        </AustinText>

                        <Text>Apartment in Memorial Texas</Text>
                        <Text3>N2.5m</Text3>

                        <Down>
                            <Sale>For Sale</Sale>
                            <GrView />
                        </Down>
                    </Austin>

                        

            </Contain>

        </Body>

        </>
    )
}

export default HouseRent;

// const Contain = styled.div``;

// const Contain = styled.div``;

const Sale = styled.div`
font-size: 13px;
color: #314963;
font-weight: 700;
margin-right: 10px;
`;

const Down = styled.div`
display: flex;
align-items: center;
margin-left: 15px;
width: 82%;
justify-content: space-between;
`;

const Text3 = styled.div`
font-size: 18px;
color: #314963;
font-weight: 700;
margin-left: 15px;
`;

const Text = styled.div`
font-size: 14px;
color: #314963;
font-weight: 700;
margin-left: 15px;
margin-top: 10px;
`;

const Text1 = styled.div`
color: white;
font-weight: 700;
font-size: 12px;
padding: 5px 7px;
background-color: #314963;
color: white;
border-radius: 3px;
`;

const AustinText = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 90%;
position: absolute;
top: 20px;
left: 12px;
right: 10px;
`;

const AustinImg = styled.img`
width: 100%;
height: 70%;
`;

const Austin = styled.div`
width: 240px;
height: 300px;
border-radius: 5px;
position: relative;
overflow: hidden;
margin-bottom: 30px;
box-shadow: 0 0 3px  #511378;
cursor: pointer;

@media screen and (max-width: 544px) {
    margin:0;
}
`;

const Contain = styled.div`
width: 95%;
height: 100%;
// background-color: #511378;
border-radius: 10px 0 10px 0;
display: flex;
gap: 2rem;
flex-wrap: wrap;
// flex-direction: column;
// justify-content: center;
margin-top: 50px;
`;

const Body = styled.div`
width: 100%;
display: flex;
justify-content: center;
// align-items: center;
`;

