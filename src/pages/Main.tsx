import React, { useRef } from "react";
import Tsparticles from "../components/Tsparticles";
import { useSetMainAnimation, useSetMainTextAnimation } from "./Main.hooks";
import { mainText } from "../information";
import styled from "styled-components";

const Main = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLDivElement[]>([]);
  useSetMainAnimation(mainRef);
  useSetMainTextAnimation(textRefs);

  const textContents = Object.keys(mainText).map((key: string, index) => {
    return (
      <OneText
        key={key}
        data-testid={"main-text-" + index}
        ref={(el: HTMLDivElement) => (textRefs.current[index] = el)}
      >
        {mainText[key]}
      </OneText>
    );
  });
  return (
    <OneMain ref={mainRef}>
      <Tsparticles />
      {textContents}
    </OneMain>
  );
};

export default Main;

const OneMain = styled.div`
  background-color: ${(props) => props.theme.main_bg_color};
  width: 100%;
  height: calc(var(--vh) * 100);
  overflow: hidden;
`;

const OneText = styled.div`
  font-size: 40px;
  color: white;
  font-weight: 600;
  position: absolute;
  right: 0;
  opacity: 0;
  white-space: nowrap;

  @media ${(props) => props.theme.size_10} {
    font-size: 32px;
  }

  @media ${(props) => props.theme.size_8} {
    font-size: 24px;
  }

  @media ${(props) => props.theme.size_6} {
    font-size: 18px;
  }
`;
