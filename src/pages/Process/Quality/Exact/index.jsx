import React, { useState, useEffect } from "react";
import {
  ExactContent,
  Title,
  SecondTitle,
  SubTitle,
  ExactGraphImage,
  ExactDeviceImage,
  ExactProcessImage,
} from "./styles";
import exactgraphImage from "/src/assets/images/process/exactgraph.png";
import exactdevice1Image from "/src/assets/images/process/exactdevice.png";
import exactdevice2Image from "/src/assets/images/process/exactdevice2.png";
import exactprocessImage from "/src/assets/images/process/exactprocess.png";
import mexactprocessImage from "/src/assets/images/process/mexactprocess.png";

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

const Exact = () => {
  const isMobile = useWindowSize();
  return (
    <ExactContent>
      <Title>완벽한 품질, 일관된 색상 : 우리의 약속</Title>
      <SubTitle>
        ㈜대경인쇄는 고객의 기대를 뛰어넘는 색상과 품질을 제공하기 위해 차세대
        측색 장비 Exact 2 색차계와 엄격한 관리 프로세스를 활용해 최상의 인쇄
        품질을 보장합니다.
      </SubTitle>
      <SecondTitle>Exact 2 색차계</SecondTitle>
      <ExactGraphImage>
        <img src={exactgraphImage} />
      </ExactGraphImage>
      <ExactDeviceImage isMobile={isMobile}>
        <img src={exactdevice1Image} alt="Device 1" />
        <img src={exactdevice2Image} alt="Device 2" />
      </ExactDeviceImage>
      <SecondTitle>관리 프로세스</SecondTitle>
      <ExactProcessImage>
        <img src={isMobile ? mexactprocessImage : exactprocessImage} />
      </ExactProcessImage>
    </ExactContent>
  );
};

export default Exact;
