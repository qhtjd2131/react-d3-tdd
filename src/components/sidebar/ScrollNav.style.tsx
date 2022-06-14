import styled from "styled-components";

export const ScrollNavBox = styled.div`
  /* position: fixed; */
  height: 400px;
  /* max-height  : 500px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* top: 50%;
  transform: translateY(-50%);
  left: 20px; */
  background-color: transparent;
  /* border-radius: 30px; */
  /* z-index: 999; */
  /* opacity: 1; */
`;

export const ContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const SectionWrapper = styled.div`
  height: 100%;
  width: 60px;
`;

export const BackPath = styled.div`
  width: 4px;
  height: 100%;
  background-color: ${(props)=>props.theme.side_path_bg_color};
  margin: 0 auto;
  overflow: hidden;
`;
export const FrontPath = styled.div`
  width: 4px;
  height: 1%;
  margin: 0 auto;
  background-color : ${(props)=>props.theme.side_path_color};
`;

export const TextWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
 
`;

export const SectionLink = styled.a`
  font-size: 20px;
  cursor: pointer;
  color : ${(props)=>props.theme.side_text_normal_color};
`;
