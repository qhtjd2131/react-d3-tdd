import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

interface SectionDividerProps {}
const SectionDivider = (props: SectionDividerProps) => {
  const dividerRef = useRef(null);

  useEffect(() => {
    gsap.to(dividerRef.current, {
      scrollTrigger: {
        trigger: dividerRef.current,
        start: "bottom bottom",
        markers: false,
      },
      duration: 1,
      delay: 0.2,
      autoAlpha: 1,
      width: "100%",
    });
  }, []);
  return <SectionDividerBox ref={dividerRef} />;
};

export default SectionDivider;

const SectionDividerBox = styled.div`
  width: 0%;
  height: 3px;
  padding: 0;
  margin: 5px 0;
  background-color: gray;
`;
