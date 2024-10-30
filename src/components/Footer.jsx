import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.colors.primary[800]};
  color: ${(props) => props.theme.colors.gray[0]};
  padding: 1.5rem 0;
`;

const Container = styled.div`
  padding: 1rem 10rem; // 좌우 패딩을 5rem으로 설정

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 1rem 2rem; // 화면이 작아질 때 패딩 줄임
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 1rem; // 모바일 화면에서 더 작은 패딩
  }
`;

const NavSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[600]};
  padding-top: 0.5;
  padding-bottom: 2rem;
  margin-bottom: 1.5rem;
`;

const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
  color: ${(props) => props.theme.colors.gray[50]};
  padding: 0.5rem 0;
  font-weight: 600;
`;

const NavLink = styled(Link)`
  &:hover {
    color: ${(props) => props.theme.colors.gray[300]};
  }
`;

const ContentSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: ${(props) => props.theme.colors.gray[50]};
`;

const CompanyName = styled.h3`
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.gray[50]};
`;

const CompanyInfo = styled.div`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 0.875rem;
  margin-left: 2rem;
  margin-right: auto;
  text-align: left;

  p {
    margin-bottom: 0.5rem;
  }
`;

const ContactInfo = styled.div`
  text-align: right;

  p:first-child {
    text-align: left;
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.gray[50]};
  }

  p:last-child {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.gray[50]};
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <NavSection>
          <nav>
            <NavList>
              <li>
                <NavLink to="/about">회사소개</NavLink>
              </li>
              <li>
                <NavLink to="/process">공정과정</NavLink>
              </li>
              <li>
                <NavLink to="/products">제품소개</NavLink>
              </li>
              <li>
                <NavLink to="/facilities">설비소개</NavLink>
              </li>
              <li>
                <NavLink to="/inquiry">고객문의</NavLink>
              </li>
            </NavList>
          </nav>
        </NavSection>
        <ContentSection>
          <div>
            <CompanyName>(주) 대경인쇄</CompanyName>
          </div>
          <CompanyInfo>
            <p>대표이사 : 노진명</p>
            <p>경기도 김포시 통진읍 귀전로154번길 126-13</p>
            <p>사업자등록번호 : 630-87-00122</p>
            <p>E-mail : 4118dk@naver.com</p>
          </CompanyInfo>
          <ContactInfo>
            <p>전화번호</p>
            <p>(031) 981-7847</p>
          </ContactInfo>
        </ContentSection>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
