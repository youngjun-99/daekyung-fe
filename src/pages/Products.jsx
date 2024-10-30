import React, { useState } from 'react';
import styled from 'styled-components';
import { Display1 } from '../styles/Typography';
import productImage from '../assets/images/product.png';
import Function from './products/Function';
import Type from './products/Type';

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
  padding: 4rem 1rem;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    padding: 3rem 2rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 2rem 1rem;
  }
`;

const TabNavigation = styled.div`
  margin: 0 18rem;
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

const Products = () => {
  const [activeTab, setActiveTab] = useState('type');

  const tabs = [
    { id: 'type', label: '제품형태' },
    { id: 'function', label: '제품기능' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'type':
        return <Type />;
      case 'function':
        return <Function />;
      default:
        return <Type />;
    }
  };

  return (
    <PageWrapper>
      <HeroSection>
        <HeroImage src={productImage} alt="제품소개" />
        <HeroOverlay>
          <HeroTitle>제품소개</HeroTitle>
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

export default Products;