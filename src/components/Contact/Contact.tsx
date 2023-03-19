import React from "react";
import styled from "styled-components";
import { FaTelegramPlane, FaLocationArrow } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { NavLink } from "react-router-dom";

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

        <Contain>
          <Wrap>
            <Text>Contact Us</Text>
            <Subtext>
              {" "}
              <NavLink to="/">
                <span>Home</span>
              </NavLink>{" "}
              / Contact Us
            </Subtext>
          </Wrap>
        </Contain>

        <Cards>
          <Card>
            <Icon>
              <FaTelegramPlane />
            </Icon>

            <CardText>About</CardText>

            <CardText2>
              LInsurgent Mindset <br /> Enduring Results <br /> Passionate
              People
            </CardText2>
          </Card>

          <Card>
            <Icon>
              <AiOutlineMail />
            </Icon>

            <CardText>E-Mail</CardText>

            <CardText2>
              +234 90611 80473 <br /> Best support via email <br />
              bootcamprealestate4codelab@gmail.com
            </CardText2>
          </Card>

          <Card>
            <Icon>
              <FaLocationArrow />
            </Icon>

            <CardText>Address</CardText>

            <CardText2>
              31 Haruna Estate, Off Oregie Road, Ajegunle, Lagos, Nigeria.
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

const Text = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: white;
`;
const Subtext = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: white;
  span {
    text-decoration: none;
    color: white;
  }
`;
const Wrap = styled.div`
  width: 90%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Contain = styled.div`
  width: 100%;
  height: 140px;
  background-color: #511378;
  display: flex;
  justify-content: center;
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
