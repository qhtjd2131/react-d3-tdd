import styled from "styled-components";

export const GlobalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* overflow: hidden; */
  overflow: hidden;
  background-color: ${(props) => props.theme.side_bg_color};
`;

export const PageBox = styled.section`
  width: calc(100% - (${(props) => props.theme.sidebar_width}));
  margin-left: ${(props) => props.theme.sidebar_width};
  height: calc(var(--vh) * 100);
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  box-sizing: border-box;
  background-color: gray;
`;