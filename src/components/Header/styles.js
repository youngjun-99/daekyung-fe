import styled, { keyframes } from "styled-components";
import { wclamp, hclamp } from "/src/utils";

const slideLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeaderContainer = styled.div`
  background: white;
  height: ${wclamp(48, 96)};
  position: relative;
  z-index: 1000;

  @media (max-width: 789px) {
    height: 60px;
    min-height: 60px;
  }
`;

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 100%;
  margin: 0 ${wclamp(16, 80)};
  position: relative;

  @media (max-width: 789px) {
    margin: 0 16px;
  }
`;

export const LogoWrapper = styled.a`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  margin-right: ${wclamp(120, 257)};
  cursor: pointer;

  @media (max-width: 789px) {
    margin-right: 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  flex: 1;
  margin-right: ${wclamp(120, 257)};

  @media (max-width: 789px) {
    display: none;
  }
`;

export const NavItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  white-space: nowrap;
  position: relative;
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavItemText = styled.span`
  display: inline-flex;
  align-items: center;
`;

export const NavItem = styled.a`
  color: ${({ theme }) => theme.colors.gray[800]};
  font-size: ${wclamp(12, 19)};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  height: 100%;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  padding: 0 24px;
  position: relative;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.gray[50] : "transparent"};
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 16px;
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[50]};
  }
`;

export const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${slideDown} 0.3s ease-out;
  transform-origin: top;
  z-index: 10;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};

  @media (max-width: 789px) {
    display: none;
  }
`;

export const DropdownInner = styled.div`
  margin-left: calc(
    ${wclamp(16, 80)} + ${wclamp(120, 257)} + ${wclamp(56, 116)}
  );
  margin-right: calc(
    ${wclamp(16, 80)} + ${wclamp(120, 257)} + ${wclamp(0, 114)}
  );
  padding: 48px 0px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const DropdownSection = styled.div`
  padding-right: 15px;
  max-height: 249px;
`;

export const DropdownList = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${slideDown} 0.3s ease-out forwards;
  gap: 24px;
`;

export const DropdownItem = styled.a`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.body.Medium.fontSize};
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
`;

export const ContactButton = styled.button`
  font-size: ${wclamp(0, 19)};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background-color: ${({ theme }) => theme.colors.primary.DEFAULT};
  padding: 12px 24px;
  color: white;
  border: none;
  white-space: nowrap;
  cursor: pointer;
  width: ${wclamp(0, 114)};
  height: ${wclamp(0, 48)};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 789px) {
    display: none;
  }
`;

export const MobileMenu = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: black;
  cursor: pointer;

  @media (max-width: 789px) {
    display: block;
    margin-left: auto;
  }
`;

export const MobileDropdownContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 70%;
  background: white;
  z-index: 2000;
  overflow-y: auto;
  display: none;
  padding-top: 60px;
  padding-left: 20px;
  padding-right: 20px;
  animation: ${slideLeft} 0.3s ease-out;
  @media (max-width: 789px) {
    display: block;
  }
`;

export const MobileCloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray[800]};
  padding: 8px;
  cursor: pointer;
`;

export const MobileDropdownSection = styled.div`
  &:not(:first-child) {
    margin-top: 24px; // 헤더 간의 gap 24px
  }
`;

export const MobileDropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px; // 좌우 패딩
  font-size: 19px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.gray[800]};
  cursor: pointer;
`;

export const MobileDropdownItem = styled.a`
  display: block;
  margin-top: 15px;
  padding: 3px 36px;
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: 15px;
  text-decoration: none;
  animation: ${slideDown} 0.2s ease-out;
  cursor: pointer;
`;

export const ChevronIcon = styled.span`
  transform: ${({ $isExpanded }) =>
    $isExpanded ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform 0.2s ease;
`;

export const MobileContactButton = styled.a`
  display: block;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.primary.DEFAULT};
  color: white;
  text-align: center;
  margin-top: 24px;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
