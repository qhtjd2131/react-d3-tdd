import React, {
  forwardRef,
  useState,
} from "react";
import HeaderSection from "../components/pageCommonComponents/HeaderSection";
import SectionDivider from "../components/pageCommonComponents/SectionDivider";
import VerticalBarChart from "../components/pageComponents/VerticalBarChart";
import * as style from "./Page2.style";
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

  return (
    <commonStyle.PageBox ref={ref}>
      <commonStyle.ContentsWrapper>
        <HeaderSection text="Vertical-BarChart" />

        <SectionDivider />
        <commonStyle.BodySection>
          <VerticalBarChart data={data} />
        </commonStyle.BodySection>
      </commonStyle.ContentsWrapper>
    </commonStyle.PageBox>
  );
});

export default Page2;
