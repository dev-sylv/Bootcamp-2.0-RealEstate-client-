import React, { useState } from "react";
import styled from "styled-components";


const AdminUpload = () => {

    const [myAvatar, setMyAvatar] = useState();
  const [image, setImage] = useState("");

    const imageUpload = (e: any) => {
    const file = e.target.files[0];
    const save: any = URL.createObjectURL(file);
    setImage(file);
    setMyAvatar(save);
  };

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

                        <Label>House Type</Label>
                        <HouseInput placeholder="" type="text" />

                    </House>

                    <House>

                        <Label>Sell/Rent</Label>
                        <HouseInput2>
                            <option value="">--select house type--</option>
                            <option value="">For Rent</option>
                            <option value="">For Sale</option>
                        </HouseInput2>

                    </House>
{/* 
                    <HouseImg />

                    <Button>Upload Images</Button> */}

                <div className="img-holder">
                        <img src={myAvatar} alt="" id="img" className="img" />
                    </div>
                    <input onChange={imageUpload} type="file" id="input" />
                    <div className="label">
                        <label htmlFor="input" className="image-upload">
                        {/* <BsCamera style={{ fontSize: "18px" }} /> */}
                        Upload Image
                        </label>
                    </div>


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
height: 45px;
background-color:  #039EE6;
color: white;
border-radius: 6px;
margin-top: 20px;
cursor: pointer;
border: none;
`;

const Button = styled.button`
width: 140px;
height: 40px;
border: 1px solid #039EE6;
background: white;
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
border: 1px solid #039EE6;
`;

const HouseInput = styled.input`
width: 300px;
height: 50px;
border-radius: 7px;
outline: none;
border: 1px solid #039EE6;
`;

const Label = styled.div`
font-size: 15px;
font-weight: 700;
color: #039EE6;
margin-bottom: 5px;
`;

const House = styled.div`
margin-bottom: 20px;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
position: relative;

.img-holder{
    width: 160px;
    height: 160px;
    border: 3px solid #039EE6;
    border-radius: 7px;
    overflow: hidden;
    margin-left: 2rem;
    margin-top: 10px;
}
.img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

#input[type="file"]{
    display: none;
}

.label{
    width: 100%;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
}

.image-upload{
    margin: auto;
    padding: 10px 10px;
    /* border: 1px solid#690E94; */
    background: #039EE6;
    color: white;
    font-weight: 600;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    position: absolute;
    left: 120px;
    bottom: 70px;
}


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


