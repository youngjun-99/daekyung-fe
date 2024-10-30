import React from "react";
import styled from "styled-components";
import { Headline1 } from "/src/styles/Typography";
import threatingMachine1 from "/src/assets/images/facilities/threating/machine1.png";
import threatingMachine2 from "/src/assets/images/facilities/threating/machine2.png";
import add14 from "/src/assets/images/facilities/threating/14.jpg";

const ThreatingWrapper = styled.div`
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

const Threating = () => {
  return (
    <ThreatingWrapper>
      <Content>
        <Title>슬리터기</Title>
        <ImageContainer>
          <Image src={threatingMachine1} alt="슬리터기 1" />
        </ImageContainer>
        <ImageContainer>
          <Image src={threatingMachine2} alt="슬리터기 2" />
        </ImageContainer>
        <ImageContainer>
          <Image src={add14} alt="슬리터기 2" />
        </ImageContainer>
      </Content>
    </ThreatingWrapper>
  );
};

export default Threating;
