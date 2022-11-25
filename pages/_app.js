import "../public/css/bootstrap.min.css";
import "animate.css";
import "../public/css/boxicons.min.css";
import "../public/css/flaticon.css";
import "../public/css/slick.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

import "../public/css/style.css";
import "../public/css/responsive.css";
import "../public/css/rtl.css";
import "../config/i18n";

import Layout from "../components/_App/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout />
      <Component {...pageProps} />
    </>
  );
}
