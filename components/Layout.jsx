import Nav from "./Nav";
import Footer from "./Footer";
import Spinner from "./Spinner";
// import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  // const [ready, setReady] = useState(false);

  // useEffect(() => {
  //   setReady(true);
  // }, []);

  return (
    <>
      {/* {ready ? (
        <>
          <Nav />
          {children}
          <Footer />
        </>
      ) : (
        <Spinner />
      )} */}
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
