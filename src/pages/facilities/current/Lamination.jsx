import { React, useState } from "react";
import styled from "styled-components";
import dryImage from "/src/assets/images/facilities/lamination/dry.png";
import tdieImage from "/src/assets/images/facilities/lamination/tdie.png";
import Dry from "./lamination/Dry";
import Tdie from "./lamination/Tdie";

const LaminationWrapper = styled.div`
  position: relative;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  padding: 1rem 4rem;

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 1rem 2rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 1rem;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  margin: 0 1rem;
`;

const Image = styled.img`
  margin-top: 10rem;
  max-width: 100%;
  height: auto;
`;

const ImageLabel = styled.div`
  position: absolute;
  padding-top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.5rem; // 40px in rem
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  color: ${(props) => props.theme.colors.gray[900]};
`;

const MachineTab = styled.div`
  margin: 0 18rem;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    height: 80%;
    width: 1px;
    background-color: ${(props) => props.theme.colors.gray[300]};
  }
`;

const TabButton = styled.button`
  margin: 0 1rem;
  padding: 0.75rem 1.5rem;
  font-size: ${(props) => (props.active ? "3rem" : "1.75rem")};
  font-weight: ${(props) =>
    props.active
      ? props.theme.fontWeights.semibold
      : props.theme.fontWeights.regular};
  color: ${(props) =>
    props.active ? props.theme.colors.gray[900] : props.theme.colors.gray[300]};
  background-color: #ffffff;
  width: 30%;
  border-radius: 0.5rem;
  border: none;
`;

const TabContent = styled.div`
  margin-top: 1.5rem;
`;

const Lamination = () => {
  const [activeTab, setActiveTab] = useState("dry");

  const tabs = [
    { id: "dry", label: "드라이" },
    { id: "tdie", label: "T-다이" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dry":
        return <Dry />;
      case "tdie":
        return <Tdie />;
      default:
        return <Dry />;
    }
  };

  return (
    <LaminationWrapper>
      <Content>
        <ImageContainer>
          <ImageWrapper>
            <ImageLabel>드라이</ImageLabel>
            <Image src={dryImage} alt="dry 이미지" />
          </ImageWrapper>
          <ImageWrapper>
            <ImageLabel>T-다이</ImageLabel>
            <Image src={tdieImage} alt="tdie 이미지" />
          </ImageWrapper>
        </ImageContainer>
        <MachineTab>
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </TabButton>
          ))}
        </MachineTab>
        <TabContent>{renderContent()}</TabContent>
      </Content>
    </LaminationWrapper>
  );
};

export default Lamination;
