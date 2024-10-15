import React from "react";
import {
  FunctionContent,
  TitleSection,
  Title,
  FunctionItem,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductContent,
  UsageTitle,
  UsageText,
  Container,
} from "./styles";
import f1Image from "/src/assets/images/product/f_1.png";
import f2Image from "/src/assets/images/product/f_2.png";
import f3Image from "/src/assets/images/product/f_3.png";
import f4Image from "/src/assets/images/product/f_4.png";
import f5Image from "/src/assets/images/product/f_5.png";
import f6Image from "/src/assets/images/product/f_6.png";
import f7Image from "/src/assets/images/product/f_7.png";

const Function = () => {
  const functions = [
    {
      image: f1Image,
      title: "내열성 포장지",
      content:
        "레토르트 파우치용 필름으로 각종 살균제품과 장기보존제품에 적합하며 고내열성 포장지로 살균처리를 하였을 시 장기적 보존이 가능함",
      use: "각종 탕류, 인스턴트 식품, 반조리 식품, 한약 및 건강식품, 기타 모든 식품류",
    },
    {
      image: f2Image,
      title: "차단성 포장지 (알루미늄)",
      content: "방습성, 보향성을 필요로 하는 제품에 사용함",
      use: "김 포장류, 김치, 다시마, 소스류, 제약, 비료, 농약 등 모든 식품류",
    },
    {
      image: f3Image,
      title: "차단성 포장지 (Vacuumevaporation)",
      content:
        "알루미늄 대용으로 주로 쓰이며 제품이 외부에 노출되지 않도록 할 수 있으며 방습성, 보향성을 필요로 하는 제품에 사용함",
      use: "동물사료, 커피, 제과 등 모든 식품류",
    },
    {
      image: f4Image,
      title: "NY 진공포장지",
      content:
        "제품을 넣고 진공, 살균 처리하면 장기적인 보존 가능하며 기계적강도와 가스차단성이 우수하고 진공포장, 액체포장 및 냉장, 냉동식품 포장용으로 사용함",
      use: "스낵류, 떡류, 생면류, 농·수·축산물, 쌀 포장지, 김치 및 육가공품, 냉동식품, 진공식품 및 분말 포장용 등 모든 식품류",
    },
    {
      image: f5Image,
      title: "PET 포장지",
      content:
        "나이론에 비해 강질로서 수분 차단성이 좋으며 가격이 저렴한 장점을 보유함",
      use: "냉동식품류, 견과류 등 모든 식품류",
    },
    {
      image: f6Image,
      title: "OPP 포장지",
      content:
        "투명성 및 표면광택이 좋은 장점을 가지고 있으나 열접착성이 낮아 가벼운 제품의 포장에 제한적으로 사용함",
      use: "건어물, 건조식품, 분말제품, 라벨 등 모든 식품류",
    },
    {
      image: f7Image,
      title: "수축필름",
      content:
        "액체나 충격에 떨어지거나 지워지지 않고 영구적 보존가능하며 여러 모양이나 형태에도 완전하게 부착되어 부착공정 자동화가 가능함",
      use: "캡씰, 성형포장, 음료라벨, 바디레벨",
    },
  ];

  return (
    <FunctionContent>
      <TitleSection>
        <Title>제품 기능</Title>
      </TitleSection>
      <Container>
        {functions.map((item, index) => (
          <FunctionItem key={index}>
            <ProductImage src={item.image} alt={item.title} />
            <ProductInfo>
              <ProductTitle>{item.title}</ProductTitle>
              <ProductContent>{item.content}</ProductContent>
              <UsageTitle>사용용도</UsageTitle>
              <UsageText>{item.use}</UsageText>
            </ProductInfo>
          </FunctionItem>
        ))}
      </Container>
    </FunctionContent>
  );
};

export default Function;
