import React, { useState } from 'react';
import styled from 'styled-components';
import { Display1, Body1 } from '../styles/Typography';
import companyImage from '../assets/images/company.jpg';
import Greeting from './about/Greeting';
import History from './about/History';
import Organization from './about/Organization';
import Certifications from './about/Certifications';
import Location from './about/Location';

const PageWrapper = styled.div`
  position: relative;
`;

const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 600px;
`;

const HeroImage = styled.img`
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
  color: ${props => props.theme.colors.gray[0]};
  font-weight: ${props => props.theme.fontWeights.semibold};
`;

const Container = styled.div`
  padding: 1rem 10rem; // 좌우 패딩을 5rem으로 설정

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    padding: 1rem 2rem; // 화면이 작아질 때 패딩 줄임
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 1rem; // 모바일 화면에서 더 작은 패딩
  }
`;

const TabNavigation = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.gray[300]};
`;

const TabButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.gray[700]};
  background-color: ${props => props.theme.colors.gray[0]};
  width: 100%;
  border: none;
  border-bottom: 2px solid ${props => props.active ? props.theme.colors.primary[700] : 'transparent'};
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
  const [activeTab, setActiveTab] = useState('greeting');

  const tabs = [
    { id: 'greeting', label: '인사말' },
    { id: 'history', label: '회사연혁' },
    { id: 'organization', label: '조직도' },
    { id: 'certifications', label: '인증현황' },
    { id: 'location', label: '사업장 위치' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'greeting':
        return <Greeting />;
      case 'history':
        return <History />;
      case 'organization':
        return <Organization />;
      case 'certifications':
        return <Certifications />;
      case 'location':
        return <Location />;
      default:
        return <Greeting />;
    }
  };

  return (
    <PageWrapper>
      <HeroSection>
        <HeroImage src={companyImage} alt="회사 전경" />
        <HeroOverlay>
          <HeroTitle>회사소개</HeroTitle>
        </HeroOverlay>
      </HeroSection>
      
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

        <TabContent>
          {renderContent()}
        </TabContent>
      </Container>
    </PageWrapper>
  );
};

export default About;