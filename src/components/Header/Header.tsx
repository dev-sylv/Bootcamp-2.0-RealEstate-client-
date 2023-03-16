import React, {useState} from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai"


const Header = () => {

  const [scroll, setScroll] = useState<Boolean>(false);
  const [show, setShow] = useState(false);

  const menu = () => {
    setShow(!show)
  }

  const changeBg = () => {
    if (window.scrollY >= 70) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  };

  window.addEventListener("scroll", changeBg)

    return (
        <>

        { scroll ? (
          <Head bg= "white" style={{boxShadow:"0 0 2px #511378"}}>

          <Contain>

              <Logo>LOGO</Logo>

              <Navs>
                  <Nav>Home</Nav>
                  <Nav>Properties</Nav>
                  <Nav>Agents</Nav>
                  <Nav>Contact Us</Nav>
                  <Nav>About Us</Nav>
              </Navs>

              <Buttons>
                  <Button1>Sign in</Button1>
                  <Button2>Sign up</Button2>

                  {/* <div>
                    <button className="login-btn">Login</button>
                </div>

                <div>
                    <button className="logout-btn">Logout</button>
                </div> */}

                
              </Buttons>

              <Mobile onClick={menu}>
                  <AiOutlineMenu />
              </Mobile>

              { show ? 

              
               ( <Toggle>
  
                  

                  <Home>Home</Home>
                  <Home>Properties</Home>
                  <Home>Agents</Home>
                  <Home>Contact Us</Home>
                  <Home>About Us</Home>
  
                    <hr style={{border:"1px solid #511378", width: "95%"}} />
                    
                  <But1>Sign In</But1>
                  <But2>Sign Up</But2>
  
                </Toggle> )

              : null}


          </Contain>

      </Head>

        ) : (
          
          <Head bg= "">

          <Contain>

              <Logo>LOGO</Logo>

              <Navs>
                  <Nav>Home</Nav>
                  <Nav>Properties</Nav>
                  <Nav>Agents</Nav>
                  <Nav>Contact Us</Nav>
                  <Nav>About Us</Nav>
              </Navs>

              <Buttons>
                  <Button1>Sign in</Button1>
                  <Button2>Sign up</Button2>

              </Buttons>

              

              <Mobile onClick={menu}>
                  <AiOutlineMenu />
              </Mobile>

              { show ? 

              (
                <Toggle>

                  <Home>Home</Home>
                  <Home>Properties</Home>
                  <Home>Agents</Home>
                  <Home>Contact Us</Home>
                  <Home>About Us</Home>
  
                    <hr style={{border:"1px solid #511378", width: "95%"}} />

                  <But1>Sign In</But1>
                  <But2>Sign Up</But2>
  
                </Toggle>)

              : null}

          </Contain>

      </Head>
        ) }



            
        </>
    )
}

export default Header;

// const Header = styled.div``;

const But2 = styled.button`
outline: 0;
grid-gap: 8px;
align-items: center;
background: 0 0;
background-color:  #511378;
border: 1px solid #511378;
border: none;
border-radius: 5px;
cursor: pointer;
display: inline-flex;
flex-shrink: 0;
font-size: 16px;
color: white;
font-weight: 600;
gap: 8px;
justify-content: center;
line-height: 1.5;
overflow: hidden;
// padding: 12px 16px;
width: 105px;
height: 40px;
text-decoration: none;
text-overflow: ellipsis;
transition: all .20s ease-out;
white-space: nowrap;
margin-left: 25px;

:hover {
    box-shadow: 4px 4px 0 #511378;
    transform: translate(-4px,-4px);
    background: transparent;
    border: 1px solid #511378;
    color: #511378;
}
:focus-visible{
    outline-offset: 1px;
}
`;

const But1 = styled.button`outline: 0;
grid-gap: 8px;
align-items: center;
background: 0 0;
border: 1px solid #511378;
border-radius: 5px;
cursor: pointer;
display: inline-flex;
flex-shrink: 0;
font-size: 16px;
font-weight: 600;
color: #511378;
gap: 8px;
justify-content: center;
line-height: 1.5;
overflow: hidden;
// padding: 12px 16px;
width: 100px;
height: 40px;
text-decoration: none;
text-overflow: ellipsis;
transition: all .20s ease-out;
white-space: nowrap;
margin-left: 25px;

:hover {
    box-shadow: 4px 4px 0 #511378;
    // color: #00afff;
    color: #511378;
    transform: translate(-4px,-4px);
}
:focus-visible{
    outline-offset: 1px;
}

`;

const Home = styled.div`
margin-left: 25px;
font-weight: 700;
color: #52325d;
cursor: pointer;
`;

const Toggle = styled.div`
display: none;

@media screen and (max-width: 768px) {
display: flex;
position: absolute;
background: white;
width: 235px;
height: 360px;
top: 75px;
right: 20px;
border-radius: 10px;
box-shadow: 0 0 3px #511378;
flex-direction: column;
justify-content: space-around;
padding: 30px 15px;
transition: all 350ms ease-in-out; 
}
`;

const Mobile = styled.div`
display: none;

@media screen and (max-width: 768px) {
  display: flex;
  font-size: 22px;
  cursor: pointer;
  color: #511378;
  background-color: white;
  padding: 5px 5px;
  border-radius: 5px;
}
`;

const Button2 = styled.button`
outline: 0;
grid-gap: 8px;
align-items: center;
background: 0 0;
background-color:  #511378;
border: 1px solid #511378;
border: none;
border-radius: 5px;
cursor: pointer;
display: inline-flex;
flex-shrink: 0;
font-size: 16px;
color: white;
font-weight: 600;
gap: 8px;
justify-content: center;
line-height: 1.5;
overflow: hidden;
// padding: 12px 16px;
width: 105px;
height: 40px;
text-decoration: none;
text-overflow: ellipsis;
transition: all .20s ease-out;
white-space: nowrap;
:hover {
    box-shadow: 4px 4px 0 #511378;
    transform: translate(-4px,-4px);
    background: transparent;
    border: 1px solid #511378;
    color: #511378;
}
:focus-visible{
    outline-offset: 1px;
}

`;

const Button1 = styled.button`
outline: 0;
grid-gap: 8px;
align-items: center;
background: 0 0;
border: 1px solid #511378;
border-radius: 5px;
cursor: pointer;
display: inline-flex;
flex-shrink: 0;
font-size: 16px;
font-weight: 600;
color: #511378;
gap: 8px;
justify-content: center;
line-height: 1.5;
overflow: hidden;
// padding: 12px 16px;
width: 105px;
height: 40px;
text-decoration: none;
text-overflow: ellipsis;
transition: all .20s ease-out;
white-space: nowrap;
:hover {
    box-shadow: 4px 4px 0 #511378;
    // color: #00afff;
    color: #511378;
    transform: translate(-4px,-4px);
}
:focus-visible{
    outline-offset: 1px;
}

`;

const Buttons = styled.div`
display: flex;
align-items: center;
gap: 1rem;

.login-btn {
  font-family: Hack, monospace;
  background: #bbff00;
  color: #1d1d1d;
  cursor: pointer;
  font-size: 2em;
  padding: 1.5rem;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;
  width: auto;
  position: relative;
  min-width: 250px;

  &::after {
      content: "\f2f6";
      font-family: "Font Awesome 5 Pro";
      font-weight: 400;
      position: absolute;
      left: 80%;
      top: 54%;
      right: 0;
      bottom: 0;
      opacity: 0;
      transform: translate(-50%, -50%);

  }

  &:hover {
      background: #2b2bff;
      transition: all 0.5s;
      border-radius: 10px;
      box-shadow: 0px 6px 15px #0000ff61;
      padding: 1.5rem 3rem 1.5rem 1.5rem;
      color: #ffffff;

      &::after {
          opacity: 1;
          transition: all 0.5s;
          color: #ffffff;

      }
  }


}


.logout-btn {
  font-family: Hack, monospace;
  background: #d3d3d3;
  color: #2c2c2c;
  cursor: pointer;
  font-size: 2em;
  padding: 1.5rem;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;
  width: auto;
  position: relative;
  min-width: 250px;

  &::after {
      content: "\f2f5";
      font-family: "Font Awesome 5 Pro";
      font-weight: 400;
      position: absolute;
      left: 80%;
      top: 54%;
      right: 0;
      bottom: 0;
      opacity: 0;
      transform: translate(-50%, -50%);

  }

  &:hover {
      background: #2b2bff;
      transition: all 0.5s;
      border-radius: 10px;
      box-shadow: 0px 6px 15px #0000ff61;
      padding: 1.5rem 3rem 1.5rem 1.5rem;
color: #ffffff;
      &::after {
          opacity: 1;
          transition: all 0.5s;
          color: #ffffff;
      }
  }
}

@media screen and (max-width: 768px) {
  display: none;
}
`;

const Nav = styled.div`
font-weight: 600;
margin-right: 20px;
color: #52325d;
// color: #00afff;
cursor: pointer;

:hover{
  color: gray;
}
`;

const Navs = styled.div`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
  display: none;
}
`;

const Logo = styled.div`
font-size: 25px;
font-weight: 600;
// color: #00afff;
color: #511378;

@media screen and (max-width: 768px) {
  background-color: white;
  padding: 5px 5px;
  border-radius: 6px;
`;

const Contain = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Head = styled.div<{bg: string}>`
// box-shadow: 0 0 3px gray;
width: 100%;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
background-color: ${(props) => props.bg};
z-index: 500;
transition: all 350ms ease-in-out;
`;

