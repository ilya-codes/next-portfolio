import ScrollToTop from "../components/ScrollToTop";
import Layout from "../components/Layout";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
