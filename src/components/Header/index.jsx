import React from "react";
import { HeaderWrapper, Logo, Nav, NavItem, MobileMenu } from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src="/logo.png" alt="Daekyung Printing" />
      <Nav>
        <NavItem href="#about">회사소개</NavItem>
        <NavItem href="#process">공정과정</NavItem>
        <NavItem href="#products">제품소개</NavItem>
        <NavItem href="#service">설비소개</NavItem>
      </Nav>
      <MobileMenu>☰</MobileMenu>
    </HeaderWrapper>
  );
};

export default Header;
