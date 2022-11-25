import React, { useEffect, useState } from "react";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/Connectors/MainBanner";
import AboutUs from "../components/Connectors/AboutUs";
// import BannerTwo from "../components/Connectors/BannerTwo";
import Connectors from "../components/Common/Connectors";
import FunFacts from "../components/Connectors/FunFacts";
import Footer from "../components/_App/Footer";
import WelcomeNote from "../components/Connectors/WelcomeNote";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setIsReady(true);
    }
  }, [router]);

  return (
    <>
      {!isReady ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <span>Loading...</span>
        </div>
      ) : (
        <>
          <Navbar />
          <MainBanner />
          <Connectors />
          <WelcomeNote />
          <AboutUs />
          {/* <BannerTwo /> */}
          <FunFacts />
          <Footer />
        </>
      )}
    </>
  );
};

export default HomePage;
