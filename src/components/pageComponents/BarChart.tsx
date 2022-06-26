import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { BarChartData } from "../../pages/Page3";
import styled from "styled-components";

interface BarChartProps {
  maxWidth?: number;
  barSpace?: number;
  data: BarChartData[];
  setRandomData: () => void;
}
const BarChart = (props: BarChartProps) => {
  const svgRef = useRef(null);
  const { data, setRandomData } = props;
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };

  const width = 700;
  const height = 400;
  const maxBarWidth = width;

  const xScale: d3.ScaleLinear<number, number, never> = d3
    .scaleLinear()
    .domain([0, 50]) //참조범위
    .range([margin.left, width - margin.right]); //return 범위 : 생성될 bar의 최대 width

  const yScale = d3
    .scaleBand()
    .domain(data.map((d: BarChartData) => d.name))
    .range([margin.top, height - margin.bottom])
    .padding(0.3);

  useEffect(() => {
    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", [0, 0, width, height])
      .attr("width", "100%")
      .attr("height", `${height}`);

    const bar = svg
      .selectAll("rect")
      .data(data)
      .join("rect")
      .transition()
      .duration(300);
    bar
      .attr("x", margin.left)
      //@ts-ignore
      .attr("y", (d: BarChartData) => yScale(d.name))
      .attr("width", (d) => xScale(d.value) - margin.left)
      .attr("height", yScale.bandwidth())
      .attr("fill", "#2c303a")
      .attr("key", (d) => d.name);

    // const text = svg
    //   .selectAll("text")
    //   .data(data)
    //   .join("text")
    //   .transition()
    //   .duration(300);
    // text
    //   .attr("fill", "white")
    //   .attr("x", (d) => xScale(d.value) - margin.left + 14)
    //   //@ts-ignore
    //   .attr("y", (d: BarChartData) => yScale(d.name) + 36)
    //   .text((d) => d.value);

    /// text 랜더링 시 update 버튼 누르면 x y axis가 사라지는 현상 수정해얗마!
  }, [data]);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
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
  }, []);

  const ButtonUpdateClickHandler = () => {
    setRandomData();
  };

  return (
    <BarChartWrapper>
      <SVG ref={svgRef} />
      <ButtonUpdate onClick={ButtonUpdateClickHandler}>update</ButtonUpdate>
    </BarChartWrapper>
  );
};

export default BarChart;

const BarChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content: flex-start;
  align-items: center; */
  flex-direction: column;
  align-items: center;
`;
const SVG = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
})`
  font-size: 24px;
  margin: 12px;
  display: flex;
`;

const ButtonUpdate = styled.button`
  width: 140px;
  height: 60px;
  font-size: 18px;
  letter-spacing: 1.2px;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
  background-color: #2c303a;
  color: white;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.2s;
  border: none;
  &:hover {
    background-color: white;
    color: #2c303a;
  }
`;
