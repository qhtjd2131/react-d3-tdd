import { render, screen } from "@testing-library/react";
import BarCHart from "./BarChart";
import React from "react";
import { BarChartData } from "../../pages/Page3";
import "@testing-library/jest-dom";

describe("<BarChart />", () => {
  const mockData: BarChartData[] = [
    { name: "A", value: 1 },
    { name: "B", value: 2 },
  ];

  // - VerticalBarChart가 랜더링 되는가?

  it("barChart render", () => {
    render(
      <BarCHart
        data={mockData}
        setRandomData={() => {
          console.log("setData(d3.randomInt(2,50)");
        }}
      />
    );
  });
  // - Bar의 데이터에 맞게 랜더링 되는가?

  it("data binding", () => {
    render(
      <BarCHart
        data={mockData}
        setRandomData={() => {
          console.log("setData(d3.randomInt(2,50)");
        }}
      />
    );
    screen.getByRole("chart");
    screen.getByRole("xAxis");
    screen.getByRole("yAxis");
  });

  // - X축이 랜더링 되는가?

  // - Y축(A,B,C,D)이 랜더링 되는가?
  // - updatae button이 랜더링 되는가?
  // - Bar이 데이터에 맞게 랜더링 되는가?
});
//snapshot을 사용해서 ui비교하기?
