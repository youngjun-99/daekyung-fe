import React, { useState } from "react";
import styled from "styled-components";
import { Display1 } from "../styles/Typography";
import companyVideo from "../assets/images/company.webm";
import Greeting from "./about/Greeting";
import History from "./about/History";
import Organization from "./about/Organization";
import Certifications from "./about/Certifications";
import Location from "./about/Location";

const PageWrapper = styled.div`
  position: relative;
`;

const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 600px;
`;

const HeroVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroTitle = styled(Display1)`
  color: ${({ theme }) => theme.colors.gray[0]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

const Container = styled.div`
  padding: 1rem 10rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 1rem 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1rem;
  }
`;

const TabNavigation = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
`;

const TabButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.gray[700]};
  background-color: ${({ theme }) => theme.colors.gray[0]};
  width: 100%;
  border: none;
  border-bottom: 2px solid
    ${({ theme, active }) =>
      active ? theme.colors.primary[700] : "transparent"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
  }
`;

const TabContent = styled.div`
  margin-top: 1.5rem;
`;

const About = () => {
  const [activeTab, setActiveTab] = useState("greeting");

  const tabs = [
    { id: "greeting", label: "인사말", component: Greeting },
    { id: "history", label: "회사연혁", component: History },
    { id: "organization", label: "조직도", component: Organization },
    { id: "certifications", label: "인증현황", component: Certifications },
    { id: "location", label: "사업장 위치", component: Location },
  ];

  return (
    <PageWrapper>
      <HeroSection>
        <HeroVideo autoPlay loop muted playsInline>
          <source src={companyVideo} type="video/webm" />
          Your browser does not support the video tag.
        </HeroVideo>
        <HeroOverlay>
          <HeroTitle>회사소개</HeroTitle>
        </HeroOverlay>
      </HeroSection>

      <Container>
        <TabNavigation>
          {tabs.map(({ id, label }) => (
            <TabButton
              key={id}
              active={activeTab === id}
              onClick={() => setActiveTab(id)}
            >
              {label}
            </TabButton>
          ))}
        </TabNavigation>

        <TabContent>
          {tabs.find((tab) => tab.id === activeTab)?.component()}
        </TabContent>
      </Container>
    </PageWrapper>
  );
};

export default About;
