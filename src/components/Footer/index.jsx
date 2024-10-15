import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterContent,
  FooterInfo,
  CompanyName,
  StyledCompanyInfo,
  Copyright,
} from "./styles";
import LogoIcon from "/src/components/icons/LogoIcon.jsx";

const Footer = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth <= 789);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 789);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const CompanyInfo = ({ children }) => {
    if (isMobile && children.includes("경기도")) {
      const [address, email, tel] = children.split("|");
      return (
        <StyledCompanyInfo>
          {address.trim()}
          <br />
          {email.trim()} <span className="divider">|</span> {tel.trim()}
        </StyledCompanyInfo>
      );
    }

    const parts = children.split("|");
    return (
      <StyledCompanyInfo>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span className="divider">|</span>}
            {part.trim()}
          </React.Fragment>
        ))}
      </StyledCompanyInfo>
    );
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterContent>
          <LogoIcon minw={66} maxw={149} minh={32} maxh={72} />
          <FooterInfo>
            <CompanyName>(주) 대경인쇄</CompanyName>
            <CompanyInfo>
              대표이사: 노진명 | 사업자등록번호: 630-87-00122
            </CompanyInfo>
            <CompanyInfo>
              경기도 김포시 통진읍 귀전로154번길 126-13 | E-mail:
              4118dk@naver.com | TEL: 031-981-7847
            </CompanyInfo>
            <Copyright>Copyright © DAEKYUNG All rights reserved</Copyright>
          </FooterInfo>
        </FooterContent>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
