import React from 'react';
import styled from 'styled-components';
import { Headline1, Body1 } from '../../styles/Typography';
import firstImage from '../../assets/images/products/function/01_내열.png'
import secondImage from '../../assets/images/products/function/02_차단.png'
import thirdImage from '../../assets/images/products/function/03_차단성.png'
import fourthImage from '../../assets/images/products/function/04_ny.png'
import fifthImage from '../../assets/images/products/function/05_pet.png'
import sixthImage from '../../assets/images/products/function/06_opp.png'
import seventhImage from '../../assets/images/products/function/07_수축.png'

const FunctionWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  margin: 0 2rem;
  padding: 2rem 1rem;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
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

const ProductTable = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductRow = styled.div`
  display: flex;
  max-height: 330px;
  border-top: 1px solid ${props => props.theme.colors.gray[100]};
  margin-bottom: 2rem;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
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
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
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
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: calc(100% - 4rem);
  }
`;

const ProductTitle = styled(Body1)`
  font-size: 1.5rem;
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled(Body1)`
  font-size: 1.125rem;
  color: ${props => props.theme.colors.gray[600]};
  margin-bottom: 1rem;
`;

const ProductUsageTitle = styled(Body1)`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.colors.primary[500]};
`;

const ProductUsage = styled(Body1)`
  font-size: 1.125rem;
  color: ${props => props.theme.colors.gray[600]};
`;

const Function = () => {
  const products = [
    { image: firstImage, title: "내열성 포장지", description: "내열포장 파우치를 활용으로 높은 온도에서도 변기나눈 변질에 적합하며, 고압멸균 포장지로 살균처리를 압축해 시 잔기히 봉합이 가능함", usage: "각종 탕류, 만두류의 식품, 밤조리 식품, 참치 및 건강식품, 기타 고온 식품류" },
    { image: secondImage, title: "차단성 포장지 (알루미늄)", description: "알루미늄 포함재질을 적용한 차단 제품에 사용함", usage: "김 포장류, 참치, 다시팩, 스프류, 제과, 바륨, 향균류 포한 식품류" },
    { image: thirdImage, title: "차단성 포장지 (Vacuumevaporation)", description: "알루미늄 대체공법으로 우수 산하이 바람이 차단에 노출되지 않도록 하여 주모주의 방지를 원하는 식품 제품에 사용함", usage: "울 형식품, 커피, 제과류 등의 식품류" },
    { image: fourthImage, title: "NY 진공포장지", description: "제품을 넓고 진한, 설정 차단하여 원가대비 높은 기능하에 가능하므로  가스차단성이 우수하고 진공포장, 냉동보관 및 냉동, 냉동 식품 포장용으로 사용함", usage: "수, 육류, 해물, 참치류, 농수축임, 환 포장지, 김치 및 축가공품, 냉동식품, 장기저장 및 발효 포장물 등 모든 식품류" },
    { image: fifthImage, title: "PET 포장지", description: "나이로진과 비해 강도높아 수축 지단성이 좋으며 가격이 저럼함 장점을 보유함", usage: "냉온음료용, 과자류 등 모든 식품류" },
    { image: sixthImage, title: "OPP 포장지", description: "투명성 및 향단벽성이 좋은 장점을 가지고 있으며 가격저럼하여 살이 가벼운 제품의 포장에 주료이용되는 사용함", usage: "건과류, 건조식품, 반찬류를 등 모든 식품류" },
    { image: seventhImage, title: "수축필름", description: "열에 의해 수축하여 포장지가 치여지지 않게 정인 압출공정을 원들에 제품 표면 압축정도 쉽게 포장하여 겉포장을 자동화하 기기용", usage: "탄량, 음료류를, 음료펫병, 비식품류" },
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