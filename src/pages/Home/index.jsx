import React from "react";
import { useNavigate } from "react-router-dom";
import catalogFile from "/src/assets/file/catalog.pdf";
import DownloadIcon from "../../components/icons/DownloadIcon";
import ArrowIcon from "../../components/icons/ArrowIcon";
import mainFacility from "../../assets/images/home/hero.webm";
import HeroBg from "../../assets/images/home/herobg.svg";
import ProcessImage from "../../assets/images/process/hero.jpg";
import ProductImage from "../../assets/images/product/hero.png";
import FacilityImage from "../../assets/images/facility/hero.jpg";
import {
  MainContent,
  HeroSection,
  HeroImage,
  HeroContent,
  HeroTitle,
  HeroName,
  HeroSubtitle,
  DownloadButton,
  FeatureSection,
  IntroduceText,
  FeatureGrid,
  FeatureCard,
  FeatureImage,
  FeatureContent,
  FeatureTitle,
  MoreButton,
  ArrowIconWrapper,
  DownloadIconContainer,
} from "./styles";

const features = [
  {
    title: "생산",
    image: ProcessImage,
    path: "/process",
  },
  {
    title: "제품",
    image: ProductImage,
    path: "/product",
  },
  {
    title: "설비",
    image: FacilityImage,
    path: "/facility",
  },
];

const Home = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth <= 789);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 789);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = catalogFile;
    link.setAttribute("download", "catalog.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <MainContent>
      <HeroSection>
        <HeroImage>
          <video autoPlay loop muted playsInline>
            <source src={mainFacility} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </HeroImage>
        <HeroContent src={HeroBg}>
          <HeroTitle>
            고객의 <strong>신뢰</strong>를 <strong>품질</strong>로 증명하는
          </HeroTitle>
          <HeroName>(주)대경인쇄</HeroName>
          <HeroSubtitle>
            {isMobile ? (
              <>
                그라비아 인쇄 | 산업용・식품용 진공포장지
                <br />
                각종 특수포장지 제조전문
              </>
            ) : (
              "그라비아 인쇄 | 산업용・식품용 진공포장지 | 각종 특수포장지 제조전문"
            )}
          </HeroSubtitle>
        </HeroContent>
        <DownloadButton onClick={handleDownload}>
          E-카탈로그 다운로드
          <DownloadIconContainer>
            <DownloadIcon />
          </DownloadIconContainer>
        </DownloadButton>
      </HeroSection>

      <FeatureSection>
        <IntroduceText>INTRODUCE</IntroduceText>
        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              onClick={() => {
                navigate(feature.path);
                window.scrollTo(0, 0);
              }}
            >
              <FeatureImage src={feature.image} alt={feature.title} />
              <FeatureContent>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <MoreButton>
                  더보기
                  <ArrowIconWrapper>
                    <ArrowIcon color="white" />
                  </ArrowIconWrapper>
                </MoreButton>
              </FeatureContent>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </FeatureSection>
    </MainContent>
  );
};

export default Home;
