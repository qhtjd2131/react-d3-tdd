import React, {  useRef } from "react";
import {
  useSetLinkAnimation,
  useSetNavLink,
  useSetPathAnimaition,
} from "./scrollNav.hooks";
import * as constants from "../../constants";
import theme from "../../style/theme";
import styled from "styled-components";

interface ScrollNavProps {
  pageRefs: React.MutableRefObject<HTMLElement[]>;
}
const ScrollNav = (props: ScrollNavProps) => {
  const sectionLinkRefs = useRef<HTMLAnchorElement[]>([]);
  const frontPathRef = useRef<HTMLDivElement>(null);
  const pageRefs = props.pageRefs;

  useSetPathAnimaition(frontPathRef);
  useSetNavLink(sectionLinkRefs, pageRefs);
  useSetLinkAnimation(sectionLinkRefs);

  const sectionLinkContents = new Array(constants.PAGE_COUNT)
    .fill(0)
    .map((_, index) => {
      return (
        <SectionLink
          key={index}
          ref={(el: HTMLAnchorElement) => {
            sectionLinkRefs.current[index] = el;
          }}
          style={
            index === 0
              ? { fontWeight: "600", color: theme.side_text_active_color }
              : {}
          }
        >
          {constants.SECTION_LABEL[index]
            ? constants.SECTION_LABEL[index]
            : "?"}
        </SectionLink>
      );
    });

  return (
    <ScrollNavBox>
      <ContentsWrapper>
        <SectionWrapper>
          <BackPath>
            <FrontPath ref={frontPathRef} id="frontPath"></FrontPath>
          </BackPath>
        </SectionWrapper>
        <TextWrapper>{sectionLinkContents}</TextWrapper>
      </ContentsWrapper>
    </ScrollNavBox>
  );
};

export default ScrollNav;

const ScrollNavBox = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const SectionWrapper = styled.div`
  height: 100%;
  width: 60px;
`;

const BackPath = styled.div`
  width: 4px;
  height: 100%;
  background-color: ${(props) => props.theme.side_path_bg_color};
  margin: 0 auto;
  overflow: hidden;
`;
const FrontPath = styled.div`
  width: 4px;
  height: 1%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.side_path_color};
`;

const TextWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SectionLink = styled.a`
  font-size: 20px;
  cursor: pointer;
  color: ${(props) => props.theme.side_text_normal_color};
`;
