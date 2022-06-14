import { useEffect, useState } from "react";

const useScrollTopPosition = () => {
    const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return scrollY;
};

export default useScrollTopPosition;
