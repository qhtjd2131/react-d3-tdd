import React, { useRef } from "react";
import * as style from "./Main.style";
import Tsparticles from "../components/Tsparticles";
import { useSetMainAnimation, useSetMainTextAnimation } from "./Main.hooks";
import { mainText } from "../information";

const Main = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLDivElement[]>([]);
  useSetMainAnimation(mainRef);
  useSetMainTextAnimation(textRefs);

  // data 를 어떤식으로 저장하고 관리할것인가?

  // 변수하나로 페이지 구조를 모두 변경할 수 있을까?

  // intro 부분을 기술스택으로 변경하면 어떨까?

  const textContents = Object.keys(mainText).map((key: string, index) => {
    return (
      <style.OneText
        key={key}
        data-testid={"main-text-" + index}
        ref={(el: HTMLDivElement) => (textRefs.current[index] = el)}
      >
        {mainText[key]}
      </style.OneText>
    );
  });
  return (
    <style.OneMain ref={mainRef}>
      <Tsparticles />
      {textContents}
    </style.OneMain>
  );
};

export default Main;
