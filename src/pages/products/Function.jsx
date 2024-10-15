import React from "react";
import styled from "styled-components";
import { Headline1, Body1 } from "../../styles/Typography";
import firstImage from "../../assets/images/products/function/01_내열.png";
import secondImage from "../../assets/images/products/function/02_차단.png";
import thirdImage from "../../assets/images/products/function/03_차단성.png";
import fourthImage from "../../assets/images/products/function/04_ny.png";
import fifthImage from "../../assets/images/products/function/05_pet.png";
import sixthImage from "../../assets/images/products/function/06_opp.png";
import seventhImage from "../../assets/images/products/function/07_수축.png";

const FunctionWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  margin: 0 2rem;
  padding: 2rem 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 1rem;
  }
`;

const Title = styled(Headline1)`
  font-size: 3rem;
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  margin: 2rem;
  margin-bottom: 6rem;
  text-align: center;
`;

const ProductTable = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductRow = styled.div`
  display: flex;
  max-height: 330px;
  border-top: 1px solid ${(props) => props.theme.colors.gray[100]};
  margin-bottom: 2rem;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    height: auto;
  }
`;

const ProductImage = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: calc(100% - 4rem);
    height: 300px;
  }
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const ProductInfo = styled.div`
  width: 60%;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: calc(100% - 4rem);
  }
`;

const ProductTitle = styled(Body1)`
  font-size: 1.5rem;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled(Body1)`
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.gray[600]};
  margin-bottom: 1rem;
`;

const ProductUsageTitle = styled(Body1)`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary[500]};
`;

const ProductUsage = styled(Body1)`
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.gray[600]};
`;

const Function = () => {
  const products = [
    {
      image: firstImage,
      title: "내열성 포장지",
      description:
        "레토르트 파우치용 필름으로 각종 살균제품과 장기보존제품에 적합하며 고내열성 포장지로 살균처리를 하였을 시 장기적 보존이 가능함",
      usage:
        "각종 탕류, 인스턴트 식품, 반조리 식품, 한약 및 건강식품, 기타 모든 식품류",
    },
    {
      image: secondImage,
      title: "차단성 포장지 (알루미늄)",
      description: "방습성, 보향성을 필요로 하는 제품에 사용함",
      usage: "김 포장류, 김치, 다시마, 소스류, 제약, 비료, 농약 등 모든 식품류",
    },
    {
      image: thirdImage,
      title: "차단성 포장지 (Vacuumevaporation)",
      description:
        "알루미늄 대용으로 주로 쓰이며 제품이 외부에 노출되지 않도록 할 수 있으며 방습성, 보향성을 필요로 하는 제품에 사용함",
      usage: "동물사료, 커피, 제과 등 모든 식품류",
    },
    {
      image: fourthImage,
      title: "NY 진공포장지",
      description:
        "제품을 넣고 진공, 살균 처리하면 장기적인 보존 가능하며 기계적강도와 가스차단성이 우수하고 진공포장, 액체포장 및 냉장, 냉동식품 포장용으로 사용함",
      usage:
        "스낵류, 떡류, 생면류, 농·수·축산물, 쌀 포장지, 김치 및 육가공품, 냉동식품, 진공식품 및 분말 포장용 등 모든 식품류",
    },
    {
      image: fifthImage,
      title: "PET 포장지",
      description:
        "나이론에 비해 강질로서 수분 차단성이 좋으며 가격이 저렴한 장점을 보유함",
      usage: "냉동식품류, 견과류 등 모든 식품류",
    },
    {
      image: sixthImage,
      title: "OPP 포장지",
      description:
        "투명성 및 표면광택이 좋은 장점을 가지고 있으나 열접착성이 낮아 가벼운 제품의 포장에 제한적으로 사용함",
      usage: "건어물, 건조식품, 분말제품, 라벨 등 모든 식품류",
    },
    {
      image: seventhImage,
      title: "수축필름",
      description:
        "액체나 충격에 떨어지거나 지워지지 않고 영구적 보존가능하며 여러 모양이나 형태에도 완전하게 부착되어 부착공정 자동화가 가능함",
      usage: "캡씰, 성형포장, 음료라벨, 바디레벨",
    },
  ];

  return (
    <FunctionWrapper>
      <Content>
        <Title>제품기능</Title>
        <ProductTable>
          {products.map((product, index) => (
            <ProductRow key={index}>
              <ProductImage>
                <StyledImage src={product.image} alt={product.title} />
              </ProductImage>
              <ProductInfo>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductUsageTitle>사용용도</ProductUsageTitle>
                <ProductUsage>{product.usage}</ProductUsage>
              </ProductInfo>
            </ProductRow>
          ))}
        </ProductTable>
      </Content>
    </FunctionWrapper>
  );
};

export default Function;
