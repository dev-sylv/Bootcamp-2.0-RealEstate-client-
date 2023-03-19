import React from "react";
import styled from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";
import { SlUserFollowing } from "react-icons/sl";
import { SlBadge } from "react-icons/sl";
import { BsHandbag } from "react-icons/bs";
import img1 from "../Assets/about-us.png";
import img2 from "../Assets/about-us1.png";
import img3 from "../Assets/broker.jpg";
import img4 from "../Assets/broker1.jpg";
import img5 from "../Assets/black_photographer.jpg";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <Container>
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
      <Overview>
        <Left>
          <Title>LITTLE ABOUT TREKA</Title>
          <SubHead>
            Company Overview <Line></Line>
          </SubHead>
          <Desc>
            <p>
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day.
            </p>
            <p>
              {" "}
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further.
            </p>
            <p>
              Duis aute irure dolor reprehenderit in voluptate velit essl cillum
              dolore eud fugiat nulla pariatur. Excepteur sint ocaec atus
              cupdatat proident suntin culpa qui officia deserunt mol anim.
            </p>
          </Desc>
          <Quality>
            <Li>
              <Icon>
                <FaLongArrowAltRight />
              </Icon>
              Insurgent Mindset
            </Li>
            <Li>
              <Icon>
                <FaLongArrowAltRight />
              </Icon>
              Enduring Results
            </Li>
            <Li>
              <Icon>
                <FaLongArrowAltRight />
              </Icon>
              Passionate People
            </Li>
          </Quality>
          <Button>About Our Team</Button>
        </Left>
        <Right>
          <ImageOne>
            <Image src={img1} />
          </ImageOne>
          <ImageTwo>
            {" "}
            <Image src={img2} />
          </ImageTwo>
        </Right>
      </Overview>
      <OurBest>
        <One>
          <SubHead className="sub2">
            Our Best Features<Line className="line2"></Line>
            <Desc className="desc">
              <p>
                Bring to the table win-win survival strategies to ensure
                proactive <br />
                domination. At the end of the day.
              </p>
            </Desc>
          </SubHead>
        </One>
        <TwoHolder>
          <Two>
            <Card>
              <SubTitle>Search Property from Anywhere </SubTitle>
              <BigIcon>
                <SlBadge />
              </BigIcon>
              <Desc>
                Real Estate means property and the fixed assets on it. Buying
                and selling of home, land, property.
              </Desc>
            </Card>
            <Card>
              <SubTitle>Professional & Friendly Agents</SubTitle>
              <BigIcon>
                <SlUserFollowing />
              </BigIcon>
              <Desc>
                Real Estate means property and the fixed assets on it. Buying
                and selling of home, land, property.
              </Desc>
            </Card>
            <Card>
              <SubTitle>Buy and Sell Awesome Property</SubTitle>
              <BigIcon>
                <BsHandbag />
              </BigIcon>
              <Desc>
                Real Estate means property and the fixed assets on it. Buying
                and selling of home, land, property.
              </Desc>
            </Card>
          </Two>
          <NumberGraph>
            <Data>
              <Number>15300+</Number>
              <Text>Happy Clients</Text>
            </Data>
            <Data>
              <Number>5100+</Number>
              <Text>Order on Queue</Text>
            </Data>
            <Data>
              <Number>20+</Number>
              <Text>Experience</Text>
            </Data>
            <Data>
              <Number>62+</Number>
              <Text>Awards Won</Text>
            </Data>
          </NumberGraph>
        </TwoHolder>
      </OurBest>
      <OurAgent>
        <SubHead className="sub2">
          Our Best Features<Line className="line2"></Line>
          <Desc className="desc">
            <p>
              Bring to the table win-win survival strategies to ensure proactive{" "}
              <br />
              domination. At the end of the day.
            </p>
          </Desc>
        </SubHead>
        <Ach>
          <Ac>
            <Aimgh>
              <Aimg src={img3} />
              <Shh>
                <Shd>
                  <GrFacebookOption />
                </Shd>
                <Shd>
                  <AiOutlineTwitter />
                </Shd>
                <Shd>
                  <FaLinkedinIn />
                </Shd>
              </Shh>
            </Aimgh>
            <Name>Tunde Olukoya</Name>
            <Role>Senior Broke</Role>
          </Ac>
          <Ac>
            <Aimgh>
              <Aimg src={img4} />
              <Shh>
                <Shd>
                  <GrFacebookOption />
                </Shd>
                <Shd>
                  <AiOutlineTwitter />
                </Shd>
                <Shd>
                  <FaLinkedinIn />
                </Shd>
              </Shh>
            </Aimgh>
            <Name>Ebenezer Okunte</Name>
            <Role>House Broker</Role>
          </Ac>
          <Ac>
            <Aimgh>
              <Aimg src={img5} />
              <Shh>
                <Shd>
                  <GrFacebookOption />
                </Shd>
                <Shd>
                  <AiOutlineTwitter />
                </Shd>
                <Shd>
                  <FaLinkedinIn />
                </Shd>
              </Shh>
            </Aimgh>
            <Name>Sylvia Adimike</Name>
            <Role>Photographer</Role>
          </Ac>
        </Ach>
      </OurAgent>
    </Container>
  );
};

export default About;

const Role = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 20px;
  width: auto;
  margin-top: 20px;
`;

const Shh = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;
  position: absolute;
  bottom: 0;
`;

const Shd = styled.div`
  background-color: #00afff;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Aimg = styled.img`
  height: 400px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const Aimgh = styled.div`
  height: 420px;
  width: 300px;
  overflow: hidden;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Ac = styled.div`
  height: auto;
  width: 300px;
  padding: 0px 10px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Ach = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 100px 20px;
  overflow-y: hidden;
`;

const OurAgent = styled.div`
  height: 900px;
  width: auto;
  padding: 50px 0px;

  .sub2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 50px;
  }

  .line2 {
    margin-top: 10px;
    width: 100px;
  }

  .desc {
    font-size: 16px;
    font-weight: 400;
    text-align: center;
  }
`;

const Text = styled.div`
  font-size: 25px;
  font-weight: 500;
`;

const Number = styled.div`
  color: #00afff;
  font-size: 50px;
  font-weight: bolder;
`;

const Data = styled.div`
  width: 200px;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const NumberGraph = styled.div`
  height: 200px;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid rgba(166, 165, 165, 0.3);
  background-color: white;
  margin-left: 10px;
`;

const BigIcon = styled.div`
  font-size: 70px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  color: #00afff;
  margin: 30px 0px;
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-right: 50px;
  width: auto;
`;

const Card = styled.div`
  height: 350px;
  width: 250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: white;
  margin: 10px;
  padding: 50px;
  box-shadow: 1px 1px 10px 1px rgba(159, 159, 159, 0.2);
`;

const TwoHolder = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  background-color: transparent;
  bottom: 0;
  left: 0;
  margin-bottom: 50px;
`;

const Two = styled.div`
  height: 600px;
  width: 90%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const One = styled.div`
  height: auto;
  width: auto;
  background-color: #f4f6fd;
  padding: 50px 20px;
  padding-bottom: 200px;

  .sub2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .line2 {
    margin-top: 10px;
    width: 100px;
  }

  .desc {
    font-size: 16px;
    font-weight: 400;
    text-align: center;
  }
`;

const OurBest = styled.div`
  height: 1200px;
  width: auto;
  background-color: white;
  position: relative;
  margin-bottom: 200px;

  display: flex;
  flex-direction: column;
`;

const Image = styled.img``;

const ImageTwo = styled.div`
  height: 500px;
  width: 300px;
  overflow: hidden;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

const ImageOne = styled.div`
  height: 500px;
  width: 300px;
  overflow: hidden;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  position: absolute;
  top: 0;
  left: 0;
`;

const Right = styled.div`
  height: 550px;
  width: 700px;
  display: flex;
  justify-content: end;
  align-items: flex-end;

  position: relative;
`;

const Button = styled.button`
  height: 50px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background-color: #00afff;
  color: white;
  transition: all 390ms;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 600;

  :hover {
    background-color: black;
  }
`;

const Li = styled.div`
  display: flex;
  align-items: center;
  height: 0px;
  width: auto;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 40px;
`;

const Icon = styled.div`
  font-size: 25px;
  color: #00afff;
  margin-right: 20px;
  margin-top: 5px;
`;

const Quality = styled.div`
  height: auto;
  width: auto;
  margin-top: 50px;
`;

const Line = styled.div`
  height: 3px;
  width: 50px;
  background-color: #00afff;
  border-radius: 20px;
  border: none;
  margin-top: 30px;
`;

const Desc = styled.div``;

const Left = styled.div`
  height: auto;
  width: auto;
  padding-right: 50px;
`;

const SubHead = styled.h1`
  font-size: 50px;
  font-weight: 500;
`;

const Overview = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 100px 50px;
`;

const Bcrom = styled.p``;

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

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;

  button {
    cursor: pointer;
  }
`;
