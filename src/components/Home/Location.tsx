import React from "react";
import styled from "styled-components";


const Location = () => {

    return (
        <>

            <Popular>

                <Contain>

                    <First>Popular Locations</First>

                    <Best>We have the best of properties in the best of locations across the country.</Best>

                    <Pictures>

                        <Austin>
                            <AustinImg src="/images/9.jpg" />
                            <AustinText>Ajah</AustinText>
                        </Austin>

                        <Austin>
                            <AustinImg src="/images/10.jpg" />
                            <AustinText>Lekki</AustinText>
                        </Austin>

                        <Austin>
                            <AustinImg src="/images/9.jpg" />
                            <AustinText>Gbagada</AustinText>
                        </Austin>

                        <Austin>
                            <AustinImg src="/images/dallas-1.jpg" />
                            <AustinText>Ibadan</AustinText>
                        </Austin>

                        <Austin>
                            <AustinImg src="/images/chicago-1.jpg" />
                            <AustinText>Port-Harcourt</AustinText>
                        </Austin>

                        <Austin>
                            <AustinImg src="/images/jacksonville.jpg" />
                            <AustinText>Gwagwalada</AustinText>
                        </Austin>

                        <Austin>
                            <AustinImg src="/images/jersey_city-1.jpg" />
                            <AustinText>Calabar</AustinText>
                        </Austin>

                        <Austin>
                            <AustinImg src="/images/9.jpg" />
                            <AustinText>Ajegunle</AustinText>
                        </Austin>

                    </Pictures>

                </Contain>

            </Popular>

        </>
    )
}

export default Location;

// const Popular = styled.div``;

// const Popular = styled.div``;

// const Popular = styled.div``;

// const Popular = styled.div``;

// const Popular = styled.div``;

const AustinText = styled.div`
color: white;
font-weight: 700;
position: absolute;
bottom: 20px;
left: 20px;
`;

const AustinImg = styled.img`
width: 100%;
height: 100%;
`;

const Austin = styled.div`
width: 280px;
height: 280px;
border-radius: 5px;
position: relative;
overflow: hidden;
margin-bottom: 30px;
`;

const Pictures = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media screen and (max-width: 537px) {
    justify-content: center;
}
`;

const Best = styled.div`
font-size: 15px;
width: 290px;
text-align: center;
font-weight: 700;
margin-top: 30px;
margin-bottom: 40px;
color: #52325d;

@media screen and (max-width: 320px) {
    font-size: 12px;
}

@media screen and (max-width: 375px) {
    font-size: 14px;
}

@media screen and (max-width: 577px) {
margin-top: 20px;
margin-bottom: 30px;
}
`;

const First = styled.div`
font-size: 35px;
font-weight: 700;
color: #511378;

@media screen and (max-width: 320px) {
    font-size: 20px;
}

@media screen and (max-width: 425px) {
    font-size: 27px;
}

@media screen and (max-width: 375px) {
    font-size: 24px;
}
`;

const Contain = styled.div`
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Popular = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding-top: 50px;
padding-bottom: 50px;

@media screen and (max-width: 425px) {
    padding-top: 25px;
}
`;

