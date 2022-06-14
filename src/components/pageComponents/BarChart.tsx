import React, { useEffect, useRef, useState } from "react";
import { select } from "d3-selection";
import * as d3 from "d3";
import { scaleLinear, scaleBand } from "d3-scale";
import * as style from "./BarChar.style";

const BarChart = () => {
  const barRef = useRef(null);
  const svgRef = useRef(null);
  const [data, setData] = useState<number[]>([
    12, 21, 13, 18, 14, 27, 16, 32, 22, 28, 225,
  ]);

  const xScale: any = scaleLinear()
    .domain([0, d3.max(data)!]) //참조범위
    .range([0, 600]); //return 범위 : 생성될 bar의 최대 width, 즉 최댓값을가진 bar는 700px가 된다.

  const yScale: any = scaleBand()
    //@ts-ignore
    .domain(d3.range(data.length))
    .range([0, 10 * data.length]); //svg bar height

  console.log(d3.range(data.length));
  useEffect(() => {
    //svg로 그린 barChart
    const svg = select(svgRef.current);
    const bar = svg
      .selectAll("g")
      .data(data)
      .join("g")
      .attr("transform", (d, i) => `translate(0, ${yScale(i) + i*4})`);

    bar
      .append("rect")
      .attr("fill", "#2c303a")
      .attr("width", xScale)
      .attr("height", yScale.bandwidth());

    bar
      .append("text")
      .attr("fill", "white")
      .attr("x", (d) => xScale(d) - 14)
      .attr("y", (yScale.bandwidth() - 1) / 2)
      .attr("dy", "0.35em")
      .text((d: any) => d);

    //d is data
  }, [data]);

  useEffect(() => {
    //div 로 그린 barChart
    const bar = select(barRef.current);
    bar
      .selectAll("div")
      .data(data)
      .join("div")
      .style("width", (d) => `${xScale(d)}px`)
      .style("height", "10px")
      .style("background", "#2c303a")
      .style("margin", "4px")
      .style("margin-left", "0px")
      .style("display", "flex")
      .style("justify-content", "flex-end")
      .style("align-items", "center")
      .text((d) => d);
  }, [data]);

  return (
    <style.BarChartWrapper>
      <style.Bar ref={barRef} />
      <style.SVG ref={svgRef} />
    </style.BarChartWrapper>
  );
};

export default BarChart;
