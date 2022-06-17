import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import * as style from "./BarChar.style";

interface BarCharData {
  name: string;
  value: number;
}
interface BarChartProps {
  barHegiht?: number;
  maxWidth?: number;
  barSpace?: number;
  data?: any;
}
const BarChart = (props: BarChartProps) => {
  const svgRef = useRef(null);
  const [data, setData] = useState<BarCharData[]>([
    { name: "A", value: 5 },
    { name: "B", value: 31 },
    { name: "C", value: 42 },
    { name: "D", value: 11 },
  ]);
  const barHeight = 30;
  const maxBarWidth = 700;
  const barSpace = 4;
  const width = maxBarWidth;

  const onSetValue = (valueNumber: number, index: number) => {
    const dataTemp: BarCharData[] = [...data];
    dataTemp[index].value =
      typeof valueNumber != "number" ? parseInt(valueNumber) : valueNumber;
    setData(dataTemp);
  };

  const margin = { top: 20, right: 0, bottom: 30, left: 20 };
  const xScale: d3.ScaleLinear<number, number, never> = d3
    .scaleLinear()
    .domain([0, d3.max<any>(data.map((d: BarCharData) => d.value))]) //참조범위
    .range([0, maxBarWidth]); //return 범위 : 생성될 bar의 최대 width

  const yScale: d3.ScaleBand<string> = d3
    .scaleBand<string>()
    .domain(data.map((d) => d.name))
    .range([0, barHeight * data.length]); //svg bar height

  const axisXScale = d3
    .scaleBand()
    .domain(data.map((d) => d.name))
    .rangeRound([margin.left, width - margin.right])
    .padding(0.1);

  // const axisYScale =
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.attr("width", "100%").attr("height", "200");
    const bar = svg
      .selectAll("g")
      .data(data)
      .join("g")
      .attr(
        "transform",
        (data, index: number) =>
          `translate(28, ${yScale(data.name)! + index * barSpace})`
      ); //bar의 yPosition + 사이공간 크기

    bar
      .append("rect")
      .attr("fill", "#2c303a")
      .attr("width", (data: BarCharData) => {
        return xScale(data.value);
      })
      .attr("height", yScale.bandwidth());
    // .attr("transform", `translate(28, 0)`);

    bar
      .append("text")
      .attr("fill", "white")
      .attr("x", (data: BarCharData) => xScale(data.value) - 22)
      .attr("y", (yScale.bandwidth() - 1) / 2)
      .attr("dy", "0.4em")
      .text((data: BarCharData) => data.value);

    bar
      .append("text")
      .attr("fill", "white")
      .attr("x", "-28")
      .attr("y", (yScale.bandwidth() - 1) / 2)
      .attr("dy", "0.4em")
      .text((data: BarCharData) => data.name);

    //d is data

    return () => {
      svg.selectAll("*").remove();
    };
  }, [data]);

  return (
    <style.BarChartWrapper>
      <style.SVG ref={svgRef} />

      {data.map((d, index) => (
        <style.RangeWrapper>
          <style.RangeLabel>{d.name}</style.RangeLabel>
          <style.RangeInput
            type="range"
            min="1"
            max="50"
            step="1"
            value={data[index].value}
            onChange={(e: any) => {
              onSetValue(e.target.value, index);
            }}
          />
        </style.RangeWrapper>
      ))}
      {/* <style.RangeWrapper>
        <style.RangeLabel>B</style.RangeLabel>
        <style.RangeInput
          type="range"
          step="1"
          value={data[1].value}
          min="1"
          max="50"
          onChange={(e: any) => {
            onSetValue(e.target.value, 1);
          }}
        />
      </style.RangeWrapper> */}
    </style.BarChartWrapper>
  );
};

export default BarChart;
