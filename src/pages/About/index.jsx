import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AboutContent,
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
import heroImage from "/src/assets/images/about/hero.png";
import Greeting from "./Greeting";
import History from "./History";
import Organization from "./Organization";
import Certifications from "./Certifications";
import Location from "./Location";

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("greeting");

  useEffect(() => {
    const path = location.pathname;
    const tab = path.split("/").pop();
    if (tab && tab !== "about") {
      setActiveTab(tab);
    } else {
      navigate("/about/greeting", { replace: true });
    }
  }, [location, navigate]);

  const tabs = [
    { id: "greeting", label: "인사말", component: Greeting },
    { id: "history", label: "회사연혁", component: History },
    { id: "organization", label: "조직도", component: Organization },
    { id: "certifications", label: "인증현황", component: Certifications },
    { id: "location", label: "사업장 위치", component: Location },
  ];

  const ActiveComponent =
    tabs.find((tab) => tab.id === activeTab)?.component || Greeting;

  return (
    <AboutContent>
      <HeroSection>
        <HeroImage src={heroImage} />
        <HeroContent>
          <HeroSub>Company</HeroSub>
          <HeroTitle>회사소개</HeroTitle>
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
                navigate(`/about/${tab.id}`);
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
    </AboutContent>
  );
};

export default About;
