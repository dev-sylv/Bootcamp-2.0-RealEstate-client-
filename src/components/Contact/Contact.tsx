import React from "react";
import styled from 'styled-components';
import { FaTelegramPlane, FaLocationArrow } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


const Contact = () => {

    return (
        <>

            <Body>

                <div style={{width: "100%", height:"120px", background: "transparent"}}></div>

                <Contain>
                    <Text>Contact US</Text>
                </Contain>

                <Cards>

                    <Card>
                        <Icon>
                            <FaTelegramPlane />
                        </Icon>

                        <CardText>About</CardText>

                        <CardText2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum deserunt consequatur rem odit.</CardText2>

                    </Card>


                    <Card>
                        <Icon>
                            <AiOutlineMail />
                        </Icon>

                        <CardText>E-Mail</CardText>

                        <CardText2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum deserunt consequatur rem odit.</CardText2>

                    </Card>

                    <Card>
                        <Icon>
                            <FaLocationArrow />
                        </Icon>

                        <CardText>Address</CardText>

                        <CardText2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum deserunt consequatur rem odit.</CardText2>

                    </Card>

                </Cards>

                <ContactHold>

                    <ContactImg src="/images/contact.svg" />

                    <Form>
                    
                        <Inp placeholder="Name" />
                        <Inp placeholder="Email" />
                        <Inp placeholder="Phone" />
                        <Inp placeholder="Subject" />
                        <Inp2 placeholder="Message" />

                        <But>Send Now</But>

                        </Form>

                </ContactHold>

               

            </Body>

        </>
    )
}

export default Contact;

// const Body = styled.div``;

// const Body = styled.div``;

const ContactImg = styled.img`
width: 400px;
`;

const ContactHold = styled.div`
display: flex;
gap: 5rem;
`;

const Inp2 = styled.textarea`
width: 100%;
height: 120px;
outline: none;
border-radius: 7px;
padding-left: 10px;
margin-bottom: 20px;
`;

const But = styled.button`
width: 105%;
height: 40px;
border: none;
background-color: #039EE6;
color: white;
border-radius: 7px;
cursor: pointer;
`;

const Inp = styled.input`
width: 100%;
height: 40px;
outline: none;
border-radius: 7px;
padding-left: 10px;
margin-bottom: 20px;
border: 1px solid #039EE6;
`;

const Form = styled.form`
width: 380px;
margin-top: 50px;
// align-self: flex-start;
// margin-left: 60px;
`;

const CardText2 = styled.div`
font-size: 13px;
color: gray;
text-align: center;
`;

const CardText = styled.div`
font-size: 20px;
font-weight: 700;
margin-top: 10px;
margin-bottom: 10px;
`;

const Icon = styled.div`
font-size: 25px;
color: #039EE6;
`;

const Card = styled.div`
box-shadow: 0 0 3px #039EE6;
width: 240px;
height: 150px;
padding: 30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Cards = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
margin-top: 50px;
`;

const Text = styled.div`
font-size: 25px;
font-weight: 700;
color: white;
margin-left: 60px;
`;

const Contain = styled.div`
width: 100%;
height: 140px;
background-color: #039EE6;
display: flex;
align-items: center;
`;

const Body = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
// margin-top: 120px;
padding-bottom: 50px;
`;
