import styled from "styled-components";

export const MainContent = styled.main`
  min-height: calc(
    2160px - 96px - 174px
  ); // 2160px - header height - footer height

  @media (max-width: 740px) {
    min-height: calc(100vh - 60px - 180px);
  }
`;

export const HeroSection = styled.section`
  position: relative;
  height: calc(1080px - 80px);

  @media (max-width: 740px) {
    height: calc(100vh - 60px);
  }
`;

export const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
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
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.5)
    );
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 120px 24px;
  color: white;

  @media (max-width: 740px) {
    padding: 80px 16px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.display.Large.fontSize};
  line-height: ${({ theme }) => theme.typography.display.Large.lineHeight}px;
  margin-bottom: 24px;

  @media (max-width: 740px) {
    font-size: ${({ theme }) => theme.typography.display.Large_mo.fontSize};
    line-height: ${({ theme }) =>
      theme.typography.display.Large_mo.lineHeight}px;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.body.Large.fontSize};
  line-height: ${({ theme }) => theme.typography.body.Large.lineHeight}px;
  margin-bottom: 32px;

  @media (max-width: 740px) {
    font-size: ${({ theme }) => theme.typography.body.Medium.fontSize};
    line-height: ${({ theme }) => theme.typography.body.Medium.lineHeight}px;
  }
`;

export const DownloadButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.DEFAULT};
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typography.label.Medium.fontSize};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[600]};
  }
`;

export const FeatureSection = styled.section`
  position: relative;
  padding: 96px 24px;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  min-height: calc(1080px - 80px); // 남은 높이를 꽉 채우도록

  @media (max-width: 740px) {
    padding: 40px 16px;
  }
`;

export const IntroduceText = styled.div`
  position: absolute;
  left: 40px;
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);
  transform-origin: left center;
  font-size: ${({ theme }) => theme.typography.title.Large.fontSize};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.gray[300]};
  letter-spacing: 0.2em;

  @media (max-width: 740px) {
    display: none;
  }
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 740px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const FeatureCard = styled.div`
  position: relative;
  height: 600px;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 740px) {
    height: 400px;
  }
`;

export const FeatureImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FeatureContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 32px 24px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.title.Large.fontSize};
  margin-bottom: 16px;

  @media (max-width: 740px) {
    font-size: ${({ theme }) => theme.typography.title.Medium.fontSize};
  }
`;

export const FeatureDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.body.Medium.fontSize};
  margin-bottom: 24px;
  opacity: 0.9;

  @media (max-width: 740px) {
    font-size: ${({ theme }) => theme.typography.body.Small.fontSize};
  }
`;

export const MoreButton = styled.button`
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 8px 24px;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typography.label.Medium.fontSize};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: black;
  }
`;
