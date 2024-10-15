import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FacilityContent,
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
import heroImage from "/src/assets/images/facility/hero.jpg";
import Summary from "./Summary";
import Current from "./Current";

const Facilities = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("summary");

  useEffect(() => {
    const path = location.pathname;
    const tab = path.split("/").pop();
    if (tab && tab !== "facilities") {
      setActiveTab(tab);
    } else {
      navigate("/facility/summary", { replace: true });
    }
  }, [location, navigate]);

  const tabs = [
    { id: "summary", label: "설비 개요", component: Summary },
    { id: "current", label: "설비 현황", component: Current },
  ];

  const ActiveComponent =
    tabs.find((tab) => tab.id === activeTab)?.component || Summary;

  return (
    <FacilityContent>
      <HeroSection>
        <HeroImage src={heroImage} />
        <HeroContent>
          <HeroSub>Facilities</HeroSub>
          <HeroTitle>설비</HeroTitle>
        </HeroContent>
      </HeroSection>

      <Container>
        <TabNavigation>
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              isActive={activeTab === tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                navigate(`/facility/${tab.id}`);
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
    </FacilityContent>
  );
};

export default Facilities;
