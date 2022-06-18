import styled from "styled-components";

export const BarChartWrapper = styled.div`
  width: 100%;
  height: 50%;
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

export const Bar = styled.div`
  font-size: 14px;
  color: white;
  margin: 40px 0;
`;

//스타일링하기
//d3.js 그리는 방법알기
// test파일작성하기 유닛단위로
