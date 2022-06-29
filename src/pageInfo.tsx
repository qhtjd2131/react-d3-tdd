import React, { useRef } from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

const label = ["Main", "Horizontal-BarChart", "Vertical-BarChart"];

export const getPageContents = (
  pageRefs: React.MutableRefObject<HTMLTableSectionElement[]>
) => {
  const pages = [
    <Page1
      key={label[0]}
      ref={(el: HTMLTableSectionElement) => (pageRefs.current[0] = el)}
    />,
    <Page2
      key={label[1]}
      ref={(el: HTMLTableSectionElement) => (pageRefs.current[1] = el)}
    />,

    //여기에 페이지를 추가 해 주세요. 라벨도 반드시 추가해야함.
  ];

  return pages;
};

export const getPageSectionLabel = () => {
  return label;
};
