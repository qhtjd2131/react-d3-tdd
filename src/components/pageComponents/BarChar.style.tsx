import styled from "styled-components";

export const BarChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SVG = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
})`
  width: 100%;
  height: 100%;
`;

export const Bar = styled.div`
  font-size: 14px;
  text-align: right;
  color : white;
`;
