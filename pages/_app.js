import ScrollToTop from "../components/ScrollToTop";
import Layout from "../components/Layout";
import "../styles/global.scss";
import Spinner from "../components/Spinner";

import Router from "next/router";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [ready, setReady] = useState(true);

  // useEffect(() => {
  //   setReady(true);
  // }, []);

  Router.onRouteChangeStart = (url) => {
    // Some page has started loading
    setReady(false);
  };

  Router.onRouteChangeComplete = (url) => {
    // Some page has finished loading
    setReady(true);
  };

  Router.onRouteChangeError = (err, url) => {
    // an error occurred.
  };

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
