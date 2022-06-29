import React, { useEffect, useRef } from "react";
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
  const chartRef = useRef(null);
  const xAxisRef = useRef(null);
  const yAxisRef = useRef(null);
  const { data, setRandomData } = props;
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };

  const width = 700;
  const height = 400;
  const maxBarWidth = width;

  const xScale: d3.ScaleLinear<number, number, never> = d3
    .scaleLinear()
    .domain([0, 50]) //참조범위
    .range([margin.left, width - margin.right]); //return 범위 : 생성될 bar의 최대 width

  const yScale: d3.ScaleBand<string> = d3
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

    const chart = d3.select(chartRef.current);

    const bar = chart
      .selectAll("rect")
      .data(data)
      .join("rect")
      .transition()
      .duration(300)
      .attr("x", margin.left)
      //@ts-ignore
      .attr("y", (d: BarChartData): any => yScale(d.name))
      .attr("width", (d) => xScale(d.value) - margin.left)
      .attr("height", yScale.bandwidth())
      .attr("fill", "#2c303a")
      .attr("key", (d) => d.name);

    const text = chart
      .selectAll("text")
      .data(data)
      .join("text")
      .transition()
      .duration(300)
      .attr("fill", "white")
      .attr("x", (d) => xScale(d.value) - margin.left + 10)
      //@ts-ignore
      .attr("y", (d: BarChartData) => yScale(d.name) + 36)
      .text((d) => d.value);

    return () => {};
  }, [data]);

  useEffect(() => {
    const xAxis = d3.select(xAxisRef.current);
    const yAxis = d3.select(yAxisRef.current);

    xAxis
      .append("g")
      .attr("stroke", "white")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale));

    yAxis
      .append("g")
      .attr("stroke", "white")
      .attr("transform", `translate(${margin.left} ,0)`)
      .call(d3.axisLeft(yScale));

    xAxis.selectAll("text").attr("font-size", "18px");
    xAxis.selectAll("path").attr("stroke", "white");
    xAxis.selectAll("line").attr("stroke", "white");

    yAxis.selectAll("text").attr("font-size", "18px");
    yAxis.selectAll("path").attr("stroke", "white");
    yAxis.selectAll("line").attr("stroke", "white");
  }, []);

  const ButtonUpdateClickHandler = () => {
    setRandomData();
  };

  return (
    <BarChartWrapper>
      <SVG ref={svgRef}>
        <g ref={chartRef} role="chart" />
        <g ref={xAxisRef} role="xAxis" />
        <g ref={yAxisRef} role="yAxis" />
      </SVG>
      <ButtonUpdate onClick={ButtonUpdateClickHandler}>update</ButtonUpdate>
    </BarChartWrapper>
  );
};

export default BarChart;

const BarChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
