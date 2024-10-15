import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Body1, Button2 } from "../styles/Typography";
import logoImage from "../assets/images/daekyung-logo.png";
import catalogFile from "/src/assets/file/catalog.pdf";

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.gray[0]};
`;

const Container = styled.div`
  padding: 1rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 1rem 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1rem;
  }
`;

const Logo = styled.img`
  height: 3rem;
  width: auto;
  cursor: pointer;
`;

const HamburgerButton = styled.button`
  color: ${({ theme }) => theme.colors.gray[700]};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-right: 1rem;
  &:hover {
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const DesktopNav = styled.nav`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
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
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.gray[900]};

  &:hover {
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

const CatalogButton = styled(Button2)`
  background-color: ${({ theme }) => theme.colors.primary.DEFAULT};
  color: ${({ theme }) => theme.colors.gray[0]};
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.3s;
  border: none;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[600]};
  }
`;

const MobileNav = styled.nav`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
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
  color: ${({ theme }) => theme.colors.gray[700]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  &:hover {
    color: ${({ theme }) => theme.colors.gray[900]};
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 200px; // 버튼이 없을 때도 동일한 공간 확보
`;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHomePage = location.pathname === "/";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = catalogFile;
    link.setAttribute("download", "catalog.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { to: "/about", text: "회사소개" },
    { to: "/process", text: "공정과정" },
    { to: "/products", text: "제품소개" },
    { to: "/facilities", text: "설비소개" },
    { to: "/inquiry", text: "고객문의" },
  ];

  return (
    <HeaderWrapper>
      <Container>
        <Logo
          src={logoImage}
          alt="Daekyung Printing"
          onClick={() => navigate("/")}
        />
        <DesktopNav>
          <NavList>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavItem as={Link} to={item.to}>
                  {item.text}
                </NavItem>
              </li>
            ))}
          </NavList>
        </DesktopNav>
        <RightSection>
          <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </HamburgerButton>
          {isHomePage && (
            <CatalogButton as="button" onClick={handleDownload}>
              E-카달로그 다운로드
            </CatalogButton>
          )}
        </RightSection>
      </Container>
      {isMenuOpen && (
        <MobileNav>
          <MobileNavList>
            {navItems.map((item) => (
              <li key={item.to}>
                <MobileNavItem as={Link} to={item.to}>
                  {item.text}
                </MobileNavItem>
              </li>
            ))}
          </MobileNavList>
        </MobileNav>
      )}
    </HeaderWrapper>
  );
};

export default Header;
