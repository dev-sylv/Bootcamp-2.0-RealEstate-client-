import React from "react";
import styled from "styled-components";
import trekka from "../Assets/Screenshot 2023-03-18 164334.png";

const Prefered = () => {
  return (
    <>
      <Choice>
        <Black></Black>

        <Contain>
          <Top>What Makes Us The Preferred Choice</Top>

          <Bottom>
            <Left>
              <Buyers>
                <Icon src="/images/notepad.png" />

                <Max>Maximum Choices</Max>

                <Simply>
                  We get you the best, as we spoil you with lot of choices
                </Simply>
              </Buyers>

              <Buyers>
                <Icon src="/images/shield.png" />

                <Max>Buyers Trust Us</Max>

                <Simply>
                  Our buyers trust us to deliver properties that fit their
                  taste.
                </Simply>
              </Buyers>

              <Buyers>
                <Icon src="/images/like.png" />

                <Max>Seller Prefer Us</Max>

                <Simply>
                  Seller prefer us to get their properties to the right Audience
                </Simply>
              </Buyers>

              <Buyers>
                <Icon src="/images/woman.png" />

                <Max>Expert Guidance</Max>

                <Simply>
                  Our Experts are always available to give your the best of
                  advice.
                </Simply>
              </Buyers>
            </Left>

            <Right>
              <img src={trekka} alt="" />
            </Right>
          </Bottom>
        </Contain>
      </Choice>
    </>
  );
};

export default Prefered;

const Right = styled.div`
  width: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Simply = styled.div`
  width: 85%;
  font-size: 12px;
  text-align: center;
`;

const Max = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Icon = styled.img`
  width: 50px;
`;

const Buyers = styled.div`
  width: 230px;
  height: 230px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  color: white;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Top = styled.div`
  font-size: 25px;
  color: white;
  font-weight: 700;
  text-align: center;
  width: 75%;

  @media screen and (max-width: 425px) {
    font-size: 22px;
  }

  @media screen and (max-width: 375px) {
    font-size: 17px;
  }
`;

const Contain = styled.div`
  width: 100%;
  display: flex;
  /* background-color: red; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const Black = styled.div`
  position: absolute;
  background-color: #52325d;
  opacity: 0.8;
  width: 100%;
  height: 100%;
`;

const Choice = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  background-image: url("/images/featureds.jpg");
  background-position: cover;
  position: relative;
  overflow: hidden;
`;
