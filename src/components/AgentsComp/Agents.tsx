import React from "react";
import styled from "styled-components";
import { FaTelegramPlane, FaLocationArrow } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import agent from "../Assets/black_photographer.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Contact = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Body id="Hero">
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
        <CardHold {...settings}>
          <Card>
            <Img>
              <img src={agent} alt="" />
            </Img>
            <Profile>
              <ProfileWrap>
                <h3>Name</h3>
                <h5>Bio</h5>
                <Div>
                  <Email>
                    <span>
                      <FaLocationArrow />
                    </span>{" "}
                    email
                  </Email>
                  <Phonenumber>
                    <span>
                      <FaTelegramPlane />
                    </span>{" "}
                    08877e
                  </Phonenumber>
                </Div>
              </ProfileWrap>
            </Profile>
          </Card>
          <Card>
            <Img>
              <img src={agent} alt="" />
            </Img>
            <Profile>
              <ProfileWrap>
                <h3>Name</h3>
                <h5>Bio</h5>
                <Div>
                  <Email>
                    <span>
                      <FaLocationArrow />
                    </span>{" "}
                    email
                  </Email>
                  <Phonenumber>
                    <span>
                      <FaTelegramPlane />
                    </span>{" "}
                    08877e
                  </Phonenumber>
                </Div>
              </ProfileWrap>
            </Profile>
          </Card>
          <Card>
            <Img>
              <img src={agent} alt="" />
            </Img>
            <Profile>
              <ProfileWrap>
                <h3>Name</h3>
                <h5>Bio</h5>
                <Div>
                  <Email>
                    <span>
                      <FaLocationArrow />
                    </span>{" "}
                    email
                  </Email>
                  <Phonenumber>
                    <span>
                      <FaTelegramPlane />
                    </span>{" "}
                    08877e
                  </Phonenumber>
                </Div>
              </ProfileWrap>
            </Profile>
          </Card>
        </CardHold>
      </Body>
    </>
  );
};

export default Contact;

const CardHold = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Email = styled.div``;
const Phonenumber = styled.div``;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  span {
    margin-right: 10px;
  }
`;

const ProfileWrap = styled.div`
  width: 80%;
  height: 80%;
  background-color: white;
  h3 {
    margin: 0;
  }
  h5 {
    margin: 0;
  }
`;

const Profile = styled.div`
  width: 100%;
  height: 40%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.div`
  width: 100%;
  height: 60%;
  background-color: green;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Card = styled.div`
  width: 350px;
  height: 500px;
  background-color: red;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
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
