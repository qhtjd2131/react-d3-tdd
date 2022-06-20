import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import * as style from "./BarChar.style";
import { BarChartData } from "../../pages/Page3";

interface BarChartProps {
  maxWidth?: number;
  barSpace?: number;
  data: BarChartData[];
}
const BarChart = (props: BarChartProps) => {
  const svgRef = useRef(null);
  const { data } = props;

  const maxBarWidth = 700;
  const barSpace = 0;
  const width = maxBarWidth;
  const height = 300;

  const margin = { top: 20, right: 0, bottom: 30, left: 40 };

  const xScale: d3.ScaleLinear<number, number, never> = d3
    .scaleLinear()
    .domain([0, 50]) //참조범위
    .range([margin.left, width - margin.right]); //return 범위 : 생성될 bar의 최대 width

  const yScale = d3
    .scaleBand()
    .domain(data.map((d: BarChartData) => d.name))
    .range([margin.top, height - margin.bottom])
    .padding(0.1);

  useEffect(() => {
    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", [0, 0, width, height])
      .attr("width", `${width}`)
      .attr("height", `${height}`);

    svg
      .append("g")
      .attr("fill", "#2c303a")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", margin.left)
      //@ts-ignore
      .attr("y", (d: BarChartData) => yScale(d.name) + yScale.bandwidth() / 4)
      .attr("width", (d) => xScale(d.value) - margin.left)
      .attr("height", yScale.bandwidth() / 2);

    // const bar = svg
    //   .selectAll("g")
    //   .data(data)
    //   .join("g")
    //   .attr(
    //     "transform",
    //     (data, index: number) =>
    //       `translate(0, ${yScale(data.name)! + index * barSpace})`
    //   );

    // //bar
    // bar
    //   .append("rect")
    //   .attr("fill", "#2c303a")
    //   .attr("width", (data: BarChartData) => xScale(data.value))
    //   .attr("height", yScale.bandwidth());

    // //value text
    // bar
    //   .append("text")
    //   .attr("fill", "white")
    //   .attr("x", (data: BarChartData) => xScale(data.value) - 22)
    //   .attr("y", (yScale.bandwidth() - 1) / 2)
    //   .attr("dy", "0.4em")
    //   .text((data: BarChartData) => data.value);

    // // name text
    // bar
    //   .append("text")
    //   .attr("fill", "white")
    //   .attr("x", "-28")
    //   .attr("y", (yScale.bandwidth() - 1) / 2)
    //   .attr("dy", "0.4em")
    //   .text((data: BarChartData) => data.name);

    //d is data

    svg
      .append("g")
      .attr("stroke", "white")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale));

    svg
      .append("g")
      .attr("stroke", "white")
      .attr("transform", `translate(${margin.left} ,0)`)
      .call(d3.axisLeft(yScale));

    svg.selectAll("text").attr("font-size", "20px");
    svg.selectAll("path").attr("stroke", "white");
    svg.selectAll("line").attr("stroke", "white");

    return () => {
      svg.selectAll("*").remove();
    };
  }, [data]);

  useEffect(() => {
    // const svg = d3.select(svgRef.current);
    // svg
    //   .append("g")
    //   .attr("transform", `translate(0,${height - margin.bottom})`)
    //   .call(d3.axisBottom(xScale))
    //   .attr("stroke", "white")
    //   .attr("fill", "white");
    // svg
    //   .append("g")
    //   .attr("transform", `translate(${margin.left},0)`)
    //   .attr("stroke", "white")
    //   .call(d3.axisLeft(axisYScale));
  }, []);

  return (
    <style.BarChartWrapper>
      <style.SVG ref={svgRef} />
    </style.BarChartWrapper>
  );
};

export default BarChart;
