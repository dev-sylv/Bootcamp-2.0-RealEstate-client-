import React from "react";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { BsHouseCheckFill } from "react-icons/bs";
import { GiFamilyHouse } from "react-icons/gi";

const Anywhere = () => {
  return (
    <>
      <Any>
        <Contain>
          <Box>
            <Buy>Rent Property from Anywhere</Buy>

            <Icon>
              <AiFillHome />
            </Icon>

            <Real>
              Real Estate means property and the fixed assets on it. Buying and
              selling of home, land, property
            </Real>
          </Box>

          <Box>
            <Buy>Professional & Friendly Agents</Buy>

            <Icon>
              <BsHouseCheckFill />
            </Icon>

            <Real>
              Showcase your property to millions of renters. Collect rent
              entirely online. Make rental expense tracking a breeze
            </Real>
          </Box>

          <Box>
            <Buy>Buy and Own Awesome Property</Buy>

            <Icon>
              <GiFamilyHouse />
            </Icon>

            <Real>
              Streamline rental maintenance requests. Create account online in
              minutes. List. Manage. Earn. It's really that simple.
            </Real>
          </Box>
        </Contain>
      </Any>
    </>
  );
};

export default Anywhere;

const Real = styled.div`
  font-size: 15px;
`;

const Icon = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 27px;
`;

const Buy = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const Box = styled.div`
  width: 250px;
  height: 250px;
  padding: 15px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #511378;
  color: white;
`;

const Contain = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
  gap: 3rem;
  flex-wrap: wrap;
  z-index: 12;
`;

const Any = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 50px;
  padding-top: 50px;
`;
