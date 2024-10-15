import React, { useState } from "react";
import {
  CurrentContent,
  TitleSection,
  Title,
  TabList,
  Tab,
  SliderContainer,
  SliderTitle,
  SliderContent,
  SlideTrack,
  Slide,
  SliderButton,
  DotContainer,
  Dot,
} from "./styles";
import currentImage1 from "/src/assets/images/facility/01.jpg";
import currentImage2 from "/src/assets/images/facility/02.jpg";
import currentImage3 from "/src/assets/images/facility/03.jpg";
import currentImage4 from "/src/assets/images/facility/04.jpg";
import currentImage5 from "/src/assets/images/facility/05.jpg";
import currentImage6 from "/src/assets/images/facility/06.jpg";
import currentImage7 from "/src/assets/images/facility/07.jpg";
import currentImage8 from "/src/assets/images/facility/08.jpg";
import currentImage9 from "/src/assets/images/facility/09.jpg";
import currentImage10 from "/src/assets/images/facility/10.jpg";
import currentImage11 from "/src/assets/images/facility/11.jpg";
import currentImage12 from "/src/assets/images/facility/12.jpg";
import currentImage13 from "/src/assets/images/facility/13.jpg";
import currentImage14 from "/src/assets/images/facility/14.jpg";
import currentImage15 from "/src/assets/images/facility/15.jpg";
import currentImage16 from "/src/assets/images/facility/16.jpg";
import currentImage17 from "/src/assets/images/facility/17.jpg";
import currentImage18 from "/src/assets/images/facility/18.jpg";

const ImageSlider = ({ images, title }) => {
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
      {title && <SliderTitle>{title}</SliderTitle>}
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
const Current = () => {
  const [activeTab, setActiveTab] = useState("printing");

  const tabs = [
    { id: "printing", label: "인쇄" },
    { id: "laminating", label: "합지" },
    { id: "slitting", label: "스레팅" },
    { id: "processing", label: "가공(제대)" },
  ];

  // 이미지 경로는 실제 프로젝트의 이미지 경로로 수정해야 합니다
  const printingImages9 = [currentImage1, currentImage2, currentImage3];

  const printingImages10 = [currentImage4, currentImage5];

  const laminatingImages = [
    currentImage6,
    currentImage7,
    currentImage8,
    currentImage9,
    currentImage10,
    currentImage11,
    currentImage12,
  ];

  const slittingImages = [currentImage13, currentImage14];

  const processingImages = [
    currentImage15,
    currentImage16,
    currentImage17,
    currentImage18,
  ];

  return (
    <CurrentContent>
      <TitleSection>
        <Title>설비</Title>
      </TitleSection>

      <TabList>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            $active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>

      {activeTab === "printing" && (
        <>
          <ImageSlider images={printingImages9} title="9도 인쇄기" />
          <ImageSlider images={printingImages10} title="10도 인쇄기" />
        </>
      )}

      {activeTab === "laminating" && (
        <ImageSlider images={laminatingImages} title="T다이 / 드라이(무용제)" />
      )}

      {activeTab === "slitting" && (
        <ImageSlider images={slittingImages} title="슬리터기" />
      )}

      {activeTab === "processing" && (
        <ImageSlider images={processingImages} title="제대기" />
      )}
    </CurrentContent>
  );
};

export default Current;
