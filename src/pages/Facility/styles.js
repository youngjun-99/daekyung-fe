import styled from "styled-components";
import { wclamp, hclamp } from "/src/utils";

export const FacilityContent = styled.div`
  position: relative;
  overflow-x: hidden;
`;

export const HeroSection = styled.div`
  position: relative;
  width: ${wclamp(360, 1920)};
  height: ${wclamp(300, 500)};
  margin: 0 auto;
  margin-bottom: ${wclamp(8, 16)};
`;

export const HeroImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position: center;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 50%; /* 세로 중앙 정렬 */
  left: ${wclamp(20, 230)};
  z-index: 2;
  color: white;
  transform: translateY(-50%); /* 세로 중앙 정렬을 위한 Y축 transform만 사용 */

  @media (max-width: 790px) {
    padding: 0 16px;
    left: 16px; /* 모바일에서는 16px만큼만 떨어지도록 */
    width: calc(100% - 32px); /* 모바일에서의 너비 조정 */
  }
`;

export const HeroSub = styled.p`
  font-size: ${wclamp(12, 15)};
  line-height: ${wclamp(12, 19)};
  color: white;
`;

export const HeroTitle = styled.h2`
  font-size: ${wclamp(32, 66)};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  line-height: ${wclamp(40, 83)};
  color: white;
`;

export const Container = styled.div``;

export const TabNavigation = styled.div`
  margin: 0 ${wclamp(0, 230)};
  display: flex;
  justify-content: center;
  margin-bottom: ${wclamp(32, 100)};

  @media (max-width: 789px) {
    margin: 0 20px;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const TabButton = styled.button`
  padding: ${wclamp(15, 21)} ${wclamp(15, 110)};
  font-size: ${wclamp(15, 21)};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  line-height: ${wclamp(19, 31)};
  color: ${(props) => (props.$active ? "black" : props.theme.colors.gray[700])};
  background-color: ${(props) => props.theme.colors.gray[0]};
  width: 100%;
  border: none;
  border-bottom: 2px solid
    ${(props) =>
      props.isActive ? props.theme.colors.primary.DEFAULT : "transparent"};
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:focus {
    outline: none;
  }

  @media (max-width: 789px) {
    font-size: 15px;
    line-height: 19px;
  }
`;

export const TabContent = styled.div`
  margin-top: ${wclamp(15, 24)};
`;
