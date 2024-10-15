import styled from "styled-components";
import { wclamp, hclamp } from "/src/utils";

export const MesContent = styled.div`
  position: relative;
  width: 100%;
  max-width: ${wclamp(320, 1460)};
`;

export const Title = styled.h1`
  font-size: ${wclamp(19, 32)};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${wclamp(24, 40)};
  margin-bottom: ${wclamp(16, 40)};
`;

export const SubTitle = styled.h3`
  font-size: ${wclamp(15, 19)};
  line-height: ${wclamp(19, 24)};
`;

export const SecondTitle = styled.h2`
  font-size: ${wclamp(19, 32)};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${wclamp(24, 40)};
  margin: ${wclamp(32, 80)} 0;
`;

export const MesProsImage = styled.div`
  position: relative;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }
`;

export const MesProcessImage = styled.div`
  position: relative;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }
`;

export const SliderContainer = styled.div`
  position: relative;
  margin: ${wclamp(32, 120)} 0;

  @media (max-width: 789px) {
    margin-bottom: 32px;
  }
`;

export const SliderContent = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const SlideTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => props.translate}%);
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 0;

  img {
    object-fit: cover;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }
`;

export const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.direction === "prev" ? "left: 0px;" : "right: 0px;")}
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 2;
`;

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: ${wclamp(20, 30)};
`;

export const Dot = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => (props.active ? "#0066FF" : "#ccc")};
  border: none;
  padding: 0;
  cursor: pointer;
`;
