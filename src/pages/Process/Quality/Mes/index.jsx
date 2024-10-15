import React, { useState, useEffect } from "react";
import mesprocessImage from "/src/assets/images/process/mesprocess.png";
import mmesprocessImage from "/src/assets/images/process/mmesprocess.png";
import mesprosImage from "/src/assets/images/process/mespros.png";
import mmesprosImage from "/src/assets/images/process/mmespros.png";
import mes1Image from "/src/assets/images/process/mes1.png";
import mes2Image from "/src/assets/images/process/mes2.png";
import {
  MesContent,
  Title,
  SubTitle,
  SecondTitle,
  MesProsImage,
  MesProcessImage,
  SliderContainer,
  SlideTrack,
  SliderContent,
  SliderButton,
  DotContainer,
  Dot,
  Slide,
} from "./styles";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((current) => (current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <SliderContainer>
        <SliderContent>
          <SliderButton direction="prev" onClick={prevSlide}>
            &#10094;
          </SliderButton>
          <SlideTrack translate={-currentIndex * 100}>
            {images.map((image, index) => (
              <Slide key={index}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </Slide>
            ))}
          </SlideTrack>
          <SliderButton direction="next" onClick={nextSlide}>
            &#10095;
          </SliderButton>
        </SliderContent>
        <DotContainer>
          {images.map((_, index) => (
            <Dot
              key={index}
              active={currentIndex === index}
              onClick={() => goToSlide(index)}
            />
          ))}
        </DotContainer>
      </SliderContainer>
    </>
  );
};

const useWindowSize = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 789);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 789);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const Mes = () => {
  const isMobile = useWindowSize();
  const mesImages = [mes1Image, mes2Image];
  return (
    <MesContent>
      <Title>MES(Manufacturing Execution System)기반의 체계적 품질 관리</Title>
      <SubTitle>
        ㈜대경인쇄는 MES를 통해 생산 공정을 실시간으로 관리하고, 표준화된
        프로세스를 기반으로 최상의 인쇄 품질을 제공합니다.
      </SubTitle>
      <ImageSlider images={mesImages} />
      <SecondTitle>MES의 장점</SecondTitle>
      <MesProsImage>
        <img src={isMobile ? mmesprosImage : mesprosImage} />
      </MesProsImage>
      <SecondTitle>관리 프로세스</SecondTitle>
      <MesProcessImage>
        <img src={isMobile ? mmesprocessImage : mesprocessImage} />
      </MesProcessImage>
    </MesContent>
  );
};

export default Mes;
