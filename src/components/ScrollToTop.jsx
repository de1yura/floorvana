import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // প্রতিবার পাথ পরিবর্তন হলে স্ক্রল ০-তে চলে যাবে
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;