import React from "react";
import {
  FooterWrapper,
  FooterContent,
  FooterLogo,
  FooterInfo,
  CompanyInfo,
} from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterLogo src="/logo.png" alt="Daekyung Printing" />
        <FooterInfo>
          <CompanyInfo>
            대표이사: 노진명 | 사업자등록번호: 630-87-00122
          </CompanyInfo>
          <CompanyInfo>경기도 김포시 통진읍 귀전로154번길 126-13</CompanyInfo>
          <CompanyInfo>
            E-mail: 4118dk@naver.com | TEL: 031-981-7847
          </CompanyInfo>
          <CompanyInfo>Copyright © DEAKYUNG All rights reserved</CompanyInfo>
        </FooterInfo>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
