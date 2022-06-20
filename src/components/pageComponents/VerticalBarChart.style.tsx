import styled from "styled-components";

export const BarChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content: flex-start;
  align-items: center; */
  flex-direction: column;
`;
export const SVG = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
})`
  font-size: 24px;
  margin: 12px;
`;
