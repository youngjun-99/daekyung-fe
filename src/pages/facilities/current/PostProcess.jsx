import React from "react";
import styled from "styled-components";
import { Headline1 } from "/src/styles/Typography";
import threatingMachine1 from "/src/assets/images/facilities/postprocess/machine1.png";
import threatingMachine2 from "/src/assets/images/facilities/postprocess/machine2.png";

const ThreatingWrapper = styled.div`
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

const Title = styled(Headline1)`
  font-size: 2.5rem;
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  margin-top: 4rem;
  margin-bottom: 6rem;
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  padding: 0 6rem;
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

const Postprocess = () => {
  return (
    <ThreatingWrapper>
      <Content>
        <Title>가공기</Title>
        <ImageContainer>
          <Image src={threatingMachine1} alt="인쇄기기 1" />
        </ImageContainer>
        <ImageContainer>
          <Image src={threatingMachine2} alt="인쇄기기 2" />
        </ImageContainer>
      </Content>
    </ThreatingWrapper>
  );
};

export default Postprocess;
