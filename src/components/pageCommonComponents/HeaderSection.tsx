import React, { forwardRef } from "react";
import * as style from "./HeaderSection.style";

interface HeaderSectionProps {
  text: string;
}
const HeaderSection = forwardRef<HTMLHeadingElement, HeaderSectionProps>(
  (props, ref) => {
    const { text } = props;
    return (
      <style.HeaderSectionBox>
        <style.HeaderText ref={ref}>{text}</style.HeaderText>
      </style.HeaderSectionBox>
    );
  }
);
export default HeaderSection;
