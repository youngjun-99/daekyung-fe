import React from 'react';
import styled from 'styled-components';
import { Headline1, Body1 } from '../../styles/Typography';
import firstCertImage from '../../assets/images/about/cert_1.png';
import secondCertImage from '../../assets/images/about/cert_2.png';

const CertificationWrapper = styled.div`
  position: relative;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  padding: 1rem 4rem;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    padding: 1rem 2rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 1rem;
  }
`;

const Title = styled(Headline1)`
  font-size: 3rem;
  font-weight: ${props => props.theme.fontWeights.semibold};
  margin: 2rem;
  margin-bottom: 6rem;
  text-align: center;
`;

const CertificationsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-bottom: 6rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const CertItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CertImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

const CertDescription = styled(Body1)`
  font-size: 1.5rem;
  font-weight: ${props => props.theme.fontWeights.normal};
`;

const Certification = () => {
    return (
        <CertificationWrapper>
            <Content>
                <Title>인증현황</Title>
                <CertificationsContainer>
                    <CertItem>
                        <CertImage src={firstCertImage} alt="중소기업 확인서" />
                        <CertDescription>중소기업 확인서</CertDescription>
                    </CertItem>
                    <CertItem>
                        <CertImage src={secondCertImage} alt="경영혁신형 중소기업(MAIN-BIZ) 확인서" />
                        <CertDescription>경영혁신형 중소기업(MAIN-BIZ) 확인서</CertDescription>
                    </CertItem>
                </CertificationsContainer>
            </Content>
        </CertificationWrapper>
    );
};

export default Certification;