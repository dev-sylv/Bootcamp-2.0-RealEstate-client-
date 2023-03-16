import React from "react";
import styled from "styled-components";
import DashHeader from "./DashHeader";


const AdminUpload = () => {

    return (

        <>

        <Body>

            <Contain>

                <Form>

                    <House>

                        <Label>House Location</Label>
                        <HouseInput placeholder="" type="text"/>

                    </House>

                    <House>

                        <Label>Price</Label>
                        <HouseInput placeholder="" type="text" />

                    </House>

                    <House>

                        <Label>Price</Label>
                        <HouseInput placeholder="" type="text" />

                    </House>

                    <House>

                        <Label>House Type</Label>
                        <HouseInput2>
                            <option value="">--select house type--</option>
                            <option value="">For Rent</option>
                            <option value="">For Sale</option>
                        </HouseInput2>

                    </House>

                    <HouseImg />

                    <Button>Upload Images</Button>

                    <Button2>Upload House Info</Button2>

                </Form>
                
            </Contain>

        </Body>

        </>
    )
}

export default AdminUpload;

// const DashHead = styled.div``;

// const DashHead = styled.div``;

// const DashHead = styled.div``;

// const DashHead = styled.div``;

const Button2 = styled.button`
width: 310px;
height: 40px;
background-color:  #52325d;
color: white;
border-radius: 6px;
margin-top: 20px;
cursor: pointer;
`;

const Button = styled.button`
width: 140px;
height: 40px;
background-color:  #52325d;
color: white;
border-radius: 6px;
border: none;
margin-top: -10px;
margin-left: 6px;
cursor: pointer;
`;

const HouseImg = styled.img`
width: 150px;
height: 150px;
border-radius: 7px;
border: 1px solid #52325d;
// border-bottom: 15px;
`;

const HouseInput2 = styled.select`
width: 310px;
height: 50px;
border-radius: 7px;
outline: none;
`;

const HouseInput = styled.input`
width: 300px;
height: 50px;
border-radius: 7px;
outline: none;
`;

const Label = styled.div`
font-size: 15px;
font-weight: 700;
color: #52325d;
margin-bottom: 5px;
`;

const House = styled.div`
margin-bottom: 20px;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
`;

const Contain = styled.div`
width: 95%;
height: 100%;
// background-color: #511378;
border-radius: 10px 0 10px 0;
display: flex;
gap: 2rem;
flex-wrap: wrap;
// flex-direction: column;
// justify-content: center;
margin-top: 50px;
padding-bottom: 30px; 
`;

const Body = styled.div`
width: 100%;
display: flex;
justify-content: center;
// align-items: center;
`;


