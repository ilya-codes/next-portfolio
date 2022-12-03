import ScrollToTop from "../components/ScrollToTop";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import { analytics } from "../utils/firebase";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      analytics();
    }
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <ScrollToTop />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
