import React from "react";
import styled from "styled-components";
import { BiBadgeCheck } from "react-icons/bi";
import { GiCheckMark } from "react-icons/gi";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineFacebook,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <Choice>
        <Contain>
          <Buyers>
            <Icon>Customers</Icon>

            <Max>Home</Max>
            <Max>Agents</Max>
            <Max>Buy</Max>
            <Max>Rent</Max>
          </Buyers>

          <Buyers>
            <Icon>About</Icon>

            <Max>About Us</Max>
            <Max>Contact Us</Max>
            <Max>Services</Max>
            <Max>Promotion</Max>
          </Buyers>

          <Buyers>
            <Icon>Legal</Icon>

            <Max>Terms & Conditions</Max>
            <Max>FAQs</Max>
            <Max>C of O</Max>
            <Max>Legal Experts</Max>
            <Max></Max>
          </Buyers>

          <Buyers>
            <Icon>Socials</Icon>

            <Max style={{ display: "flex", fontSize: "25px", gap: "0.5rem" }}>
              <AiOutlineFacebook />
              <AiFillTwitterCircle />
              <AiFillInstagram />
              <AiFillLinkedin />
            </Max>
          </Buyers>
        </Contain>
      </Choice>
    </>
  );
};

export default Footer;

const Max = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-top: 10px;
  color: #52325d;
  cursor: pointer;
`;

const Icon = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: #511378;
  margin-bottom: 15px;
`;

const Buyers = styled.div`
  margin-right: 70px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
`;

const Left = styled.div``;

const Contain = styled.div`
  width: 90%;
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  // justify-content: center;
  // align-items: center;
`;

const Choice = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  overflow: hidden;
`;
