import React, { useEffect, useLayoutEffect, useRef } from "react";
import {
  useSetLinkAnimation,
  useSetNavLink,
  useSetPathAnimaition,
} from "./scrollNav.hooks";
import * as constants from "../../constants";
import * as style from "./ScrollNav.style";
import theme from "../../style/theme";

interface ScrollNavProps {
  pageRefs: React.MutableRefObject<HTMLElement[]>
}
const ScrollNav = ( props : ScrollNavProps ) => {
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
        <style.SectionLink
          key={index}
          ref={(el: HTMLAnchorElement) => {
            sectionLinkRefs.current[index] = el;
          }}
          style={index === 0 ? { fontWeight: "600", color: theme.side_text_active_color } : {}}
        >
          {constants.SECTION_LABEL[index] ? constants.SECTION_LABEL[index] : "?"}
        </style.SectionLink>
      );
    });

  return (
    <style.ScrollNavBox>
      <style.ContentsWrapper>
        <style.SectionWrapper>
          <style.BackPath>
            <style.FrontPath
              ref={frontPathRef}
              id="frontPath"
            ></style.FrontPath>
          </style.BackPath>
        </style.SectionWrapper>
        <style.TextWrapper>{sectionLinkContents}</style.TextWrapper>
      </style.ContentsWrapper>
    </style.ScrollNavBox>
  );
};

export default ScrollNav;
