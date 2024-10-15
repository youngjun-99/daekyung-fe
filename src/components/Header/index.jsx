import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  MobileMenu,
  MobileDropdownContainer,
  MobileDropdownItem,
  MobileDropdownSection,
  MobileDropdownHeader,
  MobileCloseButton,
  MobileContactButton,
  ChevronIcon,
} from "./styles";
import LogoIcon from "/src/components/icons/LogoIcon.jsx";
import ArrowIcon from "/src/components/icons/ArrowIcon.jsx";

const navItems = [
  {
    title: "회사소개",
    href: "/about",
    hasDropdown: true,
    dropdownItems: [
      { title: "인사말", href: "/about/greeting" },
      { title: "회사연혁", href: "/about/history" },
      { title: "조직도", href: "/about/organization" },
      { title: "인증현황", href: "/about/certifications" },
      { title: "사업장 위치", href: "/about/location" },
    ],
  },
  {
    title: "생산",
    href: "/process",
    hasDropdown: true,
    dropdownItems: [
      { title: "생산 공정", href: "/process/production" },
      { title: "품질 관리", href: "/process/quality" },
    ],
  },
  {
    title: "제품",
    href: "/product",
    hasDropdown: true,
    dropdownItems: [
      { title: "제품 형태", href: "/product/type" },
      { title: "제품 기능", href: "/product/function" },
    ],
  },
  {
    title: "설비",
    href: "/facility",
    hasDropdown: true,
    dropdownItems: [
      { title: "설비 개요", href: "/facility/summary" },
      { title: "설비 현황", href: "/facility/current" },
    ],
  },
];

const Header = () => {
  const navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState([]);
  const location = useLocation();

  const handleNavItemClick = (item) => {
    if (!isDropdownVisible) {
      setIsDropdownVisible(true);
    } else {
      navigate(item.href);
    }
  };

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  const handleMobileHeaderClick = (item) => {
    if (item.hasDropdown) {
      toggleSection(item.title);
    } else {
      navigate(item.href);
      setIsMobileMenuOpen(false);
    }
  };

  const toggleSection = (title) => {
    setExpandedSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <HeaderContainer onMouseLeave={handleMouseLeave}>
        <HeaderWrapper>
          <LogoWrapper
            onClick={() => {
              navigate("/");
              setIsDropdownVisible(false);
              setIsMobileMenuOpen(false);
            }}
          >
            <LogoIcon minw={50} maxw={116} minh={24} maxh={56} />
          </LogoWrapper>

          <Nav onMouseEnter={handleMouseEnter}>
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                onClick={() => handleNavItemClick(item)}
                $hasDropdown={item.hasDropdown}
              >
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

          <ContactButton onClick={() => navigate("/inquiry")}>
            문의하기
          </ContactButton>
          <MobileMenu onClick={() => setIsMobileMenuOpen(true)}>☰</MobileMenu>
        </HeaderWrapper>

        {isDropdownVisible && (
          <DropdownContainer>
            <DropdownInner>
              {navItems.map((item) => (
                <DropdownSection>
                  {item.hasDropdown && (
                    <DropdownList>
                      {item.dropdownItems.map((dropdownItem) => (
                        <DropdownItem
                          key={dropdownItem.href}
                          onClick={() => navigate(dropdownItem.href)}
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

      {isMobileMenuOpen && (
        <MobileDropdownContainer>
          <MobileCloseButton onClick={() => setIsMobileMenuOpen(false)}>
            ✕
          </MobileCloseButton>

          {navItems.map((item) => (
            <MobileDropdownSection key={item.href}>
              <MobileDropdownHeader
                onClick={() => handleMobileHeaderClick(item)}
              >
                {item.title}
                {item.hasDropdown && (
                  <ChevronIcon
                    $isExpanded={expandedSections.includes(item.title)}
                  >
                    <IconWrapper>
                      <ArrowIcon />
                    </IconWrapper>
                  </ChevronIcon>
                )}
              </MobileDropdownHeader>

              {item.hasDropdown && expandedSections.includes(item.title) && (
                <>
                  {item.dropdownItems.map((dropdownItem) => (
                    <MobileDropdownItem
                      key={dropdownItem.href}
                      onClick={() => {
                        navigate(dropdownItem.href);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {dropdownItem.title}
                    </MobileDropdownItem>
                  ))}
                </>
              )}
            </MobileDropdownSection>
          ))}

          <MobileContactButton
            onClick={() => {
              navigate("/inquiry");
              setIsMobileMenuOpen(false);
            }}
          >
            문의하기
          </MobileContactButton>
        </MobileDropdownContainer>
      )}
    </>
  );
};

export default Header;
