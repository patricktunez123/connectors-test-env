import "@/public/css/bootstrap.min.css";
import "animate.css";
import "@/public/css/boxicons.min.css";
import "@/public/css/flaticon.css";
import "@/public/css/slick.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

import "@/public/css/style.css";
import "@/public/css/responsive.css";
import "@/public/css/rtl.css";

import Layout from "@/components/_App/Layout";
import { Provider } from "react-redux";
import { useStore } from "../store";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Layout />
      <Component {...pageProps} />
    </Provider>
  );
}
