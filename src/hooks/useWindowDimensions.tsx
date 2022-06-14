import { useState, useEffect } from "react";
import { debounce } from "lodash";
import ScrollTrigger from "gsap/ScrollTrigger";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = debounce(() => {
      ScrollTrigger.refresh();
      setWindowDimensions(getWindowDimensions());
    }, 500);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
