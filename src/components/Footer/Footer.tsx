import React from "react";
import styled from "styled-components";
import logo from "../Assets/trekka-removebg-preview.png";
import { BsArrowUpSquare, BsBoxArrowDown } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { TfiLinkedin } from "react-icons/tfi";
import { TbBrandTwitter } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FirstDiv>
          <Logo src={logo} />
          <p>
            Trekka real estate <br />
            Real best estate deals <br />
            Saves you from trekking to get your dream house <br />
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

            <NavLink style={{ textDecoration: "none" }} to="/">
              <Max>Home</Max>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/agents">
              <Max>Agents</Max>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/login">
              <Max>Buy a house</Max>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/properties">
              <Max>Rent a house</Max>
            </NavLink>
          </Buyers>

          <Buyers>
            <Icon>About</Icon>
            <NavLink style={{ textDecoration: "none" }} to="/about-us">
              <Max>About Us</Max>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/contact">
              <Max>Contact Us</Max>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/properties">
              <Max>Services</Max>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/getstarted">
              <Max>Rent</Max>
            </NavLink>
          </Buyers>

          <Buyers>
            <Icon>Legal</Icon>

            <Max to="/">Terms & Conditions</Max>
            <Max to="/">FAQs</Max>
            <Max to="/">C of O</Max>
            <Max to="/">Legal Experts</Max>
            <Max to="/"></Max>
          </Buyers>
        </SecondDiv>
      </Wrapper>
      <ArrowToTop to="Hero" smooth="true">
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
  color: #511378;
  cursor: pointer;
  text-decoration: none;
  :hover {
    color: #511378b0;
    text-decoration: wavy;
  }
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
  color: #511378;
  position: fixed;
  right: 60px;
  font-size: 40px;
  bottom: 25px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    transform: scale(1.1);
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: #efefef;
  margin: 0;
  position: relative;
  color: #511378;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 18px;
`;
const FirstDiv = styled.div`
  width: 300px;
  @media screen and (max-width: 425px) {
    margin-left: 30px;
  }

  p {
    font-size: 15px;

    line-height: 23px;
  }
`;
const SecondDiv = styled.div`
  width: 65%;
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
const Icons = styled.div`
  display: flex;
  color: white;
`;
const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #511378;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 350ms;
  color: white;
  border: 3px solid #511378;
  margin: 10px;
  cursor: pointer;
  :hover {
    border: 2px solid #511378;
    border-color: #16335a;
    background-color: white;
    color: #511378;
    margin-top: -1px;
  }
`;
