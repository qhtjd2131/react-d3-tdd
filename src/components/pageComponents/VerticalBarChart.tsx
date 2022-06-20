import React, { useEffect, useRef } from "react";
import { BarChartData } from "../../pages/Page1";
import * as style from "./VerticalBarChart.style";
import * as d3 from "d3";

interface VerticalBarChartProps {
  data: {
    name: string;
    value: number;
  }[];
}

const VerticalBarChart = (props: VerticalBarChartProps) => {
  const { data } = props;
  return <></>;
};

export default VerticalBarChart;
