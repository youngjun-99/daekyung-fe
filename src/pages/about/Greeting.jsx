import React from 'react';
import styled from 'styled-components';
import { Headline1, Headline2, Body1 } from '../../styles/Typography';
import backgroundImage from '../../assets/images/ci_bg.svg';
import signatureImage from '../../assets/images/about/signature.png';
import signboardImage from '../../assets/images/about/signboard.png';

const GreetingWrapper = styled.div`
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${props => props.theme.colors.gray[0]};
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
  font-size: 3rem;
  font-weight: ${props => props.theme.fontWeights.semibold};
  margin: 2rem;
  margin-bottom: 6rem;
  text-align: center;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  width: 40%;
  z-index: 2;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const TextContainerWrapper = styled.div`
  width: 60%;
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

const TextContainerBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${backgroundImage});
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
  transform: scale(0.8) translateY(20%); // 배경 이미지를 아래로 이동
`;

const TextContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Subtitle = styled(Headline2)`
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: 2rem;
  font-size: 3.125rem;
  line-height: 1.3;
`;

const ParagraphsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const Paragraph = styled(Body1)`
  margin-bottom: 1rem;
  line-height: 2rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const SignatureContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 6rem;
  text-align: right;
  position: relative;
`;

const SignatureName = styled.p`
  font-size: 1.5rem; // 24px
  font-weight: ${props => props.theme.fontWeights.regular};
  margin-bottom: 0.5rem;
`;

const SignatureTitle = styled.p`
  font-size: 2.5rem; // 40px
  font-weight: ${props => props.theme.fontWeights.bold};
`;

const SignatureImage = styled.img`
  position: absolute;
  right: -2rem;
  top: -1rem;
  width: 6rem;
  height: auto;
`;

const DownloadButton = styled.button`
  background-color: ${props => props.theme.colors.gray[0]};
  color: ${props => props.theme.colors.primary[600]};
  border: 1px solid ${props => props.theme.colors.primary[700]};
  padding: 0.75rem 1.25rem;
  margin-bottom: 6rem;
  border-radius: 0.25rem;
  font-weight: ${props => props.theme.fontWeights.medium};
  transition: all 0.3s ease;
  margin-top: 2rem;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: ${props => props.theme.colors.primary[50]};
  }
`;

const Greeting = () => {
  const handleDownload = () => {
    const fileUrl = 'src/assets/file/catalog.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'catalog.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <GreetingWrapper>
      <Background />
      <Content>
        <Title>인사말</Title>
        
        <FlexContainer>
          <ImageContainer>
            <Image src={signboardImage} alt="대경인쇄 외부 전경" />
          </ImageContainer>
          
          <TextContainerWrapper>
            <TextContainerBackground />
            <TextContainer>
              <Subtitle>
                고객의 꿈을 내 꿈처럼 함께 생각하는 회사<br />
                고객과 함께 발전하는 회사
              </Subtitle>
              <ParagraphsContainer>
                <Paragraph>
                  안녕하세요 주식회사 대경인쇄 대표 노진명입니다.
                </Paragraph>
                <Paragraph>
                  주식회사 대경인쇄는 고객의 꿈과 희망을 함께 키워가는 기업으로,<br/>
                  포장지사업분야에 이바지하며 포장지가 고내의 영혼이자 당신의 정의이라는 책임감으로<br/>
                  제조 관련된 공정마다 최사 일정의 모두가 최선을 다하며 최고의 제품을 만들기 위해<br/>
                  최선을 다하고 있습니다.
                </Paragraph>
                <Paragraph>
                  언제나 고객과 회사가 함상 함계한다는 각오로 더 나은 제품개발과 협력을 통해<br/>
                  신뢰를 받는 기업 그리고 인정받는 기업이 되도록 최선을 다할 것을 약속드립니다.
                </Paragraph>
              </ParagraphsContainer>
            </TextContainer>
          </TextContainerWrapper>
        </FlexContainer>
        <SignatureContainer>
          <SignatureName>주식회사 대경인쇄 대표</SignatureName>
          <SignatureTitle>노 진 명</SignatureTitle>
          <SignatureImage src={signatureImage} alt="노진명 서명" />
        </SignatureContainer>
        
        <DownloadButton as="button" onClick={handleDownload}>
          E-카탈로그 다운로드
        </DownloadButton>
      </Content>
    </GreetingWrapper>
  );
};

export default Greeting;