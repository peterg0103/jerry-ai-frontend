import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Multiple attempts to ensure scroll happens
    window.scrollTo(0, 0);
    
    // Try again after a tiny delay (for dynamic content)
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
    
    // One more time after content likely loaded
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 150);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
