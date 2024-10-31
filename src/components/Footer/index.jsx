// index.jsx
import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterContent,
  FooterInfo,
  CompanyName,
  StyledCompanyInfo,
  Copyright
} from "./styles";
import LogoIcon from "/src/components/icons/LogoIcon.jsx";

const CompanyInfo = ({ children }) => {
  const parts = children.split('|');
  return (
    <StyledCompanyInfo>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="divider">|</span>}
          {part}
        </React.Fragment>
      ))}
    </StyledCompanyInfo>
  );
};

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterContent>
          <LogoIcon width={149} height={72} />
          <FooterInfo>
            <CompanyName>(주) 대경인쇄</CompanyName>
            <CompanyInfo>
              대표이사: 노진명 | 사업자등록번호: 630-87-00122
            </CompanyInfo>
            <CompanyInfo>
              경기도 김포시 통진읍 귀전로154번길 126-13 | E-mail: 4118dk@naver.com | TEL: 031-981-7847
            </CompanyInfo>
            <Copyright>Copyright © DAEKYUNG All rights reserved</Copyright>
          </FooterInfo>
        </FooterContent>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;