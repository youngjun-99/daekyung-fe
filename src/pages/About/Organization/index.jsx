import React from "react";
import {
  OrganizationContent,
  TitleSection,
  Title,
  OrganizationSection,
  StyledImage,
} from "./styles";
import OrganizationImage from "/src/assets/images/about/organization.png";

const Organization = () => {
  return (
    <OrganizationContent>
      <TitleSection>
        <Title>조직도</Title>
      </TitleSection>
      <OrganizationSection>
        <StyledImage src={OrganizationImage} alt="조직도" />
      </OrganizationSection>
    </OrganizationContent>
  );
};

export default Organization;
