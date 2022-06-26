import React, { useEffect, useRef } from "react";
import { BarChartData } from "../../pages/Page1";
import * as d3 from "d3";
import styled from "styled-components";

interface VerticalBarChartProps {
  data: BarChartData[];
}

const VerticalBarChart = (props: VerticalBarChartProps) => {
  const { data } = props;
  const svgRef = useRef(null);
  
  const width = 600;
  const height = 400;
  const margin = { top: 20, right: 0, bottom: 30, left: 40 };

  const scaleX = d3
    .scaleBand()
    .domain(data.map((d) => d.name))
    .range([margin.left, width - margin.right]).padding(0.2);

  const scaleY = d3
    .scaleLinear()
    .domain([0,50])
    .range([height - margin.bottom, margin.top]);

  useEffect(() => {
    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", [0, 0, width, height])
      .attr("width", `${width}px`)
      .attr("height", `${height}px`);

    svg
      .append("g")
      .attr("fill", "#2c303a")
      .selectAll("rect")
      .data(data)
      .join("rect")
      //@ts-ignore
      .attr("x", (d: BarChartData) => scaleX(d.name))
      .attr("y", (d) => scaleY(d.value))
      .attr("width", scaleX.bandwidth())
      .attr("height", (d) => scaleY(0) - scaleY(d.value));

    svg
      .append("g")
      .attr("stroke", "white")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(scaleX));

    svg
      .append("g")
      .attr("stroke", "white")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(scaleY));

    svg.selectAll("text").attr("font-size", "20px");
    svg.selectAll("path").attr("stroke", "white");
    svg.selectAll("line").attr("stroke", "white");

    return () => {
      svg.selectAll("*").remove();
    };
  }, [data]);

  return (
    <BarChartWrapper>
      <SVG ref={svgRef} />
    </BarChartWrapper>
  );
};

export default VerticalBarChart;

 const BarChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content: flex-start;
  align-items: center; */
  flex-direction: column;
`;
 const SVG = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
})`
  font-size: 24px;
  margin: 12px;
`;