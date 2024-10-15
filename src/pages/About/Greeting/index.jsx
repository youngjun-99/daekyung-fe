import React from "react";
import signboardImage from "/src/assets/images/about/signboard.png";
import signatureImage from "/src/assets/images/about/signature.png";
import DownloadIcon from "/src/components/icons/DownloadIcon";
import LogoIcon from "/src/components/icons/LogoIcon";
import catalogFile from "/src/assets/file/catalog.pdf";
import {
  GreetingContent,
  TitleSection,
  Title,
  DownloadButton,
  DownloadIconContainer,
  Container,
  TextContainerWrapper,
  TextContainerBackground,
  TextContainer,
  Subtitle,
  ParagraphsContainer,
  Paragraph,
  SignboardContainer,
  SignboardImage,
  SignatureContainer,
  SignatureName,
  SignatureTitle,
  SignatureImage,
} from "./styles";

const Greeting = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 789);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 789);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = catalogFile;
    link.setAttribute("download", "catalog.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <GreetingContent>
      <TitleSection>
        <Title>인사말</Title>
        <DownloadButton onClick={handleDownload}>
          E-카탈로그 다운로드
          <DownloadIconContainer>
            <DownloadIcon color="#166CE3" />
          </DownloadIconContainer>
        </DownloadButton>
      </TitleSection>
      <Container>
        <SignboardContainer>
          <SignboardImage src={signboardImage} alt="대경인쇄 외부 전경" />
        </SignboardContainer>
        <TextContainerWrapper>
          <TextContainerBackground>
            <LogoIcon minw={300} maxw={600} minh={155.17} maxh={310.34} />
          </TextContainerBackground>
          <TextContainer>
            <Subtitle>
              고객의 꿈을 내 꿈처럼 함께 생각하는 회사
              <br />
              고객과 함께 발전하는 회사
            </Subtitle>
            <ParagraphsContainer>
              <Paragraph>
                안녕하세요 주식회사 대경인쇄 대표 노진명입니다.
              </Paragraph>
              <Paragraph>
                {isMobile ? (
                  "주식회사 대경인쇄는 고객의 꿈과 희망을 함께 키워가는 기업으로, 포장지산업발전에 이바지하며 포장지가 귀사의 얼굴이자 당사의 얼굴이라는 책임감으로 제조 관련된 공정마다 회사 임직원 모두가 최선을 다하며 최고의 제품을 만들기 위해 최선을 다하고 있습니다."
                ) : (
                  <>
                    주식회사 대경인쇄는 고객의 꿈과 희망을 함께 키워가는
                    기업으로,
                    <br />
                    포장지산업발전에 이바지하며 포장지가 귀사의 얼굴이자 당사의
                    얼굴이라는 책임감으로
                    <br />
                    제조 관련된 공정마다 회사 임직원 모두가 최선을 다하며 최고의
                    제품을 만들기 위해
                    <br />
                    최선을 다하고 있습니다.
                  </>
                )}
              </Paragraph>
              <Paragraph>
                {isMobile ? (
                  "언제나 고객과 회사가 항상 함께한다는 각오로 더 나은 제품개발과 협력을 통해 신뢰를 받는 기업 그리고 인정받는 기업이 되도록 최선을 다할 것을 약속드립니다."
                ) : (
                  <>
                    언제나 고객과 회사가 항상 함께한다는 각오로 더 나은
                    제품개발과 협력을 통해 <br />
                    신뢰를 받는 기업 그리고 인정받는 기업이 되도록 최선을 다할
                    것을 약속드립니다.
                  </>
                )}
              </Paragraph>
            </ParagraphsContainer>
          </TextContainer>
          <SignatureContainer>
            <SignatureName>주식회사 대경인쇄 대표</SignatureName>
            <SignatureTitle>노 진 명</SignatureTitle>
            <SignatureImage src={signatureImage} alt="노진명 서명" />
          </SignatureContainer>
        </TextContainerWrapper>
      </Container>
    </GreetingContent>
  );
};

export default Greeting;
