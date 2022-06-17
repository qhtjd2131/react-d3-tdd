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
  font-size: 14px;
  margin: 12px;
`;

export const Bar = styled.div`
  font-size: 14px;
  color: white;
  margin: 40px 0;
`;

export const RangeWrapper = styled.div`
  margin: 0 auto;
  
`;

export const RangeInput = styled.input``;

export const RangeLabel = styled.label`
  color: white;
  font-size: 20px;
  margin-right: 20px;
`;

//스타일링하기
//d3.js 그리는 방법알기
// test파일작성하기 유닛단위로
