import { render } from "@testing-library/react";
import BarCHart from "./BarChart";
import React from "react";
import { BarChartData } from "../../pages/Page3";

describe("<BarChart />", () => {
  const mockData: BarChartData[] = [
    { name: "A", value: 1 },
    { name: "B", value: 2 },
  ];
  it("barChart render", () => {
    render(<BarCHart data={mockData} />);
  });

  //snapshot을 사용해서 ui비교하기?
});
