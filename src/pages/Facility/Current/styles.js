import styled from "styled-components";
import { wclamp } from "/src/utils";

export const CurrentContent = styled.div`
  position: relative;
  width: 100%;
  max-width: ${wclamp(320, 1460)};
  margin: 0 ${wclamp(20, 230)};

  @media (max-width: 789px) {
    margin: 0 auto;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${wclamp(32, 80)};
`;

export const Title = styled.h3`
  font-size: ${wclamp(25, 50)};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${wclamp(31, 63)};

  @media (max-width: 789px) {
    font-size: 25px;
    line-height: 31px;
  }
`;

export const TabList = styled.div`
  display: flex;
  gap: 1px;
  margin-bottom: ${wclamp(40, 60)};
`;

export const Tab = styled.button`
  flex: 1;
  padding: auto auto;
  background: ${(props) => (props.$active ? "#166CE3" : "#fff")};
  color: ${(props) => (props.$active ? "#ffffff" : "#e1e1e1")};
  border: none;
  cursor: pointer;
  font-size: ${wclamp(15, 19)};
  line-height: ${wclamp(19, 24)};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  transition: all 0.3s ease;
  height: ${wclamp(32, 56)};

  @media (max-width: 789px) {
    font-size: 15px;
    line-height: 19px;
  }
`;

export const SliderContainer = styled.div`
  position: relative;
  margin-bottom: ${wclamp(32, 88)};
  width: ${wclamp(320, 860)};
  margin: 0 auto;
  margin-bottom: ${wclamp(50, 112)};

  @media (max-width: 789px) {
    margin-bottom: 50px;
  }
`;

export const SliderTitle = styled.h4`
  font-size: ${wclamp(19, 32)};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${wclamp(24, 40)};
  margin-bottom: ${wclamp(8, 24)};

  @media (max-width: 789px) {
    margin-bottom: 8px;
  }
`;

export const SliderContent = styled.div`
  position: relative;
  width: 100%;
  height: ${wclamp(148, 578)};
  overflow: hidden;
`;

export const SlideTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => props.translate}%);
`;

export const Slide = styled.div`
  width: 100%;
  height: 578px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: ${wclamp(148, 578)};
    object-fit: cover;
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
