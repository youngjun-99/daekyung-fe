import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 80px;
  background: white;

  @media (max-width: 740px) {
    padding: 0 16px;
    height: 60px;
  }
`;

export const Logo = styled.img`
  height: 40px;

  @media (max-width: 740px) {
    height: 32px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 32px;

  @media (max-width: 740px) {
    display: none;
  }
`;

export const NavItem = styled.a`
  color: ${({ theme }) => theme.colors.gray[800]};
  font-size: ${({ theme }) => theme.typography.label.Medium.fontSize};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.DEFAULT};
  }
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
