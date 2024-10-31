// index.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import catalogFile from "/src/assets/file/catalog.pdf";
import DownloadIcon from "../../components/icons/DownloadIcon";
import MainFacilityImage from "../../assets/images/home/main.png";
import ProcessImage from "../../assets/images/home/process.png";
import ProductImage from "../../assets/images/home/product.png";
import FacilityImage from "../../assets/images/home/facility.png";
import {
  MainContent,
  HeroSection,
  HeroImage,
  HeroContent,
  HeroTitle,
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
} from "./styles";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "공정과정",
      description:
        "",
      image: ProcessImage,
      path: "/process",
    },
    {
      title: "제품소개",
      description:
        "",
      image: ProductImage,
      path: "/products",
    },
    {
      title: "설비소개",
      description:
        "",
      image: FacilityImage,
      path: "/facility",
    },
  ];

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
        <HeroImage src={MainFacilityImage} />
        <HeroContent>
          <HeroTitle>
            고객의 본질에 가치를 더하는
            <br />
            대경인쇄
          </HeroTitle>
          <HeroSubtitle>
            그라비아 인쇄 | 산업용・식품용 진공포장지
            <br />
            각종 특수포장지 제조전문
          </HeroSubtitle>
          <DownloadButton onClick={handleDownload}>
            <DownloadIcon />
            E-카탈로그 다운로드
          </DownloadButton>
        </HeroContent>
      </HeroSection>

      <FeatureSection>
        <IntroduceText>INTRODUCE</IntroduceText>
        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index} onClick={() => navigate(feature.path)}>
              <FeatureImage src={feature.image} alt={feature.title} />
              <FeatureContent>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <MoreButton>더보기</MoreButton>
              </FeatureContent>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </FeatureSection>
    </MainContent>
  );
};

export default Home;
