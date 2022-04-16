import ScrollToTop from "../components/ScrollToTop";
import Layout from "../components/Layout";
import "../styles/global.scss";
import Spinner from "../components/Spinner";

import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      {ready ? (
        <>
          <ScrollToTop />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default MyApp;
