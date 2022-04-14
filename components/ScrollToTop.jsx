import { useEffect } from "react";
import { useRouter } from "next/router";

const ScrollToView = () => {
  const { pathname } = useRouter();
  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 100);
  }, [pathname]);
};

export default ScrollToView;
