import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Display2, Headline2, Body1 } from "../styles/Typography";
import companyVideo from "../assets/images/company.webm";
import processImage from "../assets/images/process.jpg";
import productImage from "../assets/images/product.png";
import facilityImage from "../assets/images/facility.webm";

const SectionWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 1080px;
`;

const BackgroundMedia = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 6rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  width: 100%;
`;

const Subtitle = styled(Headline2)`
  color: ${({ theme }) => theme.colors.gray[0]};
  max-width: 32rem;
  margin-bottom: 1rem;

  strong {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

const Title = styled(Display2)`
  color: ${({ theme }) => theme.colors.gray[0]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: ${({ theme }) => theme.fontSizes["6xl"]};
  }
`;

const Description = styled(Body1)`
  color: ${({ theme }) => theme.colors.gray[0]};
  max-width: 32rem;
  margin-bottom: 2.5rem;
`;

const Button = styled.button`
  margin-bottom: 3.5rem;
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: none;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }

  span {
    color: ${({ theme }) => theme.colors.gray[0]};
    position: relative;
    z-index: 1;
  }
`;

const Section = ({ title, subtitle, media, text, url, isFirst }) => {
  const navigate = useNavigate();

  return (
    <SectionWrapper>
      <BackgroundMedia>
        {media.endsWith(".webm") ? (
          <video autoPlay loop muted playsInline>
            <source src={media} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={media} alt={title} />
        )}
      </BackgroundMedia>
      <Overlay>
        <ContentWrapper>
          {isFirst ? (
            <>
              <Subtitle>
                고객의 <strong>본질</strong>에 <strong>가치</strong>를 더하는
              </Subtitle>
              <Title>{title}</Title>
              <Description>{text}</Description>
            </>
          ) : (
            <>
              <Title>{title}</Title>
              <Button onClick={() => navigate(url)}>
                <span>바로 가기</span>
              </Button>
            </>
          )}
        </ContentWrapper>
      </Overlay>
    </SectionWrapper>
  );
};

const Home = () => {
  const sections = [
    {
      title: "(주) 대경인쇄",
      subtitle: "고객의 본질에 가치를 더하는",
      media: companyVideo,
      text: "그라비아 인쇄 | 산업용 · 식품용 진공포장지 | 각종 특수포장지 제조전문",
      url: "/",
    },
    {
      title: "공정과정",
      subtitle: "공정과정 입니다.",
      media: processImage,
      url: "/process",
    },
    {
      title: "제품소개",
      subtitle: "제품소개 입니다.",
      media: productImage,
      url: "/product",
    },
    {
      title: "설비소개",
      subtitle: "설비소개 입니다.",
      media: facilityImage,
      url: "/facility",
    },
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <Section key={index} {...section} isFirst={index === 0} />
      ))}
    </div>
  );
};

export default Home;
