import React from "react";
import {
  TypeContent,
  TitleSection,
  Title,
  TypeItem,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductContent,
  Container,
} from "./styles";
import t1Image from "/src/assets/images/product/t_1.png";
import t2Image from "/src/assets/images/product/t_2.png";
import t3Image from "/src/assets/images/product/t_3.png";
import t4Image from "/src/assets/images/product/t_4.png";
import t5Image from "/src/assets/images/product/t_5.png";
import t6Image from "/src/assets/images/product/t_6.png";
import t7Image from "/src/assets/images/product/t_7.png";
import t8Image from "/src/assets/images/product/t_8.png";
import t9Image from "/src/assets/images/product/t_9.png";
import t10Image from "/src/assets/images/product/t_10.png";

const Type = () => {
  const types = [
    {
      image: t1Image,
      title: "2방 파우치 (2 Side seal pouch)",
      content:
        "두 측면이 실링되고 위 또는 아래가 개방된 소형 포장에 적합한 파우치로, 주로 소분 포장에 사용됩니다.",
    },
    {
      image: t2Image,
      title: "3방 파우치 (3 Side seal pouch)",
      content:
        "세 측면이 실링되고 한 측면이 개방되어, 스낵류나 간편식 같은 제품을 공간 효율적으로 포장하는 데 적합합니다.",
    },
    {
      image: t3Image,
      title: "스탠드 파우치 (Stand-up pouch)",
      content:
        "바닥이 접혀 있어 세워서 보관할 수 있는 파우치로, 액체나 파우더 제품을 담기에 용이하며 진열에 적합합니다.",
    },
    {
      image: t4Image,
      title: "박스 파우치 (Flat bottom pouch)",
      content:
        "상자 모양으로 세울 수 있는 구조의 파우치로, 고급스러운 느낌을 제공하여 프리미엄 식품이나 반려동물 사료 포장에 사용됩니다.",
    },
    {
      image: t5Image,
      title: "M방 파우치 (M seal pouch)",
      content:
        "바닥이 M자 형태로 접힌 파우치로, 견과류나 커피 같은 부피가 큰 제품을 포장할 때 용량을 확장하여 사용할 수 있습니다.",
    },
    {
      image: t6Image,
      title: "T방 파우치 (T seal pouch)",
      content:
        "상단에 T자 실링이 되어 소형 제품을 깔끔하게 포장할 수 있으며, 식품 샘플이나 미용 시트 포장에 적합합니다.",
    },
    {
      image: t7Image,
      title: "스파우트 파우치 (Spout pouch)",
      content:
        "음료, 소스, 세제 등 액체 제품을 간편하게 사용하고, 휴대할 수 있도록 스파우트(입구)가 달린 포장에 적합합니다.",
    },
    {
      image: t8Image,
      title: "자동롤 (Roll stock)",
      content:
        "연속 롤 형태로 감긴 필름으로 대규모 생산 라인에서 효율적으로 포장할 수 있어 식품 및 비닐 포장에 많이 사용됩니다.",
    },
    {
      image: t9Image,
      title: "리드지/이지필 (Lidding film/Easy-Peel)",
      content:
        "소비자의 편리한 개봉을 위해 최적화된 필름으로, 다양한 용기 재질에 안정적인 씰링과 깔끔한 필 오프 성능을 제공합니다.",
    },
    {
      image: t10Image,
      title: "열성형필름(Multivac)",
      content:
        "멀티박 열성형 포장기에 최적화된 상·하단 필름으로, 고성형성과 고차단성이 요구되는 진공포장에 적합한 다층 구조를 갖추고 있습니다.",
    },
  ];

  return (
    <TypeContent>
      <TitleSection>
        <Title>제품 형태</Title>
      </TitleSection>
      <Container>
        {types.map((item, index) => (
          <TypeItem key={index}>
            <ProductInfo>
              <ProductTitle>{item.title}</ProductTitle>
              <ProductContent>{item.content}</ProductContent>
            </ProductInfo>
            <ProductImage src={item.image} alt={item.title} />
          </TypeItem>
        ))}
      </Container>
    </TypeContent>
  );
};

export default Type;
