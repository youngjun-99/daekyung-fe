import React from 'react';
import styled from 'styled-components';
import { Headline1 } from '../../styles/Typography';
import organizationImage from '../../assets/images/about/chart.png';

const OrganizationWrapper = styled.div`
  position: relative;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  padding: 1rem 4rem; // 좌우 패딩을 5rem으로 설정

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    padding: 1rem 2rem; // 화면이 작아질 때 패딩 줄임
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 1rem; // 모바일 화면에서 더 작은 패딩
  }
`;

const Title = styled(Headline1)`
  font-weight: ${props => props.theme.fontWeights.semibold};
  margin: 2rem;
  margin-bottom: 6rem;
  text-align: center;
`;


const Organization = () => {
  return (
    <OrganizationWrapper>
      <Content>
        <Title>제품형태</Title>
      </Content>
    </OrganizationWrapper>
  );
};

export default Organization;