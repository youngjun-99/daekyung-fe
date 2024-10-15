import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ProductContent,
  HeroSection,
  HeroImage,
  HeroContent,
  HeroSub,
  HeroTitle,
  Container,
  TabNavigation,
  TabButton,
  TabContent,
} from "./styles";
import heroImage from "/src/assets/images/product/hero.png";
import Function from "./Function";
import Type from "./Type";

const Product = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("type");

  useEffect(() => {
    const path = location.pathname;
    const tab = path.split("/").pop();
    if (tab && tab !== "product") {
      setActiveTab(tab);
    } else {
      navigate("/product/type", { replace: true });
    }
  }, [location, navigate]);

  const tabs = [
    { id: "type", label: "제품 형태", component: Type },
    { id: "function", label: "제품 기능", component: Function },
  ];

  const ActiveComponent =
    tabs.find((tab) => tab.id === activeTab)?.component || Type;

  return (
    <ProductContent>
      <HeroSection>
        <HeroImage src={heroImage} />
        <HeroContent>
          <HeroSub>Product</HeroSub>
          <HeroTitle>제품</HeroTitle>
        </HeroContent>
      </HeroSection>

      <Container>
        <TabNavigation>
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              $active={activeTab === tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                navigate(`/product/${tab.id}`);
              }}
            >
              {tab.label}
            </TabButton>
          ))}
        </TabNavigation>
        <TabContent>
          <ActiveComponent />
        </TabContent>
      </Container>
    </ProductContent>
  );
};

export default Product;
