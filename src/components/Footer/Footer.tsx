import React from "react";
import styled from "styled-components";
import logo from "../Assets/trekka-removebg-preview.png";
import {
  BsFillTelephoneFill,
  BsArrowUpSquare,
  BsBoxArrowDown,
} from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { TfiLinkedin } from "react-icons/tfi";
import { TbBrandTwitter } from "react-icons/tb";
import { BiLocationPlus } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FirstDiv>
          <Logo src={logo} />
          <p>
            Mercy and Favour real estate <br />
            best real estate deals <br />
            get your dream house <br />
          </p>
          <p>Connect with us on all our social media</p>
          <Icons>
            <Circle>
              <TbBrandTwitter />
            </Circle>
            <Circle>
              <FiFacebook />
            </Circle>
            <Circle>
              <TfiLinkedin />
            </Circle>
            <Circle>
              <AiOutlineInstagram />
            </Circle>
          </Icons>
        </FirstDiv>
        <SecondDiv>
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
        </SecondDiv>
        <br />
        <br />
        <br />
      </Wrapper>
      <ArrowToTop to="Hero">
        <BsArrowUpSquare />
      </ArrowToTop>
    </Container>
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
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    cursor: pointer;
  }
`;

const Buyers = styled.div`
  margin-right: 70px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
`;

const ArrowToTop = styled(Link)`
  position: fixed;
  right: 30px;
  font-size: 35px;
  cursor: pointer;
  color: #005555;
  transition: all 350ms;
  :hover {
    margin-top: -5px;
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: #efefef;
  margin: 0;
  position: relative;
  color: #511378;
`;
const Wrapper = styled.div`
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  flex-wrap: wrap;
  font-size: 18px;
`;
const FirstDiv = styled.div`
  width: 300px;
  margin-top: 50px;
  margin-left: 90px;
  @media screen and (max-width: 425px) {
    margin-left: 30px;
  }

  p {
    font-size: 15px;
    color: gray;
    line-height: 23px;
  }
`;
const SecondDiv = styled.div`
  width: 65%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 1024px) {
    margin-left: 90px;
  }
  @media screen and (max-width: 425px) {
    margin-left: 30px;
    grid-template-columns: 1fr;
  }
`;
const Logo = styled.img`
  width: 50%;
  height: 50%;
  object-fit: contain;
`;
const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    margin-left: 80px;
  }
  @media screen and (max-width: 425px) {
    margin-left: 0px;
  }
  div {
    display: flex;
    margin-left: 15px;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    /* margin-left: 60px; */
  }
  div {
    display: flex;
    margin-left: 15px;
  }
`;
const Nav = styled(Link)`
  padding-bottom: 20px;
  font-size: 18px;
  color: rgb(129, 132, 141);
  transition: all 400ms;
  cursor: pointer;
  text-decoration: none;
  :hover {
    text-decoration: underline;
    margin-top: -1px;
  }
`;
const Nav1 = styled.div`
  padding-bottom: 20px;
  font-size: 18px;
  color: rgb(129, 132, 141);
  transition: all 400ms;
`;
const Icons = styled.div`
  display: flex;
  color: white;
`;
const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #074237;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 350ms;
  color: white;
  border: 3px solid #074237;
  margin: 10px;
  cursor: pointer;
  :hover {
    border: 2px solid #074237;
    border-color: #16335a;
    background-color: white;
    color: #074237;
    margin-top: -1px;
  }
`;
