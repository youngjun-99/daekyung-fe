import React from "react";
import {
  CertificationContent,
  TitleSection,
  Title,
  CertGrid,
  CertItem,
  ImageContainer,
  CertImage,
  HoverImage,
  CertLabel,
} from "./styles";

import cert9001en from "/src/assets/images/about/cert_9001_en.jpg";
import cert9001ko from "/src/assets/images/about/cert_9001_ko.jpg";
import cert14001en from "/src/assets/images/about/cert_14001_en.jpg";
import cert14001ko from "/src/assets/images/about/cert_14001_ko.jpg";
import cert_1 from "/src/assets/images/about/cert_1.png";
import cert_2 from "/src/assets/images/about/cert_2.png";

const Certification = () => {
  const certifications = [
    { image: cert9001ko, title: "ISO 9001 인증 (국문)" },
    { image: cert9001en, title: "ISO 9001 인증 (영문)" },
    { image: cert14001ko, title: "ISO 14001 인증 (국문)" },
    { image: cert14001en, title: "ISO 14001 인증 (영문)" },
    { image: cert_1, title: "중소기업 확인서" },
    {
      image: cert_2,
      title: (
        <>
          경영혁신형 중소기업
          <br />
          (MAIN-BIZ)확인서
        </>
      ),
    },
  ];

  return (
    <CertificationContent>
      <TitleSection>
        <Title>인증현황</Title>
      </TitleSection>
      <CertGrid>
        {certifications.map((cert, index) => (
          <CertItem key={index}>
            <ImageContainer>
              <CertImage
                src={cert.image}
                alt={typeof cert.title === "string" ? cert.title : "인증서"}
              />
              <HoverImage>
                <img
                  src={cert.image}
                  alt={typeof cert.title === "string" ? cert.title : "인증서"}
                />
              </HoverImage>
            </ImageContainer>
            <CertLabel>{cert.title}</CertLabel>
          </CertItem>
        ))}
      </CertGrid>
    </CertificationContent>
  );
};

export default Certification;
