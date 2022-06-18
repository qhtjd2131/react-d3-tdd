import React, { forwardRef, useImperativeHandle, useRef } from "react";
import HeaderSection from "../components/pageCommonComponents/HeaderSection";
import SectionDivider from "../components/pageCommonComponents/SectionDivider";
import * as style from "./Page2.style";
import * as commonStyle from "./PageCommon.style";

const Page2 = forwardRef<HTMLTableSectionElement>((prop, ref) => {

  return (
    <commonStyle.PageBox ref={ref}>
      <commonStyle.ContentsWrapper>
        <HeaderSection text="Vertical-BarChart" />

        <SectionDivider />
        <commonStyle.BodySection>
        
        </commonStyle.BodySection>
      </commonStyle.ContentsWrapper>
    </commonStyle.PageBox>
  );
});

export default Page2;
