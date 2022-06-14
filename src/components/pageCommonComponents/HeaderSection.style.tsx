import styled from "styled-components";

export const HeaderSectionBox = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: ${(props) => props.theme.page_header_height};
  box-sizing: border-box;
  padding: 4px;
`;

export const HeaderText = styled.h1`
  font-size: 40px;
  letter-spacing: 1px;
  color: ${(props) => props.theme.main_text_color};
`;
