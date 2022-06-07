import Layout from "../Components/Shared/Layout/Layout";
import "../styles/globals.scss";
import "../styles/utils/swiper-slider-setting.scss";
// eslint-disable-next-line
import "swiper/css/bundle";
// import '../scripts/styles'

// import { useRouter } from "next/router";
// import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  //  Scroll to top
  // useEffect(() => {
  //   window.scrollTo({ top: 0 });
  // }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
