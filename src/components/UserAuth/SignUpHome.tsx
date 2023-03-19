import React from "react";
import styled from "styled-components";
import { GoPerson } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const SignUpHome = () => {
  return (
    <>
      <Contain>
        <Left>
          <Get>GET STARTED</Get>

          <NavLink style={{ textDecoration: "none" }} to="/user-signup">
            <Button1>
              Sign Up As User <FiUsers />
            </Button1>
          </NavLink>

          <NavLink style={{ textDecoration: "none" }} to="/agent-signup">
            <Button1>
              Sign Up As Agent <GoPerson />
            </Button1>
          </NavLink>
        </Left>

        <Right>
          <LeftImg src="/images/start.svg" />
        </Right>
      </Contain>
    </>
  );
};

export default SignUpHome;

// const Contain = styled.div``;

// const Contain = styled.div``;

// const Contain = styled.div``;

// const Contain = styled.div``;

// const Contain = styled.div``;

const Get = styled.div`
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 700;
  color: #039ee6;
`;

const Button1 = styled.button`
  outline: 0;
  grid-gap: 8px;
  align-items: center;
  background: 0 0;
  background-color: #039ee6;
  border: 1px solid #039ee6;
  border: none;
  border-radius: 80px;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  font-size: 20px;
  color: white;
  font-weight: 600;
  gap: 8px;
  justify-content: center;
  line-height: 1.5;
  overflow: hidden;
  // padding: 12px 16px;
  width: 280px;
  height: 80px;
  text-decoration: none;
  text-overflow: ellipsis;
  transition: all 0.2s ease-out;
  white-space: nowrap;
  margin-bottom: 40px;

  :hover {
    box-shadow: 4px 4px 0 #039ee6;
    transform: translate(-4px, -4px);
    background: transparent;
    border: 1px solid #039ee6;
    color: #039ee6;
  }
  :focus-visible {
    outline-offset: 1px;
  }
`;

const Right = styled.div`
  width: 50%;
`;

// const Black = styled.div`
// position: absolute;
// width: 100%;
// height: 100%;
// background-color: black;
// opacity: 0.7;
// `;

const LeftImg = styled.img`
  width: 400px;
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // height: 100%;
  // background-image: url("/images/room5.jpg");
  // background-size: cover;
  // position: relative;
`;

const Contain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
