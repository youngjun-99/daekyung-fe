import React from "react";
import styled from "styled-components";
import tencolorImage from "/src/assets/images/facilities/preprint/tencolor.png";
import add6 from "/src/assets/images/facilities/lamination/06.jpg";
import add7 from "/src/assets/images/facilities/lamination/07.jpg";
import add8 from "/src/assets/images/facilities/lamination/08.jpg";
import add9 from "/src/assets/images/facilities/lamination/09.jpg";
import add10 from "/src/assets/images/facilities/lamination/10.jpg";
import add11 from "/src/assets/images/facilities/lamination/11.jpg";
import add12 from "/src/assets/images/facilities/lamination/12.jpg";

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
          <Image src={tencolorImage} alt="10도 이미지" />
        </ImageContainer>
        <ImageContainer>
          <Image src={add6} alt="10도 이미지" />
        </ImageContainer>
        <ImageContainer>
          <Image src={add7} alt="10도 이미지" />
        </ImageContainer>
        <ImageContainer>
          <Image src={add8} alt="10도 이미지" />
        </ImageContainer>
        <ImageContainer>
          <Image src={add9} alt="10도 이미지" />
        </ImageContainer>
        <ImageContainer>
          <Image src={add10} alt="10도 이미지" />
        </ImageContainer>
        <ImageContainer>
          <Image src={add11} alt="10도 이미지" />
        </ImageContainer>
        <ImageContainer>
          <Image src={add12} alt="10도 이미지" />
        </ImageContainer>
      </Content>
    </OrganizationWrapper>
  );
};

export default Lamination;
