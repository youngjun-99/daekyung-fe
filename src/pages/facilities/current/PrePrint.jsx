import React, { useState } from "react";
import styled from "styled-components";
import { Headline1 } from "/src/styles/Typography";
import prePrintMachine1 from "/src/assets/images/facilities/preprint/machine1.png";
import prePrintMachine2 from "/src/assets/images/facilities/preprint/machine2.png";
import Ninecolor from "./preprint/Ninecolor";
import Tencolor from "./preprint/Tencolor";

const PrePrintWrapper = styled.div`
  position: relative;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  padding: 1rem 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 1rem 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1rem;
  }
`;

const Title = styled(Headline1)`
  font-size: 2.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-top: 4rem;
  margin-bottom: 6rem;
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 18rem;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const ColorTab = styled.div`
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
    background-color: ${({ theme }) => theme.colors.gray[300]};
  }
`;

const TabButton = styled.button`
  margin: 0 1rem;
  padding: 0.75rem 1.5rem;
  font-size: ${({ active }) => (active ? "3rem" : "1.75rem")};
  font-weight: ${({ active, theme }) =>
    active ? theme.fontWeights.semibold : theme.fontWeights.regular};
  color: ${({ active, theme }) =>
    active ? theme.colors.gray[900] : theme.colors.gray[300]};
  background-color: #ffffff;
  width: 30%;
  border-radius: 0.5rem;
  border: none;
`;

const TabContent = styled.div`
  margin-top: 1.5rem;
`;

const PrePrint = () => {
  const [activeTab, setActiveTab] = useState("ninecolor");

  const tabs = [
    { id: "ninecolor", label: "9도 인쇄기", component: Ninecolor },
    { id: "tencolor", label: "10도 인쇄기", component: Tencolor },
  ];

  return (
    <PrePrintWrapper>
      <Content>
        <Title>인쇄기</Title>
        <ImageContainer>
          <Image src={prePrintMachine1} alt="인쇄기기 1" />
          <Image src={prePrintMachine2} alt="인쇄기기 2" />
        </ImageContainer>
        <ColorTab>
          {tabs.map(({ id, label }) => (
            <TabButton
              key={id}
              active={activeTab === id}
              onClick={() => setActiveTab(id)}
            >
              {label}
            </TabButton>
          ))}
        </ColorTab>

        <TabContent>
          {tabs.find((tab) => tab.id === activeTab)?.component()}
        </TabContent>
      </Content>
    </PrePrintWrapper>
  );
};

export default PrePrint;
