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
  width: 100%;
  height: 100%;
  font-size: 14px;
`;

export const Bar = styled.div`
  font-size: 14px;
  color: white;
  margin: 40px 0;
`;
