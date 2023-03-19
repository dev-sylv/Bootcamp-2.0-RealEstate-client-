import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Anywhere from "./Anywhere";
// import styled from "styled-components";
import Hero from "./Hero";
import Location from "./Location";
import Prefered from "./Prefered";
import Rent from "./Rent";
import Sell from "./Sell";

const HomeScreen = () => {
  return (
    <>
      <Hero />
      <Anywhere />
      <Location />
      <Sell />
      <Rent />
      <Prefered />
      <Footer />
    </>
  );
};

export default HomeScreen;
