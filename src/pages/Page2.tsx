import React, { forwardRef, useState } from "react";
import HeaderSection from "../components/pageCommonComponents/HeaderSection";
import SectionDivider from "../components/pageCommonComponents/SectionDivider";
import VerticalBarChart from "../components/pageComponents/VerticalBarChart";
import * as d3 from "d3";
import { BarChartData } from "./Page3";
import * as commonStyle from "./PageCommon.style";

const Page2 = forwardRef<HTMLTableSectionElement>((prop, ref) => {
  const [data, setData] = useState<BarChartData[]>([
    { name: "A", value: 10 },
    { name: "B", value: 20 },
    { name: "C", value: 30 },
    { name: "D", value: 20 },
    { name: "E", value: 14 },
    { name: "F", value: 18 },
  ]);

  const setRandomData = () => {
    setData([
      { name: "A", value: d3.randomInt(3, 50)() },
      { name: "B", value: d3.randomInt(3, 50)() },
      { name: "C", value: d3.randomInt(3, 50)() },
      { name: "D", value: d3.randomInt(3, 50)() },
      { name: "E", value: d3.randomInt(3, 50)() },
      { name: "F", value: d3.randomInt(3, 50)() },
    ]);
  };

  return (
    <commonStyle.PageBox ref={ref}>
      <commonStyle.ContentsWrapper>
        <HeaderSection text="Vertical-BarChart" />

        <SectionDivider />
        <commonStyle.BodySection>
          <VerticalBarChart data={data} setRandomData={setRandomData} />
        </commonStyle.BodySection>
      </commonStyle.ContentsWrapper>
    </commonStyle.PageBox>
  );
});

export default Page2;
