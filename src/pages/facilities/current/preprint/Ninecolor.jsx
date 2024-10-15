import React from "react";
import styled from "styled-components";
import ninecolorImage from "/src/assets/images/facilities/preprint/ninecolor.png";
import add1 from "/src/assets/images/facilities/preprint/01.jpg";
import add2 from "/src/assets/images/facilities/preprint/02.jpg";
import add3 from "/src/assets/images/facilities/preprint/03.jpg";
import add4 from "/src/assets/images/facilities/preprint/04.jpg";
import add5 from "/src/assets/images/facilities/preprint/05.jpg";

const OrganizationWrapper = styled.div`
  position: relative;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  padding: 1rem 4rem; // 좌우 패딩을 5rem으로 설정

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 1rem 2rem; // 화면이 작아질 때 패딩 줄임
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 1rem; // 모바일 화면에서 더 작은 패딩
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Lamination = () => {
  return (
    <OrganizationWrapper>
      <Content>
        <ImageContainer>
          <Image src={ninecolorImage} alt="9도 이미지" />
        </ImageContainer>
        <ImageContainer>
          <Image src={add1} alt="9도 이미지" />
        </ImageContainer>
        <ImageContainer>
          <Image src={add2} alt="9도 이미지" />
        </ImageContainer>
        <ImageContainer>
          <Image src={add3} alt="9도 이미지" />
        </ImageContainer>
        <ImageContainer>
          <Image src={add4} alt="9도 이미지" />
        </ImageContainer>
        <ImageContainer>
          <Image src={add5} alt="9도 이미지" />
        </ImageContainer>
      </Content>
    </OrganizationWrapper>
  );
};

export default Lamination;
