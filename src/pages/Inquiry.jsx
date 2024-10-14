import React, { useState } from "react";
import styled from "styled-components";
import { Display1, Headline1, Body1 } from "../styles/Typography";
import inquiryImage from "../assets/images/inquiry.png";
import categorySearchIcon from "../assets/images/inquiry/category_search.png";
import priceChangeIcon from "../assets/images/inquiry/price_change.png";

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
  color: ${(props) => props.theme.colors.gray[0]};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
`;

const Container = styled.div`
  margin: 0 10rem;
  padding: 4rem 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 3rem 2rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 2rem 1rem;
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled(Headline1)`
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  margin-bottom: 4rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[300]};
`;

const InquiryTypeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const InquiryTypeButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 378px;
  height: 325px;
  border: 1px solid ${(props) => props.theme.colors.gray[300]};
  border-radius: 0.5rem;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus,
  &.active {
    background-color: ${(props) => props.theme.colors.primary[200]};
  }
`;

const IconWrapper = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100px;
    height: 100px;
  }
`;

const IconImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const InquiryTypeText = styled(Body1)`
  font-size: 2rem; // 32px
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  color: ${(props) => props.theme.colors.primary[500]};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CustomerInfoGrid = styled.div`
  margin: 4rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  gap: 2.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const InputLabel = styled.label`
  font-size: 2rem; // 32px
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  min-width: 100px;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.8rem;
  margin-right: 2rem;
  border: 1px solid ${(props) => props.theme.colors.gray[300]};
  border-radius: 0.25rem;
  border-color: #e5e5ec;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 1.5rem 1rem 0.5rem;
  border: 1px solid #e5e5ec;
  border-radius: 0.25rem;
  resize: vertical;
  font-size: 1rem;
  line-height: 1.2;
  vertical-align: top;

  &::placeholder {
    vertical-align: top;
    line-height: 0.5; // placeholder를 위로 올리기 위해 line-height 증가
  }
`;

const AgreementSection = styled.div`
  background-color: ${(props) => props.theme.colors.gray[100]};
  padding: 1rem;
  border-radius: 0.25rem;
  max-height: 200px;
  overflow-y: auto;
`;

const AgreementContent = styled(Body1)`
  white-space: pre-wrap;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.colors.primary.DEFAULT};
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: bold;
  align-self: flex-start;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary[600]};
  }
`;

const Inquiry = () => {
  const [inquiryType, setInquiryType] = useState("");
  const [requestCatalog, setRequestCatalog] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 제출 로직 구현
  };

  return (
    <PageWrapper>
      <HeroSection>
        <HeroImage src={inquiryImage} alt="고객문의" />
        <HeroOverlay>
          <HeroTitle>고객문의</HeroTitle>
        </HeroOverlay>
      </HeroSection>

      <Container>
        <Form onSubmit={handleSubmit}>
          <Section>
            <SectionTitle>문의 유형</SectionTitle>
            <InquiryTypeContainer>
              <InquiryTypeButton
                type="button"
                onClick={() => setInquiryType("product")}
                className={inquiryType === "product" ? "active" : ""}
              >
                <IconWrapper>
                  <IconImage src={categorySearchIcon} alt="제품문의" />
                </IconWrapper>
                <InquiryTypeText>제품문의</InquiryTypeText>
              </InquiryTypeButton>
              <InquiryTypeButton
                type="button"
                onClick={() => setInquiryType("quotation")}
                className={inquiryType === "quotation" ? "active" : ""}
              >
                <IconWrapper>
                  <IconImage src={priceChangeIcon} alt="견적문의" />
                </IconWrapper>
                <InquiryTypeText>견적문의</InquiryTypeText>
              </InquiryTypeButton>
            </InquiryTypeContainer>
          </Section>

          <Section>
            <SectionTitle>고객 정보</SectionTitle>
            <CustomerInfoGrid>
              <InputGroup>
                <InputLabel>회사명</InputLabel>
                <Input
                  type="text"
                  placeholder="회사명을 입력해 주세요."
                  required
                />
              </InputGroup>
              <InputGroup>
                <InputLabel>성함</InputLabel>
                <Input
                  type="text"
                  placeholder="성함을 입력해 주세요."
                  required
                />
              </InputGroup>
              <InputGroup>
                <InputLabel>연락처</InputLabel>
                <Input
                  type="tel"
                  placeholder="(-) 없이 숫자만 입력해 주세요."
                  required
                />
              </InputGroup>
              <InputGroup>
                <InputLabel>이메일</InputLabel>
                <Input
                  type="email"
                  placeholder="(-) 없이 숫자만 입력해 주세요."
                  required
                />
              </InputGroup>
            </CustomerInfoGrid>
          </Section>

          <Section>
            <SectionTitle>문의 사항</SectionTitle>
            <TextArea placeholder="문의사항을 입력해 주세요." required />
          </Section>

          <Section>
            <SectionTitle>약관 동의</SectionTitle>
            <AgreementSection>
              <AgreementContent>
                {`<(주)대경인쇄>(이하 '회사')는 고객문의 서비스 제공을 위해 「개인정보 보호법」 제15조 제1항
제1호 및 제22조 제1항 제7호에 따라 다음의 개인정보 항목을 필요 최소한의 범위에서 정보주체의 동의를 받아 수집·이용합니다.

1. 수집 항목 : 이름, 연락처, 이메일
2. 수집 목적 : 고객문의 접수 및 처리, 문의 내용 확인 및 답변, 서비스 개선을 위한 참고, 추가 정보 요청 시 연락
3. 보유 및 이용기간 : 고객문의 답변 완료 후 지체 없이 파기합니다. 
   단, 소비자의 불만 또는 분쟁처리의 관한 기록은 전자상거래등에서의 소비자보호에 관한 법률 시행령 제6조에 따라 3년간 보관합니다.
4. 개인정보의 제3자 제공 여부 : 원칙적으로 고객님의 개인정보는 제3자에게 제공되지 않습니다. 다만, 법령에 따라 의무적으로 제출해야 하는 경우에는 예외로 합니다.
5. 동의 거부 권리 및 동의 거부 시 불이익 : 고객님은 회사의 개인정보 수집·이용에 동의하지 않을 권리가 있습니다.
   다만, 동의 거부 시 고객문의 접수 및 답변 제공이 제한될 수 있습니다.`}
              </AgreementContent>
            </AgreementSection>
            <CheckboxLabel>
              <input type="checkbox" required />
              <Body1>개인정보 수집 및 이용에 동의합니다. (필수)</Body1>
            </CheckboxLabel>
          </Section>

          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              checked={requestCatalog}
              onChange={() => setRequestCatalog(!requestCatalog)}
            />
            <Body1>카탈로그 요청하기</Body1>
          </CheckboxContainer>

          <SubmitButton type="submit">문의하기</SubmitButton>
        </Form>
      </Container>
    </PageWrapper>
  );
};

export default Inquiry;
