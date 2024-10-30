// src/components/Footer/styles.js
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding: 40px 24px;
  background-color: ${({ theme }) => theme.colors.gray[900]};
  color: white;

  @media (max-width: 740px) {
    padding: 32px 16px;
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 740px) {
    flex-direction: column;
    gap: 24px;
    text-align: center;
  }
`;

export const FooterLogo = styled.img`
  height: 32px;
`;

export const FooterInfo = styled.div`
  font-size: ${({ theme }) => theme.typography.detail.Medium.fontSize};
  line-height: 1.6;
`;

export const CompanyInfo = styled.p`
  margin: 4px 0;
`;
