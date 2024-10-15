import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  LocationContent,
  TitleSection,
  TitleContainer,
  Title,
  TitleLine,
  FacilitySection,
  FacilityTitle,
  ContentGrid,
  MapContainer,
  InfoContainer,
  InfoTable,
  InfoRow,
  Label,
  Value,
  FacilityImage,
} from "./styles";
import facilityImage1 from "/src/assets/images/about/facility1.jpg";
import facilityImage2 from "/src/assets/images/about/facility2.jpeg";

const FacilityInfo = ({ address, phone, fax }) => (
  <InfoTable>
    <InfoRow>
      <Label>주소</Label>
      <Value>{address}</Value>
    </InfoRow>
    <InfoRow>
      <Label>전화번호</Label>
      <Value>{phone}</Value>
    </InfoRow>
    <InfoRow>
      <Label>팩스번호</Label>
      <Value>{fax}</Value>
    </InfoRow>
  </InfoTable>
);

FacilityInfo.propTypes = {
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  fax: PropTypes.string.isRequired,
};

const NaverMap = ({ location }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=fywfbb3365`;
    script.async = true;

    script.onload = () => {
      const { naver } = window;
      if (!mapRef.current || !naver) return;

      const position = new naver.maps.LatLng(location.lat, location.lng);
      const mapOptions = {
        center: position,
        zoom: 17,
        zoomControl: true,
        zoomControlOptions: {
          position: naver.maps.Position.TOP_RIGHT,
        },
      };
      const map = new naver.maps.Map(mapRef.current, mapOptions);
      new naver.maps.Marker({
        position,
        map,
      });
    };

    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, [location]);

  return <MapContainer ref={mapRef} />;
};

NaverMap.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};

const Facility = ({ facility }) => (
  <FacilitySection>
    <TitleContainer>
      <FacilityTitle>{facility.title}</FacilityTitle>
      <TitleLine />
    </TitleContainer>
    <ContentGrid>
      <MapContainer>
        <NaverMap location={facility.location} />
      </MapContainer>
      <InfoContainer>
        <FacilityInfo
          address={facility.address}
          phone={facility.phone}
          fax={facility.fax}
        />
        <FacilityImage
          src={facility.facilityImage}
          alt={`${facility.title} 전경`}
        />
      </InfoContainer>
    </ContentGrid>
  </FacilitySection>
);

Facility.propTypes = {
  facility: PropTypes.shape({
    title: PropTypes.string.isRequired,
    facilityImage: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    fax: PropTypes.string.isRequired,
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  isLast: PropTypes.bool.isRequired,
};

const Location = () => {
  const facilities = [
    {
      title: "제 1공장",
      facilityImage: facilityImage1,
      address: "경기도 김포시 통진읍 귀전로154번길 126-13",
      phone: "(031) 981-7847",
      fax: "(031) 988-7847",
      location: { lat: 37.7158497, lng: 126.611975 },
    },
    {
      title: "제 2공장",
      facilityImage: facilityImage2,
      address: "경기도 김포시 통진읍 귀전로154번길 126-11",
      phone: "(031) 981-7847",
      fax: "(031) 988-7847",
      location: { lat: 37.7163093, lng: 126.6122724 },
    },
  ];

  return (
    <LocationContent>
      <TitleSection>
        <Title>사업장 위치</Title>
      </TitleSection>
      {facilities.map((facility, index) => (
        <Facility
          key={facility.title}
          facility={facility}
          isLast={index === facilities.length - 1}
        />
      ))}
    </LocationContent>
  );
};

export default Location;
