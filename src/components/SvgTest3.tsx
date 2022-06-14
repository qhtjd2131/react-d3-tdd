import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";
import useWindowDimensions from "../hooks/useWindowDimensions";
// import DrwwSVGPlugin from "gsap/dist/"

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
gsap.defaults({ ease: "none" });

const Icon = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
})``;

const Svg = styled(Icon)`
  width: 100%;
  /* background-color: #000f30; */
  /* padding-bottom : calc(var(--vh) * 200); */
  /* max-width: 600px; */
  overflow: visible;
  /* margin-top: 60vh; */
`;

const Path = styled.path`
  fill: none;
  stroke: gray;
  stroke-width: 2px;
`;
const Path2 = styled(Path)`

  stroke-width: 2px;
  fill: none;
  stroke: gray;
`;

const Circle = styled.circle`
  fill: white;
  stroke: gray;
  cursor: pointer;
  /* visibility: hidden; */
  &:hover {
    stroke: black;
  }
`;
const SvgTest3 = () => {
  const { width, height } = useWindowDimensions();

  const svgRef = useRef(null);
  const movingBallRef = useRef(null);
  const ball1Ref = useRef(null);
  const ball2Ref = useRef(null);
  const ball3Ref = useRef(null);
  const ball4Ref = useRef(null);
  const tempRef = useRef(null);

  const path2Ref = useRef<SVGPathElement>(null); //TheLine
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [width, height]);

  useEffect(() => {
    const pulses = gsap
      .timeline({
        defaults: {
          duration: 0.05,
          autoAlpha: 1,
          // scale: 1.4,
          transformOrigin: "center",
          // ease: "elastic(1.5, 1)",
          fill: "gray",
        },
      })
      .to(ball1Ref.current, {}, 0)
      .to([ball2Ref.current], {}, 0.333)
      .to([ball3Ref.current], {}, 0.64)
      .to([ball4Ref.current], {}, 1);

    gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          id: "inin",
          
          scrub: 1,
          start: "top top",
          end: "bottom bottom",
          
        },
      })
      .to(movingBallRef.current, { duration: 0.01, autoAlpha: 1, fill: "gray", zIndex : 999 })
      // .from(path2Ref.current, { drawSVG: 0 }, 0)
      // drawSVPPlugin은 GSAP Membership에 가입해야함(년 99달러)
      .to(
        movingBallRef.current,
        {
          motionPath: {
            path: path2Ref.current!,
            align: path2Ref.current!,
            alignOrigin: [0.5, 0.5],
          },
        },
        0
      )
      .add(pulses, 0);
  }, []);

  return (
    <Svg ref={svgRef} viewBox={`0 0 60 600`}>
      <Path2
        ref={path2Ref}
        d={`M 30 0 
        V 600`}
        fill="none"
        stroke="black"
      />


      <Circle ref={ball1Ref} r="20" cx="30" cy="0"></Circle>
      <Circle
        ref={ball2Ref}
        r="20"
        cx="30"
        cy="200"
        onClick={() => {
          console.log("click");
        }}
      ></Circle>
      <Circle ref={ball3Ref} r="20" cx="30" cy="400"></Circle>
      <Circle ref={ball4Ref} r="20" cx="30" cy="600"></Circle>
      <Circle ref={movingBallRef} r="20" cx="30" cy="0"></Circle>

    </Svg>
  );
};

export default SvgTest3;
