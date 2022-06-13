import Layout from "../Components/Shared/Layout/Layout";
import "../styles/globals.scss";
import "../styles/utils/swiper-slider-setting.scss";
// eslint-disable-next-line
import "swiper/css/bundle";
// import '../scripts/styles'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
