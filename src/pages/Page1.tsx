import * as d3 from "d3";
import React, { forwardRef, useState } from "react";
import HeaderSection from "../components/pageCommonComponents/HeaderSection";
import SectionDivider from "../components/pageCommonComponents/SectionDivider";
import BarChart from "../components/pageComponents/BarChart";
import * as commonStyle from "./PageCommon.style";
export interface BarChartData {
  name: string;
  value: number;
}
const Page1 = forwardRef<HTMLTableSectionElement>((props, ref) => {
  const [data, setData] = useState<BarChartData[]>([
    { name: "A", value: 5 },
    { name: "B", value: 31 },
    { name: "C", value: 42 },
    { name: "D", value: 11 },
  ]);

  const setRandomData = () => {
    const data : BarChartData[] = [
      { name: "A", value: d3.randomInt(2, 50)() },
      { name: "B", value: d3.randomInt(2, 50)() },
      { name: "C", value: d3.randomInt(2, 50)() },
      { name: "D", value: d3.randomInt(2, 50)() },
    ];

    setData(data);
  };

  return (
    <commonStyle.PageBox ref={ref}>
      <commonStyle.ContentsWrapper>
        <HeaderSection text="Horizontal-BarChart" />
        <SectionDivider />
        <commonStyle.BodySection>
          <BarChart data={data} setRandomData={setRandomData} />
        </commonStyle.BodySection>
      </commonStyle.ContentsWrapper>
    </commonStyle.PageBox>
  );
});

export default Page1;
