import React from "react";
import styled from "styled-components";
import { FaTelegramPlane, FaLocationArrow } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <Body>
        <div
          style={{
            width: "100%",
            height: "120px",
            background: "transparent",
          }}></div>

        <Top>
          <Heading>About Us</Heading>
          <Bcrom>Home / About Us</Bcrom>
        </Top>

        <Cards>
          <Card>
            <Icon>
              <FaTelegramPlane />
            </Icon>

            <CardText>About</CardText>

            <CardText2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis rerum deserunt consequatur rem odit.
            </CardText2>
          </Card>

          <Card>
            <Icon>
              <AiOutlineMail />
            </Icon>

            <CardText>E-Mail</CardText>

            <CardText2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis rerum deserunt consequatur rem odit.
            </CardText2>
          </Card>

          <Card>
            <Icon>
              <FaLocationArrow />
            </Icon>

            <CardText>Address</CardText>

            <CardText2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis rerum deserunt consequatur rem odit.
            </CardText2>
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
  );
};

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
  background-color: #511378;
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
  border: 1px solid #511378;
`;

const Form = styled.form`
  width: 380px;
  margin-top: 50px;
`;

const CardText2 = styled.div`
  font-size: 13px;
  color: 511378;
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
  color: #511378;
`;

const Card = styled.div`
  box-shadow: 0 0 3px #511378;
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

const Heading = styled.h1`
  font-size: 50px;
`;

const Title = styled.p`
  font-weight: bold;
  color: silver;
  margin-bottom: 0px;
`;

const Top = styled.div`
  height: 150px;
  width: auto;
  background-color: #f4f6fd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
  margin-bottom: 100px;
`;
const Bcrom = styled.p``;

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
`;
