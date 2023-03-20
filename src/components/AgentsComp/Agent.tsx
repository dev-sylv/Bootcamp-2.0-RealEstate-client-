import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Property = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <Properties>
            Popular Properties
            <Button to="/all-properties">View all Properties</Button>
          </Properties>
          <Slider {...settings}>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
          </Slider>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Property;

const Container = styled.div`
  width: 100%;
  padding: 40px 0px 40px 0px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Wrapper = styled.div`
  width: 95%;
  /* background-color: green; */
  display: block;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Properties = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0px 10px 0px;
  justify-content: space-between;
  color: #005555;
  font-size: 30px;
  font-weight: bold;
  /* background-color: blue; */
  flex-wrap: wrap;
`;
const Button = styled(Link)`
  text-decoration: none;
  width: 200px;
  height: 50px;
  border-radius: 30px;
  background-color: #005555;
  color: silver;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: lighter;
  transition: all 350ms;
  :hover {
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  }
  @media screen and (max-width: 425px) {
    margin-top: 15px;
  }
`;
