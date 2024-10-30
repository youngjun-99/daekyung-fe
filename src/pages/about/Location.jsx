import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Headline1, Headline2 } from "../../styles/Typography";
import firstFacilityImage from "../../assets/images/about/facility1.jpg";
import secondFacilityImage from "../../assets/images/about/facility2.jpeg";

// Styled components remain the same
const LocationWrapper = styled.div`
  position: relative;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  padding: 1rem 4rem;

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 1rem 2rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 1rem;
  }
`;

const Title = styled(Headline1)`
  font-size: 3rem;
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  margin: 2rem;
  margin-bottom: 6rem;
  text-align: center;
`;

const FacilitySection = styled.div`
  padding-bottom: 4rem;
  border-bottom: ${(props) =>
    props.isLast ? "none" : `1px solid ${props.theme.colors.gray[200]}`};
  margin-bottom: 4rem;
`;

const FacilityTitle = styled(Headline2)`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 2rem;
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const TableContainer = styled.div`
  width: 50%;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-top: 1px solid #111111;
  border-bottom: 1px solid #111111;
`;

const TableTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[300]};
`;

const TableCell = styled.td`
  padding: 0.6rem 1rem;
  font-size: 14px;

  &:first-child {
    color: #767676;
    white-space: nowrap;
  }
`;

const FacilityImage = styled.img`
  width: 50%;
  height: auto;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

const useNaverMapsScript = () => {
  const [loaded, setLoaded] = React.useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=77kw9m1i6r";
    script.async = true;
    script.onload = () => setLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return loaded;
};

const FacilityInfo = ({ title, address, phone, fax }) => (
  <TableContainer>
    <TableTitle>{title}</TableTitle>
    <Table>
      <tbody>
        <TableRow>
          <TableCell>주소</TableCell>
          <TableCell>{address}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>전화번호</TableCell>
          <TableCell>{phone}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>팩스번호</TableCell>
          <TableCell>{fax}</TableCell>
        </TableRow>
      </tbody>
    </Table>
  </TableContainer>
);

FacilityInfo.propTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  fax: PropTypes.string.isRequired,
};

const NaverMap = ({ location }) => {
  const mapRef = useRef(null);
  const scriptLoaded = useNaverMapsScript();

  useEffect(() => {
    if (scriptLoaded && mapRef.current && window.naver) {
      const map = new window.naver.maps.Map(mapRef.current, {
        center: new window.naver.maps.LatLng(location.lat, location.lng),
        zoom: 18,
        minZoom: 7,
        zoomControl: true,
        zoomControlOptions: {
          position: window.naver.maps.Position.TOP_RIGHT,
        },
      });

      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(location.lat, location.lng),
        map: map,
      });
    }
  }, [scriptLoaded, location]);

  return <MapContainer ref={mapRef} />;
};

NaverMap.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};

const Facility = ({ facility, isLast }) => (
  <FacilitySection isLast={isLast}>
    <FacilityTitle>{facility.title}</FacilityTitle>
    <NaverMap location={facility.location} />
    <InfoContainer>
      <FacilityInfo
        title={facility.title}
        address={facility.address}
        phone={facility.phone}
        fax={facility.fax}
      />
      <FacilityImage
        src={facility.facilityImage}
        alt={`${facility.title} 전경`}
      />
    </InfoContainer>
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
      title: "제1공장",
      facilityImage: firstFacilityImage,
      address: "경기도 김포시 통진읍 귀전로154번길 126-13",
      phone: "(031) 981-7847",
      fax: "(031) 988-7847",
      location: { lat: 37.7158497, lng: 126.611975 },
    },
    {
      title: "제2공장",
      facilityImage: secondFacilityImage,
      address: "경기도 김포시 통진읍 귀전로154번길 126-11",
      phone: "(031) 981-7847",
      fax: "(031) 988-7847",
      location: { lat: 37.7163093, lng: 126.6122724 },
    },
  ];

  return (
    <LocationWrapper>
      <Content>
        <Title>사업장 위치</Title>
        {facilities.map((facility, index) => (
          <Facility
            key={facility.title}
            facility={facility}
            isLast={index === facilities.length - 1}
          />
        ))}
      </Content>
    </LocationWrapper>
  );
};

export default Location;
