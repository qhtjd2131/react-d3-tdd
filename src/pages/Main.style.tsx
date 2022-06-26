import styled from "styled-components";

export const OneMain = styled.div`
  background-color: ${(props) => props.theme.main_bg_color};
  width: 100%;
  height: calc(var(--vh) * 100);
  overflow: hidden;
`;

export const OneText = styled.div`
  font-size: 40px;
  color: white;
  font-weight: 600;
  position: absolute;
  right: 0;
  opacity: 0;
  white-space: nowrap;

  @media ${(props) => props.theme.size_10} {
    font-size: 32px;
  }

  @media ${(props) => props.theme.size_8} {
    font-size: 24px;
  }

  @media ${(props) => props.theme.size_6} {
    font-size: 18px;
  }
`;
