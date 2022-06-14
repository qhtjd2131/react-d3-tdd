import styled from "styled-components";

export const BodyText = styled.div`
  font-size: 18px;
  letter-spacing: 2px;
  width: 100%;
  line-height: 36px;
  margin: 20px 0;
  font-weight: 600;
  opacity: 1;
  color: ${(props)=>props.theme.main_text_color};
  background-color :#2c303a;
  border-radius : 14px;
  padding  :4px;
`;

