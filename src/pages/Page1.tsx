import React, { forwardRef, useRef } from "react";
import HeaderSection from "../components/pageCommonComponents/HeaderSection";
import SectionDivider from "../components/pageCommonComponents/SectionDivider";
import { useBodyTextAnimaition, useHeaderAnimation } from "./Page1.hooks";
import * as style from "./Page1.style";
import * as commonStyle from "./PageCommon.style";

const Page1 = forwardRef<HTMLTableSectionElement>((props, ref) => {
  const headerTextRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const bodyTextRefs = useRef<HTMLDivElement[]>([]);

  useHeaderAnimation(headerTextRef);
  useBodyTextAnimaition(bodyTextRefs);

  

  const bodyData = [
    "React의 핵심 개념과 동작 원리를 중심으로 이유 있는 코드를 작성하기 위해 항상 고민합니다.",
    "TypeScript를 적용하여 보다 체계적이고 생산적으로 개발했습니다.",
    "Gatsby를 사용하여 블로그를 제작했습니다. 제작된 블로그는 Gatsby Cloud를 통해 배포하였습니다.",
    "create-react-app 없이 프로젝트를 진행하여 react, babel, webpack의 관계를 파악하고, 더 나아가 웹 생태계를 이해하려고 노력했습니다.",
    "Animation에 관심이 있으며, GSAP(GreenSocks)를 사용한 개발 경험이 있습니다.",
  ];

  return (
    <commonStyle.PageBox ref={ref}>
      <commonStyle.ContentsWrapper>
        <HeaderSection ref={headerTextRef} text={"Intro"} />
        <SectionDivider />

        <commonStyle.BodySection>
          {bodyData.map((text, index) => (
            <style.BodyText
              key={text}
              ref={(el: HTMLDivElement) => (bodyTextRefs.current[index] = el)}
            >
              {text}
            </style.BodyText>
          ))}
        </commonStyle.BodySection>
      </commonStyle.ContentsWrapper>
    </commonStyle.PageBox>
  );
});

export default Page1;
