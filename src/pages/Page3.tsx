import React, { forwardRef } from "react";
import HeaderSection from "../components/pageCommonComponents/HeaderSection";
import SectionDivider from "../components/pageCommonComponents/SectionDivider";
import BarChart from "../components/pageComponents/BarChart";
import * as style from "./Page3.style";
import * as commonStyle from "./PageCommon.style";

const Page3 = forwardRef<HTMLTableSectionElement>((props, ref) => {
  return (
    <commonStyle.PageBox ref={ref}>
      <commonStyle.ContentsWrapper>
        <HeaderSection text="page 3" />
        <SectionDivider />
        <BarChart />

        <style.TestText>hello</style.TestText>
      </commonStyle.ContentsWrapper>
    </commonStyle.PageBox>
  );
});

export default Page3;
