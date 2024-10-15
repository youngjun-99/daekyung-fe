import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ProcessContent,
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
import heroImage from "/src/assets/images/process/hero.jpg";
import Production from "./Production";
import Quality from "./Quality";

const Process = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("production");

  useEffect(() => {
    const path = location.pathname;
    const tab = path.split("/").pop();
    if (tab && tab !== "process") {
      setActiveTab(tab);
    } else {
      navigate("/process/production", { replace: true });
    }
  }, [location, navigate]);

  const tabs = [
    { id: "production", label: "생산 공정", component: Production },
    { id: "quality", label: "품질 관리", component: Quality },
  ];

  const ActiveComponent =
    tabs.find((tab) => tab.id === activeTab)?.component || Production;

  return (
    <ProcessContent>
      <HeroSection>
        <HeroImage src={heroImage} />
        <HeroContent>
          <HeroSub>Process</HeroSub>
          <HeroTitle>생산</HeroTitle>
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
                navigate(`/process/${tab.id}`);
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
    </ProcessContent>
  );
};

export default Process;
