import React, { forwardRef, useState } from "react";
import HeaderSection from "../components/pageCommonComponents/HeaderSection";
import SectionDivider from "../components/pageCommonComponents/SectionDivider";
import * as style from "./Page3.style";
import * as commonStyle from "./PageCommon.style";
export interface BarChartData {
  name: string;
  value: number;
}
const Page3 = forwardRef<HTMLTableSectionElement>((props, ref) => {
  return (
    <commonStyle.PageBox ref={ref}>
      <commonStyle.ContentsWrapper>
        <HeaderSection text="page3" />
        <SectionDivider />
        <commonStyle.BodySection>


        </commonStyle.BodySection>
      </commonStyle.ContentsWrapper>
    </commonStyle.PageBox>
  );
});

export default Page3;
