import React, { useState, useEffect } from "react";
import { ProcessContent, TitleSection, Title, ProcessImage } from "./styles";
import processImage from "/src/assets/images/process/process.png";
import mprocessImage from "/src/assets/images/process/mprocess.jpg";

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

const Production = () => {
  const isMobile = useWindowSize();
  return (
    <ProcessContent>
      <TitleSection>
        <Title>One-stop 토탈 서비스</Title>
      </TitleSection>
      <ProcessImage>
        <img src={isMobile ? mprocessImage : processImage} />
      </ProcessImage>
    </ProcessContent>
  );
};

export default Production;
