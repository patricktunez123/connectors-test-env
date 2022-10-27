import React from "react";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/Connectors/MainBanner";
import AboutUs from "../components/Connectors/AboutUs";
import BannerTwo from "../components/Connectors/BannerTwo";
import Connectors from "../components/Common/Connectors";
import FunFacts from "../components/Connectors/FunFacts";
import Footer from "../components/_App/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <AboutUs />
      <BannerTwo />
      <Connectors />
      <FunFacts />
      <Footer />
    </>
  );
};

export default HomePage;
