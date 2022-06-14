import React, { useEffect, useRef, useState } from "react";
import { select } from "d3-selection";
import * as style from "./BarChar.style";

const BarChart = () => {
  const barRef = useRef(null);
  const [data, setData] = useState([12, 21, 13, 18, 14, 27, 16]);
  useEffect(() => {
    const bar = select(barRef.current);
    bar
      .selectAll("div")
      .data(data)
      .join("div")
      .style("width", (d) => `${d * 10}px`)
      .style("height", "20px")
      .style("background", "#2c303a")
      .style("padding", "4px")
      .style("margin", "6px")
      .text((d) => d);
  }, [data]);

  return (
    <style.BarChartWrapper>
      <style.Bar ref={barRef} />
    </style.BarChartWrapper>
  );
};

export default BarChart;
