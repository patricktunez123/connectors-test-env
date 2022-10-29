import React from "react";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/Connectors/MainBanner";
import AboutUs from "../components/Connectors/AboutUs";
import BannerTwo from "../components/Connectors/BannerTwo";
import Connectors from "../components/Common/Connectors";
import FunFacts from "../components/Connectors/FunFacts";
import Footer from "../components/_App/Footer";
import WelcomeNote from "../components/Connectors/WelcomeNote";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <WelcomeNote />
      <AboutUs />
      <BannerTwo />
      <Connectors />
      <FunFacts />
      <Footer />
    </>
  );
};

export default HomePage;
