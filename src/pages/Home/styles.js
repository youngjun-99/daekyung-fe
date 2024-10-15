import styled from "styled-components";
import { mwclamp, wclamp } from "/src/utils";

export const MainContent = styled.main`
  position: relative;
  margin-top: clamp(-96px, calc(-96 * 100vw / 1920), -48px);
  max-width: 1920px;
  width: 100%;
  overflow-x: hidden;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 790px) {
    margin-top: -48px;
  }
`;

export const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 789px) {
    height: ${wclamp(420, 920)};
  }
`;

export const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  width: ${wclamp(0, 1003)};
  height: ${wclamp(0, 379)};
  margin-right: auto;
  background-image: url("${(props) => props.src}");
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: auto;
  padding-left: ${wclamp(0, 230)};

  @media (max-width: 790px) {
    width: ${mwclamp(272, 600)};
    height: ${mwclamp(134, 294)};
    padding-left: 20px;
    background-size: 100% 100%;
  }
`;

export const HeroTitle = styled.h1`
  font-size: ${wclamp(24, 32)};
  line-height: ${wclamp(16, 40)};
  white-space: nowrap;
  margin-bottom: ${wclamp(0, 16)};
  letter-spacing: 1px;

  strong {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  @media (max-width: 790px) {
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 2px;
  }
`;

export const HeroName = styled.h2`
  font-size: ${wclamp(32, 96)};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${wclamp(40, 83)};
  margin-bottom: ${wclamp(0, 40)};

  @media (max-width: 790px) {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 8px;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: ${wclamp(12, 18)};
  line-height: ${wclamp(12, 24)};

  @media (max-width: 790px) {
    font-size: 12px;
    line-height: auto;
  }
`;

export const DownloadButton = styled.button`
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary.DEFAULT};
  color: white;
  width: ${wclamp(155, 266)};
  height: ${wclamp(32, 63)};
  padding: 0;
  border: none;
  font-size: ${wclamp(14, 21)};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${wclamp(14, 31)};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  gap: ${wclamp(6, 10)};
  margin: ${wclamp(0, 70)} auto ${wclamp(0, 118)} ${wclamp(0, 230)};

  @media (max-width: 790px) {
    margin: 0 auto ${wclamp(0, 118)} 20px;
    width: 155px;
    height: 32px;
    margin-top: 24px;
  }
`;

export const FeatureSection = styled.section`
  position: relative;
  padding-top: ${wclamp(40, 96)};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: calc(100vh - 174px);
  padding-left: ${wclamp(20, 80)};
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 790px) {
    padding-left: 20px;
    padding-top: 24px;
    height: auto;
  }
`;

export const IntroduceText = styled.div`
  font-family: "Gotham";
  font-size: ${wclamp(0, 96)};
  color: ${({ theme }) => theme.colors.gray[100]};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  white-space: nowrap;
  padding-left: ${wclamp(4, 20)};
  text-align: end;

  @media (max-width: 790px) {
    position: relative;
    text-align: end;
    font-size: 20px;
  }
`;

export const FeatureGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  height: 100%;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 790px) {
    flex-direction: column;
    max-height: fit-content;
    gap: 8px;
  }
`;

export const FeatureCard = styled.div`
  position: relative;
  width: 33.333%;
  height: 100%;
  overflow: hidden;
  transition: width 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    width: 50%;
  }

  @media (max-width: 790px) {
    width: 100%;
    aspect-ratio: 16/9;
    height: auto;

    &:hover {
      width: 100%;
    }
  }
`;

export const FeatureImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FeatureContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: -1;
  }

  @media (max-width: 790px) {
    padding: 15px;
  }
`;

export const FeatureTitle = styled.h3`
  font-size: ${wclamp(0, 50)};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${wclamp(31, 63)};
  margin: 0;

  @media (max-width: 790px) {
    font-size: 21px;
  }
`;

export const MoreButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: ${({ theme }) => theme.typography.detail.Large.fontSize};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  cursor: pointer;
  padding: 0;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 790px) {
    display: none;
  }
`;

export const ArrowIconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-90deg);
`;

export const DownloadIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${wclamp(9, 14)};
  height: ${wclamp(11, 17)};

  svg {
    width: 100%;
    height: 100%;
  }
`;
