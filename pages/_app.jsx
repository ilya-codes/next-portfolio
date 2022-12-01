import ScrollToTop from "../components/ScrollToTop";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import Script from "next/script";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.TRACKING_CODE}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', ${process.env.TRACKING_CODE}, {
page_path: window.location.pathname,
});
`,
        }}
      />

      {loading && <Spinner />}
      <ScrollToTop />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
