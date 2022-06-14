import gsap from "gsap";

import React, { forwardRef, useEffect, useRef } from "react";
import * as style from "./SectionDivider.style";

// interface SectionDividerProps {}
// const SectionDivider = forwardRef<HTMLDivElement, SectionDividerProps>(
//   (ref, props) => {
//     return <style.SectionDividerBox ref={ref} />;
//   }
// );
interface SectionDividerProps {}
const SectionDivider = (props: SectionDividerProps) => {
  const dividerRef = useRef(null);

  useEffect(() => {
    gsap.to(dividerRef.current, {
      scrollTrigger: {
        trigger: dividerRef.current,
        start: "bottom bottom",
        toggleActions: "play pause reserve reset",
      },
      duration: 1,
      delay: 0.2,
      autoAlpha: 1,
      width: "100%",
    });
  }, []);
  return <style.SectionDividerBox ref={dividerRef} />;
};

export default SectionDivider;
