import React, { forwardRef, useState } from "react";
import HeaderSection from "../components/pageCommonComponents/HeaderSection";
import SectionDivider from "../components/pageCommonComponents/SectionDivider";
import BarChart from "../components/pageComponents/BarChart";
import BarChartSlider from "../components/pageComponents/BarChartSlider";
import * as style from "./Page3.style";
import * as commonStyle from "./PageCommon.style";
export interface BarChartData {
  name: string;
  value: number;
}
const Page3 = forwardRef<HTMLTableSectionElement>((props, ref) => {
  const [data, setData] = useState<BarChartData[]>([
    { name: "A", value: 5 },
    { name: "B", value: 31 },
    { name: "C", value: 42 },
    { name: "D", value: 11 },
  ]);

  return (
    <commonStyle.PageBox ref={ref}>
      <commonStyle.ContentsWrapper>
        <HeaderSection text="Horizontal-BarChart" />
        <SectionDivider />
        <commonStyle.BodySection>
          <BarChart data={data} />
          <BarChartSlider data={data} setData={setData} />
        </commonStyle.BodySection>
      </commonStyle.ContentsWrapper>
    </commonStyle.PageBox>
  );
});

export default Page3;
