import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Body1, Button2 } from '../styles/Typography';
import logoImage from '../assets/images/daekyung-logo.png';

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.colors.gray[0]};
`;

const Container = styled.div`
  padding: 1rem 10rem; // 좌우 패딩을 5rem으로 설정
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    padding: 1rem 2rem; // 화면이 작아질 때 패딩 줄임
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 1rem; // 모바일 화면에서 더 작은 패딩
  }
`;

const Logo = styled.img`
  height: 3rem;
  width: auto;
  cursor: pointer;
`;

const HamburgerButton = styled.button`
  color: ${props => props.theme.colors.gray[700]};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-right: 1rem;
  &:hover {
    color: ${props => props.theme.colors.gray[900]};
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const DesktopNav = styled.nav`
  display: none;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin: 0 2rem;
`;

const NavItem = styled(Body1)`
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.gray[900]};
  
  &:hover {
    color: ${props => props.theme.colors.gray[700]};
  }
`;

const CatalogButton = styled(Button2)`
  background-color: ${props => props.theme.colors.primary.DEFAULT};
  color: ${props => props.theme.colors.gray[0]};
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.3s;
  border: none;
  white-space: nowrap;

  &:hover {
    background-color: ${props => props.theme.colors.primary[600]};
  }
`;

const MobileNav = styled.nav`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const MobileNavItem = styled(Body1)`
  color: ${props => props.theme.colors.gray[700]};
  font-weight: ${props => props.theme.fontWeights.medium};
  
  &:hover {
    color: ${props => props.theme.colors.gray[900]};
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHomePage = location.pathname === '/';

  const handleDownload = () => {
    const fileUrl = 'src/assets/file/catalog.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'catalog.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <HeaderWrapper>
      <Container>
        <Logo src={logoImage} alt="Daekyung Printing" onClick={() => navigate('/')} />
        <DesktopNav>
          <NavList>
            <li><NavItem as={Link} to="/about">회사소개</NavItem></li>
            <li><NavItem as={Link} to="/process">공정과정</NavItem></li>
            <li><NavItem as={Link} to="/products">제품소개</NavItem></li>
            <li><NavItem as={Link} to="/facilities">설비소개</NavItem></li>
            <li><NavItem as={Link} to="/inquiry">고객문의</NavItem></li>
          </NavList>
        </DesktopNav>
        <RightSection>
          <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </HamburgerButton>
          {isHomePage && (
            <CatalogButton as="button" onClick={handleDownload}>
              E-카달로그 다운하기
            </CatalogButton>
          )}
        </RightSection>
      </Container>
      {isMenuOpen && (
        <MobileNav>
          <MobileNavList>
            <li><MobileNavItem as={Link} to="/about">회사소개</MobileNavItem></li>
            <li><MobileNavItem as={Link} to="/process">공정과정</MobileNavItem></li>
            <li><MobileNavItem as={Link} to="/products">제품소개</MobileNavItem></li>
            <li><MobileNavItem as={Link} to="/facilities">설비소개</MobileNavItem></li>
            <li><MobileNavItem as={Link} to="/inquiry">고객문의</MobileNavItem></li>
          </MobileNavList>
        </MobileNav>
      )}
    </HeaderWrapper>
  );
};

export default Header;