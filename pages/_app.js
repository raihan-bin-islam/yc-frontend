import Layout from "../Components/Shared/Layout/Layout";
import "../styles/globals.scss";
import "../styles/utils/swiper-slider-setting.scss";
// eslint-disable-next-line
import "swiper/css/bundle";
// import '../scripts/styles'

import { useEffect } from "react";
import { Router } from "next/router";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
