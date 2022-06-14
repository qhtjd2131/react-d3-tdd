import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Page3 from "./Page3";

describe("<Page3 />", () => {
  it("page 3 render", () => {
    render(<Page3 />);
  });

  it("hello text render", () =>{
      render(<Page3 />);
      expect(screen.getByText("hello")).toBeInTheDocument();
  })
});
