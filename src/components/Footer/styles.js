import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: white;
  height: 174px;
  min-height: 174px;
  position: relative;

  @media (max-width: 740px) {
    height: auto;
    min-height: auto;
    padding: 24px 0;
  }
`;

export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 100%;
  margin: 0 clamp(16px, 4.17vw, 80px);
  position: relative;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[100]};

  @media (max-width: 740px) {
    margin: 0 16px;
    height: auto;
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 740px) {
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
  }
`;

export const FooterInfo = styled.div`
  font-size: ${({ theme }) => theme.typography.detail.Medium.fontSize};
  line-height: 1.6;
  margin-left: 30px;

  @media (max-width: 740px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const CompanyName = styled.p`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: 2px;

  @media (max-width: 740px) {
    font-size: 16px;
  }
`;

export const StyledCompanyInfo = styled.p`
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  margin-bottom: 2px;

  .divider {
    color: ${({ theme }) => theme.colors.gray[100]};
    margin: 0 8px;
  }

  @media (max-width: 740px) {
    font-size: 11px;
    word-break: keep-all;
    line-height: 1.8;
    
    .divider {
      margin: 0 4px;
    }
  }
`;

export const Copyright = styled.p`
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.gray[100]};

  @media (max-width: 740px) {
    font-size: 11px;
  }
`;