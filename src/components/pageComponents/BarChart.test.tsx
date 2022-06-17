import { render } from "@testing-library/react";
import BarCHart from "./BarChart";
import React from "react";



describe("<BarChart />", () => {
  it("barChart render", () => {
    render(<BarCHart />);
  });

  //snapshot을 사용해서 ui비교하기?
});
