// PAGE 로 시작하는 컴포넌트들이 공동으로 사용하는 스타일 파일입니다.

import styled from "styled-components";

export const PageBox = styled.section`
  width: 100%;
  height: calc(var(--vh) * 100);
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.main_bg_color};
  overflow: hidden;

  @media only screen and (max-width: 800px) {
    margin-left: 0;
  }
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 40px;
`;

export const BodySection = styled.div`
  width: 100%;
  height: calc(
    100% - (${(props) => props.theme.page_header_height}) - 13px
  ); //13px is divider height
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
