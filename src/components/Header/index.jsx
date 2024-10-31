import React, { useState } from "react";
import { 
  HeaderContainer,
  HeaderWrapper, 
  LogoWrapper, 
  Nav, 
  NavItem,
  NavItemContent,
  NavItemText,
  IconWrapper,
  DropdownContainer,
  DropdownInner,
  DropdownSection,
  DropdownList,
  DropdownItem, 
  ContactButton, 
  MobileMenu
} from "./styles";
import LogoIcon from "/src/components/icons/LogoIcon.jsx";
import ArrowIcon from "/src/components/icons/ArrowIcon.jsx";

const navItems = [
  {
    title: '회사소개',
    href: '/about',
    hasDropdown: true,
    dropdownItems: [
      { title: '인사말', href: '/greeting' },
      { title: '회사연혁', href: '/history' },
      { title: '조직도', href: '/organization' },
      { title: '인증현황', href: '/certification' },
      { title: '사업장 위치', href: '/location' }
    ]
  },
  {
    title: '공정과정',
    href: '/process',
    hasDropdown: false
  },
  {
    title: '제품소개',
    href: '/products',
    hasDropdown: true,
    dropdownItems: [
      { title: '제품 형태', href: '/product/type' },
      { title: '제품 기능', href: '/product/function' }
    ]
  },
  {
    title: '설비소개',
    href: '/facility',
    hasDropdown: true,
    dropdownItems: [
      { title: '설비 개요', href: '/facility/summary' },
      { title: '설비 현황', href: '/facility/current' }
    ]
  }
];

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <HeaderContainer 
      onMouseEnter={() => setIsDropdownVisible(true)}
      onMouseLeave={() => setIsDropdownVisible(false)}
    >
      <HeaderWrapper>
        <LogoWrapper>
          <LogoIcon />
        </LogoWrapper>
        
        <Nav>
          {navItems.map((item) => (
            <NavItem key={item.href} href={item.href}>
              <NavItemContent>
                <NavItemText>{item.title}</NavItemText>
                {item.hasDropdown && (
                  <IconWrapper>
                    <ArrowIcon />
                  </IconWrapper>
                )}
              </NavItemContent>
            </NavItem>
          ))}
        </Nav>

        <ContactButton>문의하기</ContactButton>
        <MobileMenu>☰</MobileMenu>
      </HeaderWrapper>
      
      {isDropdownVisible && (
        <DropdownContainer>
          <DropdownInner>
            {navItems.map((item) => (
              <DropdownSection key={item.href}>
                {item.hasDropdown && (
                  <DropdownList>
                    {item.dropdownItems.map((dropdownItem) => (
                      <DropdownItem 
                        key={dropdownItem.href} 
                        href={dropdownItem.href}
                      >
                        {dropdownItem.title}
                      </DropdownItem>
                    ))}
                  </DropdownList>
                )}
              </DropdownSection>
            ))}
          </DropdownInner>
        </DropdownContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;