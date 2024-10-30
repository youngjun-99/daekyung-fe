import React from 'react';
import styled from 'styled-components';
import { Display1, Headline1 } from '../styles/Typography';
import processImage from '../assets/images/process.jpg';
import processDetailImage from '../assets/images/process/process.png';

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
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    padding: 3rem 2rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 2rem 1rem;
  }
`;

const Title = styled(Headline1)`
  font-weight: ${props => props.theme.fontWeights.semibold};
  margin-bottom: 3rem;
  text-align: center;
`;

const ProcessDetailImage = styled.img`
  padding-top: 2rem;
  padding-bottom: 6rem;
  width: 100%;
  height: auto;
  max-width: 1000px;
  display: block;
  margin: 0 auto;
`;

const Process = () => {
  return (
    <PageWrapper>
      <HeroSection>
        <HeroImage src={processImage} alt="공정 과정" />
        <HeroOverlay>
          <HeroTitle>공정과정</HeroTitle>
        </HeroOverlay>
      </HeroSection>

      <Container>
        <Title>One-stop 토탈 서비스</Title>
        <ProcessDetailImage src={processDetailImage} alt="상세 공정 과정" />
      </Container>
    </PageWrapper>
  );
};

export default Process;