import { render } from "@testing-library/react";
import React from "react";
import VerticalBarChart from "./VerticalBarChart";

describe("<VerticalBarChart />", () => {
  const mockData = [
    { name: "A", value: 10 },
    { name: "B", value: 20 },
    { name: "C", value: 30 },
    { name: "D", value: 40 },
  ];
  it("vertical barChart render", () => {
    render(<VerticalBarChart data={mockData} />);
  });
});
