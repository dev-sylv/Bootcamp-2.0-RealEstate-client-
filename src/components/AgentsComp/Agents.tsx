import React from "react";
import styled from "styled-components";
import { GiSmartphone } from "react-icons/gi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { NavLink } from "react-router-dom";
import agents from "../Assets/black_photographer.jpg";
import { GetAllAgents } from "../APICALLS/API";
import { useQuery } from "@tanstack/react-query";
import { BarLoader } from "react-spinners";

const Contact = () => {
  // API ENDPOINT TO GET ALL AGENTS:
  const AllAgents = useQuery({
    queryKey: ["Agents"],
    queryFn: GetAllAgents,
  });
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
        <CardHold>
          {AllAgents?.isLoading ? <BarLoader /> : null}

          {AllAgents?.data?.data.map((agent: any) => (
            <Card key={agent._id}>
              <Img>
                <img src={agents} alt="" />
              </Img>
              <Profile>
                <ProfileWrap>
                  <h3>{agent.name}</h3>
                  <h5>{agent.Bio}</h5>
                  <Div>
                    <Email>
                      <Circle>
                        <MdOutlineMarkEmailUnread />
                      </Circle>
                      {agent.email}
                    </Email>

                    <Phonenumber>
                      <Circle>
                        <GiSmartphone />
                      </Circle>
                      {agent.phoneno}
                    </Phonenumber>
                  </Div>
                </ProfileWrap>
              </Profile>
            </Card>
          ))}
        </CardHold>
      </Body>
    </>
  );
};

export default Contact;

const CardHold = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
  /* background-color: red; */
`;

const Email = styled.div`
  display: flex;
  align-items: center;
`;
const Phonenumber = styled.div`
  display: flex;
  display: flex;
  align-items: center;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #511378;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 3px solid #511378;
  margin-top: 5px;
  margin-right: 10px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    border: 2px solid #511378;
    border-color: #511378;
    background-color: white;
    color: #511378;
  }
`;
const ProfileWrap = styled.div`
  width: 80%;
  height: 80%;
  /* background-color: white; */
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
  /* background-color: black; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.div`
  width: 100%;
  height: 60%;
  /* background-color: green; */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Card = styled.div`
  width: 350px;
  height: 500px;
  /* background-color: red; */
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  :hover {
    color: #511378;
  }
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
  /* justify-content: center; */
  /* align-items: center; */
  // margin-top: 120px;
  padding-bottom: 50px;
`;
