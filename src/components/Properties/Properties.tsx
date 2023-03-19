import React from "react";
import styled from "styled-components";
import img1 from "../Assets/img_4.jpg";
import img2 from "../Assets/img_4.jpg";
import img3 from "../Assets/img_4.jpg";
import { ImLocation2 } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlinePrinter } from "react-icons/ai";
import { BsFolder2 } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const Propeties: React.FC = () => {
  return (
    <Container>
      <Hero>
        <ImageHold>
          <Image src={img2} />
        </ImageHold>
        <HeroDetail>
          <First>
            <Title>Hydepark House Sale</Title>
            <Address>
              {" "}
              <Loc>
                <ImLocation2 />
              </Loc>{" "}
              Hyde Park, Chicago
            </Address>
            <OwnerHold>
              <Owner>
                <OwnerImage src={img1} />
                Jonny
              </Owner>
              <SocialHandle>
                <Icon>
                  <FaFacebookF />
                </Icon>
                <Icon>
                  <FaLinkedinIn />
                </Icon>
                <Icon>
                  <BsTwitter />
                </Icon>
                <Icon>
                  <BsPinterest />
                </Icon>
              </SocialHandle>
            </OwnerHold>
          </First>
          <Second>
            <ActionHold>
              <View>
                <FaRegEye />

                <Number>3288</Number>
              </View>
              <Like>
                <AiFillHeart />
              </Like>
              <Print>
                <AiOutlinePrinter />
              </Print>
              <Price>
                <Number className="number2">$ 505,000</Number>
                <Size>1000 / per Sqft</Size>
              </Price>
            </ActionHold>

            <Notice>
              <Loc>
                <BsFolder2 />
              </Loc>
              House in Sale
            </Notice>
          </Second>
        </HeroDetail>
        <MainContent>
          <PropertyMain>
            <PropertyImageHold>
              <PropertyImage src={img3} />
            </PropertyImageHold>
            <PropertyDescription>
              <Title className="PropertyDescription">
                Property Description
              </Title>
              <Desc>
                <p>
                  Ut euismod ultricies sollicitudin. Curabitur sed dapibus
                  nulla. Nulla eget iaculis lectus. Mauris ac maximus neque. Nam
                  in mauris quis libero sodales eleifend. Morbi varius, nulla
                  sit amet rutrum elementum, est elit finibus tellus, ut
                  tristique elit risus at metus. Sed fermentum, lorem vitae
                  efficitur imperdiet, neque velit tristique turpis, et iaculis
                  mi tortor finibus turpis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                  Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                  suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.
                  Curabitur convallis fringilla diam sed aliquam. Sed tempor
                  iaculis massa faucibus feugiat. In fermentum facilisis massa,
                  a consequat purus viverra a. Aliquam pellentesque nibh et nibh
                  feugiat gravida. Maecenas ultricies, diam vitae semper
                  placerat, velit risus accumsan nisl, eget tempor lacus est vel
                  nunc. Proin accumsan elit sed neque euismod fringilla.
                  Curabitur lobortis nunc velit, et fermentum urna dapibus non.
                  Vivamus magna lorem, elementum id gravida ac, laoreet
                  tristique augue. Maecenas dictum lacus eu nunc porttitor, ut
                  hendrerit arcu efficitur.
                </p>
              </Desc>
              <DownloadButton>
                House_Documents-1.pft
                <Loc className="download">
                  <FaDownload />
                </Loc>
              </DownloadButton>
            </PropertyDescription>
            <AddressHold>
              <Heading>
                <Title className="address">Address</Title>
                <GoogleMap>Open via Google Maps</GoogleMap>
              </Heading>
              <Content>
                <DataHold>
                  <Light>Address:</Light>
                  <Dark>5456 S Cornell Ave , Hyde Park</Dark>
                </DataHold>
                <DataHold>
                  <Light>Address:</Light>
                  <Dark>5456 S Cornell Ave </Dark>
                </DataHold>
                <DataHold>
                  <Light>Address:</Light>
                  <Dark>5456 S Cornell Ave</Dark>
                </DataHold>
                <DataHold>
                  <Light>Address:</Light>
                  <Dark>5456 S Cornell Ave </Dark>
                </DataHold>
                <DataHold>
                  <Light>Address:</Light>
                  <Dark>5456 S Cornell Av</Dark>
                </DataHold>
                <DataHold>
                  <Light>Address:</Light>
                  <Dark>5456 S Cornell Ave </Dark>
                </DataHold>
                <DataHold>
                  <Light>Address:</Light>
                  <Dark>5456 S Cornell Ave </Dark>
                </DataHold>
                <DataHold>
                  <Light>Address:</Light>
                  <Dark>5456 S Cornell Ave </Dark>
                </DataHold>
              </Content>
            </AddressHold>

            {/* Property details */}
            <Details>
              <Heading>
                <Title className="detail">Details</Title>
              </Heading>
              <Content>
                <DataHold>
                  <Light>Property ID:</Light>
                  <Dark>ZOAC904234234</Dark>
                </DataHold>
                <DataHold>
                  <Light>Property ID:</Light>
                  <Dark>ZOAC904234234</Dark>
                </DataHold>
                <DataHold>
                  <Light>Property ID:</Light>
                  <Dark>ZOAC904234234</Dark>
                </DataHold>
                <DataHold>
                  <Light>Property ID:</Light>
                  <Dark>ZOAC904234234</Dark>
                </DataHold>
                <DataHold>
                  <Light>Property ID:</Light>
                  <Dark>ZOAC904234234</Dark>
                </DataHold>
                <DataHold>
                  <Light>Property ID:</Light>
                  <Dark>ZOAC904234234</Dark>
                </DataHold>
              </Content>
            </Details>

            {/* Property Feactures */}
            <Feature>
              <Heading>
                <Title className="features">Property Feature</Title>
              </Heading>
              <Content className="featureContent">
                <List>
                  <Icon className="pfeatures">
                    <TiTick />
                  </Icon>
                  Gym
                </List>
                <List>
                  <Icon className="pfeatures">
                    <TiTick />
                  </Icon>
                  Balcony
                </List>
                <List>
                  <Icon className="pfeatures">
                    <TiTick />
                  </Icon>
                  Garden
                </List>
                <List>
                  <Icon className="pfeatures">
                    <TiTick />
                  </Icon>
                  Parking
                </List>
                <List>
                  <Icon className="pfeatures">
                    <TiTick />
                  </Icon>
                  Laundry
                </List>
                <List>
                  <Icon className="pfeatures">
                    <TiTick />
                  </Icon>
                  Bedding
                </List>
                <List>
                  <Icon className="pfeatures">
                    <TiTick />
                  </Icon>
                  Garage
                </List>
                <List>
                  <Icon className="pfeatures">
                    <TiTick />
                  </Icon>
                  Heating
                </List>
                <List>
                  <Icon className="pfeatures">
                    <TiTick />
                  </Icon>
                  Internet
                </List>
                <List>
                  <Icon className="pfeatures">
                    <TiTick />
                  </Icon>
                  Tennis Courts
                </List>
              </Content>
            </Feature>
            {/* <Pro360ImageHold>
              <Pro360Text>360</Pro360Text>
              <Property360>
                <Pro360Image />
              </Property360>
            </Pro360ImageHold> */}
          </PropertyMain>
        </MainContent>
      </Hero>
    </Container>
  );
};

export default Propeties;

const Pro360Text = styled.div`
  height: 350px;
  width: 400px;
  background-color: blue;
`;

const Pro360Image = styled.div``;

const Property360 = styled.div``;

const Pro360ImageHold = styled.div`
  height: 500px;
  width: auto;
  background-color: blue;
  margin-top: 40px;
`;

const DataHold = styled.div`
  width: 200px;
`;

const List = styled.div`
  height: auto;
  width: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  margin-bottom: 30px;
  font-size: 19px;

  .pfeatures {
    font-size: 24px;
    color: lightgreen;
  }
`;

const Feature = styled.div`
  width: auto;
  height: auto;
  background-color: white;
  margin-top: 40px;
  padding-top: 50px;
  padding-bottom: 40px;

  .featureContent {
    height: auto;
    width: auto;
    display: flex;
    flex-wrap: wrap;
  }
`;

const Details = styled.div`
  height: auto;
  width: 100%;
  background-color: white;
  margin-top: 40px;
  padding: 50px 0px;
`;

const Right = styled.div`
  height: auto;
  width: 350p;
  padding: 0%;
`;

const Dark = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Light = styled.div`
  font-size: medium;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Left = styled.div`
  height: 350px;
  width: auto;
`;

const Content = styled.div`
  height: auto;
  width: auto;
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;
  text-align: start;
  flex-wrap: wrap;
`;

const GoogleMap = styled.button`
  width: 250px;
  padding: 15px 5px;
  border: none;
  font-weight: 600;
  background-color: #00afff;
  color: white;
  border-radius: 7px;
`;

const Heading = styled.div`
  height: 100px;
  width: auto;
  text-align: start;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;

  .address {
    font-size: 20px;
    font-weight: bold;
  }

  .detail {
    font-size: 20px;
    font-weight: bold;
  }

  .features {
    font-size: 20px;
    font-weight: bold;
  }
`;

const AddressHold = styled.div`
  height: auto;
  width: auto;
  background-color: white;
  margin-top: 40px;
  padding: 50px 0px;
`;

const DownloadButton = styled.button`
  width: auto;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  margin-top: 20px;

  display: flex;
  align-items: center;

  .download {
    margin-left: 10px;
    color: black;
  }
`;

const Desc = styled.div`
  height: auto;
  width: auto;
`;

const PropertyDescription = styled.div`
  height: auto;
  width: auto;
  padding: 40px;
  overflow: hidden;
  background-color: white;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  text-align: start;

  .PropertyDescription {
    font-weight: bold;
  }
`;

const PropertyImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const PropertyImageHold = styled.div`
  height: 350px;
  width: auto;
  padding: 40px;
  overflow: hidden;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PropertySearch = styled.div`
  height: 100vh;
  width: 300px;
  background-color: white;
`;

const PropertyMain = styled.div`
  height: auto;
  width: 700px;
  margin-right: 10px;
`;

const MainContent = styled.div`
  height: auto;
  width: auto;
  padding: 50px;
  display: flex;
  background-color: #f4f6fd;
`;

const Size = styled.div`
  color: silver;
  font: 19px;
`;

const Number = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-left: 10px;
`;

const Notice = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  text-align: end;
  height: auto;
  width: auto;
  padding: 10px 15px;
  font-weight: bold;
`;

const Price = styled.div`
  padding: 10px 15px;
  color: #00afff;
  font-size: 24px;
  align-items: center;
  justify-content: start;
  text-align: start;

  .number2 {
    font-size: 30px;
    font-weight: bold;
  }
`;

const Print = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-style: dashed;
  padding: 10px 15px;
  color: #00afff;
  font-size: 24px;
  margin-right: 10px;
`;

const Like = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-style: dashed;
  padding: 10px 15px;
  color: #00afff;
  font-size: 24px;
  margin-right: 10px;
`;

const View = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-style: dashed;
  padding: 10px 15px;
  color: #00afff;
  font-size: 24px;
  margin-right: 10px;
`;

const ActionHold = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  width: auto;
  margin-bottom: 70px;
`;

const Second = styled.div`
  width: 500px;
  height: auto;
`;

const Loc = styled.div`
  height: auto;
  width: auto;
  margin-right: 5px;
  margin-top: 5px;
  color: #00afff;
  font-size: 17px;
`;

const OwnerImage = styled.img`
  object-fit: cover;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
`;
const Icon = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-size: 14px;
`;

const SocialHandle = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;

const Owner = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const OwnerHold = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Address = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 10px 0px;
  margin-bottom: 30px;
`;

const Title = styled.div`
  height: auto;
  width: 100%;
  margin-bottom: 20px;
  font-size: 30px;
`;

const First = styled.div`
  height: auto;
  width: 500px;
  text-align: left;
  font-weight: bold;
`;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const HeroDetail = styled.div`
  height: auto;
  width: auto;
  padding: 50px 50px;
  display: flex;
  justify-content: start;
  align-items: flex-start;
`;

const ImageHold = styled.div`
  height: 700px;
  width: auto;
`;

const Hero = styled.div`
  height: auto;
  width: auto;
  margin-bottom: 100px;
`;

const Container = styled.div`
  height: auto;
  width: auto;
`;
