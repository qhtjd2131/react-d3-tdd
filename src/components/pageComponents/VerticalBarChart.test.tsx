import { render, screen } from "@testing-library/react";
import React from "react";
import VerticalBarChart from "./VerticalBarChart";
import "@testing-library/jest-dom";
import * as d3 from "d3";

const margin = { top: 20, right: 0, bottom: 30, left: 40 };
const width = 600;
const height = 400;
const scaleY = d3
  .scaleLinear()
  .domain([0, 50])
  .range([height - margin.bottom, margin.top]);

describe("<VerticalBarChart />", () => {
  const mockData = [
    { name: "A", value: 10 },
    { name: "B", value: 20 },
    { name: "C", value: 30 },
    { name: "D", value: 40 },
  ];
  it("<VerticalBarChart /> render", () => {
    render(<VerticalBarChart data={mockData} setRandomData={() => {}} />);
  });

  it("xAxis render", () => {
    render(<VerticalBarChart data={mockData} setRandomData={() => {}} />);
    const xAxis = screen.getByRole("xAxis");
    // Document 내에 xAxis가 존재하는가
    expect(xAxis).toBeInTheDocument();

    // xAxis 내에 A, B, C, D 가 존재하는가?
    expect(xAxis).toHaveTextContent("ABCD");
  });

  it("yAxis render", () => {
    render(<VerticalBarChart data={mockData} setRandomData={() => {}} />);
    const yAxis = screen.getByRole("yAxis");

    //Document 내에 yAxis가 존재하는가
    expect(yAxis).toBeInTheDocument();

    // yAxis 내에 50(최댓값) 이라는 텍스트가 존재하는가?
    expect(yAxis).toHaveTextContent("50");
  });

  it("bar render", () => {
    render(<VerticalBarChart data={mockData} setRandomData={() => {}} />);

    const bars = screen.getByRole("bar");
    const rect = screen.getByRole("rect-A");

    //Document 내에 Bar이 존재하는가
    expect(bars).toBeInTheDocument();

    //Document 내에 rect가 존재하는가
    expect(rect).toBeInTheDocument();

    //rect의 height가 데이터에 맞게 되는가? (데이터 기준은 첫번째 데이터 { name : A, value : 10 })
    expect(rect).toHaveStyle(
      `height : ${scaleY(0) - scaleY(mockData[0].value)}`
    );
  });
});
