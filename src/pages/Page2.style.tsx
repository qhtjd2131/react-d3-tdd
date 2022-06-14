import styled from "styled-components";

export const StartDiv = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1600px;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const HyperLinkWrapper = styled.a<{ left: string; zIndex: number }>`
  width: 60%;
  position: absolute;
  transform: rotateY(-45deg);
  filter: drop-shadow(5px 5px 5px black);

  border-radius: 30px;
  z-index: ${(props) => props.zIndex && props.zIndex};
  left: ${(props) => props.left && props.left};
  bottom: 100px;
  cursor: pointer;
  transition: 0.6s;
  &:hover {
    transform: rotateY(-45deg) translateY(-100px);
    filter: drop-shadow(5px 5px 5px white);
  }
`;

export const ImageYoutubeDark = styled.img`
  border-radius: 30px;
  width: 100%;
`;

export const ImageYoutubeLight = styled.img`
  border-radius: 30px;
  width: 100%;
`;

export const ImageAirbnb = styled.img`
  border-radius: 30px;
  width: 100%;
`;
export const ImageStarBucks = styled.img`
  border-radius: 30px;
  width: 100%;
`;
