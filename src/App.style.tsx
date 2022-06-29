import styled from "styled-components";

export const GlobalWrapper = styled.div`
  width: calc(100% - (${(props) => props.theme.sidebar_width}));
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  background-color: ${(props) => props.theme.side_bg_color};
  margin-left: ${(props) => props.theme.sidebar_width};

  @media only screen and (max-width: 800px) {
    margin-left: 0;
    width: 100%;
  }
`;
