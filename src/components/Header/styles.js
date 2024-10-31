import styled, { keyframes } from "styled-components";

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
  height: 96px;
  min-height: 96px;
  position: relative;

  @media (max-width: 740px) {
    height: 60px;
    min-height: 60px;
  }
`;

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 100%;
  margin: 0 clamp(16px, 4.17vw, 80px);
  position: relative;

  @media (max-width: 740px) {
    margin: 0 16px;
  }
`;

export const LogoWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  margin-right: clamp(120px, 13.4vw, 257px);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  flex: 1;
  margin-right: clamp(120px, 13.4vw, 257px);

  @media (max-width: 740px) {
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
  font-size: ${({ theme }) => theme.typography.body.Large.fontSize};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  height: 100%;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  padding: 0 24px;
  position: relative;

  &:not(:last-child)::after {
    content: '';
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
  animation: ${slideDown} 0.2s ease-out;
  transform-origin: top;
  z-index: 10;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const DropdownInner = styled.div`
  margin-left: calc(clamp(16px, 4.17vw, 80px) + clamp(120px, 13.4vw, 257px) + 116px);
  margin-right: calc(clamp(16px, 4.17vw, 80px) + clamp(120px, 13.4vw, 257px) + 114px);
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
`;

export const ContactButton = styled.button`
  font-size: ${({ theme }) => theme.typography.body.Large.fontSize};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background-color: ${({ theme }) => theme.colors.primary.DEFAULT};
  padding: 12px 24px;
  border-radius: 4px;
  color: white;
  border: none;
  cursor: pointer;
  width: 114px;
  height: 48px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MobileMenu = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 740px) {
    display: block;
  }
`;