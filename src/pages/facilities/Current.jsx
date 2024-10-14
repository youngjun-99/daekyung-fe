import { React, useState } from "react";
import styled from "styled-components";
import { Headline1 } from "../../styles/Typography";
import PrePrint from "./current/PrePrint";
import Lamination from "./current/Lamination";
import Threating from "./current/threating";
import PostProcess from "./current/PostProcess";

const CurrentWrapper = styled.div`
  position: relative;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  margin-top: 5rem;
  padding: 1rem 4rem; // 좌우 패딩을 5rem으로 설정

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 1rem 2rem; // 화면이 작아질 때 패딩 줄임
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 1rem; // 모바일 화면에서 더 작은 패딩
  }
`;

const Title = styled(Headline1)`
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  text-align: center;
`;

const Container = styled.div`
  padding: 4rem 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 3rem 2rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 2rem 1rem;
  }
`;

const TabNavigation = styled.div`
  margin: 0 18rem;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const TabButton = styled.button`
  margin: 0 0.5rem;
  padding: 0.75rem 1.5rem;
  max-height: 50px;
  max-width: 220px;
  font-size: ${(props) => props.theme.fontSizes.button};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  color: ${(props) =>
    props.active ? props.theme.colors.gray[0] : props.theme.colors.gray[700]};
  background-color: ${(props) =>
    props.active
      ? props.theme.colors.primary[700]
      : props.theme.colors.gray[50]};
  width: 100%;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
  }
`;

const TabContent = styled.div`
  margin-top: 1.5rem;
`;

const Current = () => {
  const [activeTab, setActiveTab] = useState("prePrint");

  const tabs = [
    { id: "prePrint", label: "인쇄" },
    { id: "lamination", label: "합지" },
    { id: "threating", label: "스레팅" },
    { id: "postProcess", label: "가공" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "prePrint":
        return <PrePrint />;
      case "lamination":
        return <Lamination />;
      case "threating":
        return <Threating />;
      case "postProcess":
        return <PostProcess />;
      default:
        return <PrePrint />;
    }
  };
  return (
    <CurrentWrapper>
      <Content>
        <Title>설비현황</Title>
      </Content>

      <Container>
        <TabNavigation>
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </TabButton>
          ))}
        </TabNavigation>

        <TabContent>{renderContent()}</TabContent>
      </Container>
    </CurrentWrapper>
  );
};

export default Current;
