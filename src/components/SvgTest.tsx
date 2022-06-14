import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";
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
  position: absolute;
  left: 0;
  top: 120%;
`;

const Path = styled.path`
  fill: none;
  stroke: black;
  stroke-width: 2px;
`;
const Path2 = styled(Path)`
  stroke-width: 10px;
  fill: none;
  /* stroke : #000f30; */
`;
const Text = styled.text`
  fill: black;
  stroke: black;
  font-size: 15px;
  visibility: hidden;
`;

const Description = styled.text`
  font-size: 15px;
  stroke: black;
  visibility: hidden;
`;

const Circle = styled.circle`
  fill: black;
  visibility: hidden;
`;
const SvgTest = () => {
  const svgRef = useRef(null);
  const ball1Ref = useRef(null);
  const ball2Ref = useRef(null);
  const ball3Ref = useRef(null);
  const ball4Ref = useRef(null);
  const ball5Ref = useRef(null);
  const ball6Ref = useRef(null);
  const ball7Ref = useRef(null);
  const ball8Ref = useRef(null);
  const ball9Ref = useRef(null);

  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);
  const text5Ref = useRef(null);
  const text6Ref = useRef(null);
  const text7Ref = useRef(null);
  const text8Ref = useRef(null);

  const description1Ref = useRef(null);

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);
  const line5Ref = useRef(null);
  const line6Ref = useRef(null);
  const line7Ref = useRef(null);
  const line8Ref = useRef(null);
  const line9Ref = useRef(null);
  const line10Ref = useRef(null);

  const path2Ref = useRef<SVGPathElement>(null); //TheLine

  useEffect(() => {
    const pulses = gsap
      .timeline({
        defaults: {
          duration: 0.05,
          autoAlpha: 1,
          scale: 1.4,
          transformOrigin: "center",
          ease: "elastic(2.5, 1)",
        },
      })
      .to(
        [ball2Ref.current, text1Ref.current, description1Ref.current],
        {},
        0.115
      )
      .to([ball3Ref.current, text2Ref.current], {}, 0.208)
      .to([ball4Ref.current, text3Ref.current], {}, 0.285)
      .to([ball5Ref.current, text4Ref.current], {}, 0.372)
      .to([ball6Ref.current, text5Ref.current], {}, 0.455)
      .to([ball7Ref.current, text6Ref.current], {}, 0.535)
      .to([ball8Ref.current, text7Ref.current], {}, 0.615)
      .to([ball9Ref.current, text8Ref.current], {}, 0.695);

    gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          id: "inin",
          trigger: svgRef.current,
          scrub: true,
          start: "top center",
          end: "bottom center",
        },
      })
      .to(ball1Ref.current, { duration: 0.01, autoAlpha: 1 })
      // .from(path2Ref.current, { drawSVG: 0 }, 0)
      // drawSVPPlugin은 GSAP Membership에 가입해야함(년 99달러)
      .to(
        ball1Ref.current,
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
    <Svg ref={svgRef} viewBox="0 0 1000 2300">
      <Path ref={line1Ref} d="M 10 200  1000 200" />
      <Path ref={line2Ref} d="M 10 400  1000 400" />
      <Path ref={line3Ref} d="M 10 600  1000 600" />
      <Path ref={line4Ref} d="M 10 800  1000 800" />
      <Path ref={line5Ref} d="M 10 1000  1000 1000" />
      <Path ref={line6Ref} d="M 10 1200  1000 1200" />
      <Path ref={line7Ref} d="M 10 1400  1000 1400" />
      <Path ref={line8Ref} d="M 10 1600  1000 1600" />
      <Path ref={line9Ref} d="M 10 1800  1000 1800" />
      <Path ref={line10Ref} d="M 10 2000  1000 2000" />

      {/* <path className="line01 line" d="M 10 200  600 200"></path>
      <path className="line02 line" d="M 10 400  600 400"></path>
      <path className="line03 line" d="M 10 600  600 600"></path>
      <path className="line04 line" d="M 10 800  600 800"></path>
      <path className="line05 line" d="M 10 1000  600 1000"></path> */}

      <Text ref={text1Ref} x="30" y="190">
        2018
      </Text>
      <Text ref={text2Ref} x="30" y="390">
        2019
      </Text>
      <Text ref={text3Ref} x="30" y="590">
        2020
      </Text>
      <Text ref={text4Ref} x="30" y="790">
        2021
      </Text>
      <Text ref={text5Ref} x="30" y="990">
        2022
      </Text>
      <Text ref={text6Ref} x="30" y="1190">
        2023
      </Text>
      <Text ref={text7Ref} x="30" y="1390">
        2024
      </Text>
      <Text ref={text8Ref} x="30" y="1590">
        2025
      </Text>

      <Description ref={description1Ref} x="30" y="220">
        hello
      </Description>

      <Path2
        // className="theLine"
        ref={path2Ref}
        d="M -5 0 
        q 618 442 322 787 
        q -247 281 -12 632 
        Q 534 1817 -3 2259"
        fill="none"
        stroke="black"
      />
      {/* <Path2
        // className="theLine"
        ref={path2Ref}
        d="M -5,0
           Q 450 230 300 450 
           T 130 750
           Q 100 850 300 1000
           T 150 1200"
        fill="none"
        stroke="black"
        stroke-width="10px"
      /> */}

      <Circle ref={ball1Ref} r="20" cx="40" cy="100"></Circle>
      <Circle ref={ball2Ref} r="20" cx="235" cy="201"></Circle>
      <Circle ref={ball3Ref} r="20" cx="375" cy="401"></Circle>
      <Circle ref={ball4Ref} r="20" cx="410" cy="601"></Circle>
      <Circle ref={ball5Ref} r="20" cx="305" cy="801"></Circle>
      <Circle ref={ball6Ref} r="20" cx="203" cy="1001"></Circle>
      <Circle ref={ball7Ref} r="20" cx="203" cy="1201"></Circle>
      <Circle ref={ball8Ref} r="20" cx="293" cy="1401"></Circle>
      <Circle ref={ball9Ref} r="20" cx="370" cy="1601"></Circle>

      {/* <circle className="ball ball01" r="20" cx="50" cy="100"></circle>
      <circle className="ball ball02" r="20" cx="278" cy="201"></circle>
      <circle className="ball ball03" r="20" cx="327" cy="401"></circle>
      <circle className="ball ball04" r="20" cx="203" cy="601"></circle> */}
    </Svg>
  );
};

export default SvgTest;
