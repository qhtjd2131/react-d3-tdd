import React from "react";
import { render } from "@testing-library/react";
import Page1 from "./Page1";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

describe("<Page1 />", () => {
  it("Page1 render", () => {
    const { getByText } = render(<Page1 />);
    getByText(
      "React의 핵심 개념과 동작 원리를 중심으로 이유 있는 코드를 작성하기 위해 항상 고민합니다."
    );
  });
});
