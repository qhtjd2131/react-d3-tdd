import styled from "styled-components";

export const PageBox = styled.section`
  width: calc(100% - (${(props) => props.theme.sidebar_width}));
  margin-left : ${(props) => props.theme.sidebar_width};
  height: calc(var(--vh) * 100);
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  box-sizing: border-box;
  background-color: white;
`;

export const ContentsWrapper = styled.div`
    width : 100%;
    height : 100%;
    box-sizing : border-box;
    padding : 20px;
`;

export const TestText = styled.div`
  
`;