import styled from "styled-components";
import { wclamp, mwclamp } from "/src/utils";

export const GreetingContent = styled.div`
  position: relative;
  width: 100%;
  max-width: ${wclamp(320, 1460)};
  margin: 0 auto;

  @media (max-width: 789px) {
    height: 100vh;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${wclamp(30, 60)};
`;

export const Title = styled.h3`
  font-size: ${wclamp(25, 50)};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${wclamp(31, 63)};
`;

export const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${wclamp(4, 10)};
  font-size: ${wclamp(14, 17)};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  line-height: ${wclamp(14, 21)};
  padding: ${wclamp(3.5, 9.5)} ${wclamp(8, 16)};
  color: ${(props) => props.theme.colors.primary.DEFAULT};
  border: 1px solid ${(props) => props.theme.colors.primary.DEFAULT};
  background-color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export const DownloadIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${wclamp(32, 38)};
  margin-bottom: ${wclamp(40, 80)};

  @media (max-width: 789px) {
    grid-template-columns: none;
    grid-template-rows: auto auto;
  }
`;

export const SignboardContainer = styled.div`
  width: ${wclamp(0, 710)};
  height: ${wclamp(0, 515)};

  @media (max-width: 789px) {
    width: 100%;
    height: auto;
  }
`;

export const SignboardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const TextContainerWrapper = styled.div`
  position: relative;
  height: ${wclamp(232, 515)};
  display: flex;
  flex-direction: column;
`;

export const TextContainerBackground = styled.div`
  position: absolute;
  right: 0px;
  top: ${wclamp(24, 127)};
  opacity: 0.05;
  z-index: -1;

  @media (max-width: 789px) {
    right: 50%;
    transform: translateX(50%);
  }
`;

export const TextContainer = styled.div`
  position: relative;
  z-index: 1;
  flex-grow: 1;

  @media (max-width: 789px) {
    margin-bottom: 48px;
  }
`;

export const Subtitle = styled.h4`
  font-size: ${wclamp(16, 32)};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${wclamp(24, 40)};
  margin-bottom: ${wclamp(0, 40)};
  word-break: keep-all;
  white-space: nowrap;

  @media (max-width: 789px) {
    font-size: 19px;
    line-height: 24px;
    margin-bottom: 16px;
  }
`;

export const ParagraphsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${wclamp(0, 30)};
`;

export const Paragraph = styled.p`
  font-size: ${wclamp(0, 19)};
  line-height: ${wclamp(0, 24)};
  word-break: keep-all;
  @media (max-width: 789px) {
    font-size: ${mwclamp(12, 14)};
    line-height: ${mwclamp(18, 24)};
  }
`;

export const SignatureContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: auto;
  padding-right: ${wclamp(10, 110)};
  @media (max-width: 789px) {
    padding-right: ${mwclamp(10, 70)};
  }
`;

export const SignatureName = styled.p`
  font-size: ${wclamp(14, 16)};
  margin-bottom: 4px;
  z-index: 2;
`;

export const SignatureTitle = styled.p`
  font-size: ${wclamp(16, 32)};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin-bottom: ${wclamp(10, 20)};
  z-index: 2;
`;

export const SignatureImage = styled.img`
  position: absolute;
  bottom: ${wclamp(-20, -30)}; // 컨테이너 밖으로 확장
  right: ${wclamp(-10, -20)};
  width: ${wclamp(67, 134)};
  height: ${wclamp(71, 142)};
  object-fit: contain;
  z-index: -1;
  @media (max-width: 789px) {
    bottom: ${mwclamp(0, 0)};
  }
`;
