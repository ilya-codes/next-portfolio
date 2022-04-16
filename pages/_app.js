import ScrollToTop from "../components/ScrollToTop";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <ScrollToTop />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
