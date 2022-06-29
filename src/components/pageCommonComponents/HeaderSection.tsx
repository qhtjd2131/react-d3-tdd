import React, { forwardRef } from "react";
import styled from "styled-components";

interface HeaderSectionProps {
  text: string;
}
const HeaderSection = forwardRef<HTMLHeadingElement, HeaderSectionProps>(
  (props, ref) => {
    const { text } = props;
    return (
      <HeaderSectionBox>
        <HeaderText ref={ref}>{text}</HeaderText>
      </HeaderSectionBox>
    );
  }
);
export default HeaderSection;

const HeaderSectionBox = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: ${(props) => props.theme.page_header_height};
  box-sizing: border-box;
  padding: 4px;
  @media only screen and (max-width: 800px) {
    height: ${(props) => props.theme.mobile_page_header_height};
  }
`;

const HeaderText = styled.h1`
  font-size: 40px;
  letter-spacing: 1px;
  color: ${(props) => props.theme.main_text_color};
  @media only screen and (max-width: 800px) {
    font-size: 20px;
  }
`;
