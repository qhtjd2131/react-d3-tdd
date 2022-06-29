import React, { useEffect, useRef } from "react";
import { BarChartData } from "../../pages/Page1";
import * as d3 from "d3";
import styled from "styled-components";

interface VerticalBarChartProps {
  data: BarChartData[];
  setRandomData: () => void;
}

const VerticalBarChart = (props: VerticalBarChartProps) => {
  const { data, setRandomData } = props;
  const svgRef = useRef(null);
  const barRef = useRef(null);
  const xAxisRef = useRef(null);
  const yAxisRef = useRef(null);

  const width = 600;
  const height = 400;
  const margin = { top: 20, right: 0, bottom: 30, left: 40 };

  const scaleX = d3
    .scaleBand()
    .domain(data.map((d) => d.name))
    .range([margin.left, width - margin.right])
    .padding(0.2);

  const scaleY = d3
    .scaleLinear()
    .domain([0, 50])
    .range([height - margin.bottom, margin.top]);

  const ButtonUpdateClickHandler = () => {
    setRandomData();
  };

  useEffect(() => {
    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", [0, 0, width, height])
      .attr("width", "100%")
      .attr("height", `${height}px`);

    d3.select(barRef.current)
      .attr("fill", "#2c303a")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .transition()
      .duration(300)
      .attr("x", (d: BarChartData): any => scaleX(d.name))
      .attr("y", (d) => scaleY(d.value))
      .attr("width", scaleX.bandwidth())
      .attr("height", (d) => scaleY(0) - scaleY(d.value))
      .attr("role", (d) => "rect-" + d.name);

    d3.select(xAxisRef.current)
      .call(d3.axisBottom(scaleX) as any)
      .attr("stroke", "white")
      .attr("transform", `translate(0,${height - margin.bottom})`);

    d3.select(yAxisRef.current)
      .attr("stroke", "white")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(scaleY) as any);

    svg.selectAll("text").attr("font-size", "20px");
    svg.selectAll("path").attr("stroke", "white");
    svg.selectAll("line").attr("stroke", "white");
  }, [data]);

  return (
    <BarChartWrapper>
      <SVG ref={svgRef}>
        <g role="bar" ref={barRef} />
        <g role="xAxis" ref={xAxisRef} />
        <g role="yAxis" ref={yAxisRef} />
      </SVG>
      <ButtonUpdate onClick={ButtonUpdateClickHandler}>update</ButtonUpdate>
    </BarChartWrapper>
  );
};

export default VerticalBarChart;

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
