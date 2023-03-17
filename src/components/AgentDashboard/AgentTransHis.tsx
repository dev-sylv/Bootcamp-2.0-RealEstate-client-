import React from "react";
import styled from "styled-components";


const AgentTranHis = () => {

    return(
        <>

            <Body>

                <Contain>

                    <Trans>Transaction History</Trans>

                    <Top>
                        <Names>Amount</Names>
                        <Names>Transaction ID</Names>
                        <Names>Sold/Rent</Names>
                        <Names>Location</Names>
                        <Names>% Deducted</Names>
                        <Names>Date</Names>
                        {/* <Names>Active/In-Active</Names> */}
                    </Top>

                    <Top>
                        <Names style={{fontSize:"13px", fontWeight:"500", color:"#2c9f45"}}>N900,000.00,</Names>
                        <Names style={{fontSize:"13px", fontWeight:"500", color:"#2c9f45"}}>3456ADHJ5679</Names>
                        <Names style={{fontSize:"13px", fontWeight:"500", color:"#2c9f45"}}>Rent</Names>
                        <Names style={{fontSize:"13px", fontWeight:"500", color:"#2c9f45"}}>Apapa</Names>
                        <Names style={{fontSize:"13px", fontWeight:"500", color:"#2c9f45"}}>5.5%</Names>
                        <Names style={{fontSize:"13px", fontWeight:"500", color:"#2c9f45"}}>13/02/23</Names>
                        {/* <Names style={{fontSize:"13px", fontWeight:"500", color:"#2c9f45"}}>Active</Names> */}
                    </Top>

                    {/* <Top>
                        <Names style={{fontSize:"13px", fontWeight:"500", color:"#2c9f45"}}>John Musa</Names>
                        <Names style={{fontSize:"13px", fontWeight:"500", color:"#2c9f45"}}>7683BC</Names>
                        <Names style={{fontSize:"13px", fontWeight:"500", color:"#2c9f45"}}>07046274857</Names>
                        <Names style={{fontSize:"13px", fontWeight:"500", color:"#2c9f45"}}>30</Names>
                        <Names style={{fontSize:"13px", fontWeight:"500", color:"#2c9f45"}}>2</Names>
                        <Names style={{fontSize:"13px", fontWeight:"500", color:"#2c9f45"}}>N25,000,000.00</Names>
                        <Names style={{fontSize:"13px", fontWeight:"500", color:"#2c9f45"}}>In-Active</Names>
                    </Top> */}


                </Contain>

            </Body>

        </>
    )
}

export default AgentTranHis;

// const Contain = styled.div``;

// const Contain = styled.div``;

// const Contain = styled.div``;

// const Contain = styled.div``;

// const Contain = styled.div``;

// const Contain = styled.div``;

// const Contain = styled.div``;

const Trans = styled.div`
font-size: 25px;
font-weight: 700;
color: #511378;
margin-top: 15px;
margin-left: 30px;
`;

const Names = styled.div`
font-size: 15px;
font-weight: 700;
color: #511378;
width: 135px;
`;

const Top = styled.div`
// width: 95%;
margin-top: 15px;
margin-left: 20px;
display: flex;
justify-content: space-around;
align-items: flex-start;
`;

const Contain = styled.div`
width: 95%;
height: 100%;
box-shadow: 0 0 3px #511378;
border-radius: 10px 0 10px 0;
display: flex;
flex-direction: column;
justify-content: center;
// align-items: center;
padding-bottom: 40px;
`;

const Body = styled.div`
width: 100%;
height: 100%;
margin-top: 15px;
padding-bottom: 40px;
display: flex;
justify-content: center;
// align-items: center;
`;
