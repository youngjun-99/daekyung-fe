import styled from "styled-components";
import { wclamp } from "/src/utils";

export const CertificationContent = styled.div`
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
`;

export const CertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  width: 100%;
  margin-bottom: ${wclamp(70, 120)};

  @media (max-width: 789px) {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 70px;
  }
`;

export const CertItem = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  padding: 4px;
  position: relative;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: 789px) {
    pointer-events: none; /* 모바일에서 hover 비활성화 */
  }
`;

export const CertImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 16px;
  transition: all 0.3s ease;
`;

export const HoverImage = styled.div`
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  width: ${wclamp(0, 560)};
  height: ${wclamp(0, 795)};
  z-index: 100;
  background-color: white;
  border: 1px solid #eee;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 789px) {
    display: none !important; /* 모바일에서 hover 이미지 강제 숨김 */
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  ${ImageContainer}:hover & {
    display: block;
  }
`;

export const CertLabel = styled.p`
  font-size: ${wclamp(0, 15)};
  line-height: ${wclamp(0, 19)};
  color: #333;
  margin: 0;
  text-align: center;

  @media (max-width: 789px) {
    font-size: 12px;
    line-height: 12px;
  }
`;
