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
            <Text>Our Agents</Text>
            <Subtext>
              {" "}
              <NavLink to="/">
                <span>Home</span>
              </NavLink>{" "}
              / Agents
            </Subtext>
          </Wrap>
        </Contain>
        <Card>
          <Img></Img>
          <Profile></Profile>
        </Card>
      </Body>
    </>
  );
};

export default Contact;

const Profile = styled.div``;
const Img = styled.div``;
const Card = styled.div`
  width: 350px;
  height: 600px;
  background-color: red;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
