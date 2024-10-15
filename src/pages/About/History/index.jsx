import React, { useState, useEffect } from "react";
import {
  HistoryContent,
  TitleSection,
  Title,
  TimelineSection,
  Timeline,
} from "./styles";
import TimelineImage from "/src/assets/images/about/timeline.png";
import MTimelineImage from "/src/assets/images/about/mtimeline.png";

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

const History = () => {
  const isMobile = useWindowSize(); // 커스텀 훅 사용

  return (
    <HistoryContent>
      <TitleSection>
        <Title>회사연혁</Title>
      </TitleSection>
      <TimelineSection>
        <Timeline>
          <img
            src={isMobile ? MTimelineImage : TimelineImage}
            alt="회사 연혁 타임라인"
          />
        </Timeline>
      </TimelineSection>
    </HistoryContent>
  );
};

export default History;
