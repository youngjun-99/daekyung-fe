import React from 'react';
import styled from 'styled-components';
import { Headline1, Headline2 } from '../../styles/Typography';
import firstFacilityImage from '../../assets/images/about/facility1.jpg';
import secondFacilityImage from '../../assets/images/about/facility2.jpeg';
import firstFacilityMapImage from '../../assets/images/about/facility_map_1.png';
import secondFacilityMapImage from '../../assets/images/about/facility_map_2.png';

const LocationWrapper = styled.div`
  position: relative;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  padding: 1rem 4rem;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    padding: 1rem 2rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 1rem;
  }
`;

const Title = styled(Headline1)`
  font-size: 3rem;
  font-weight: ${props => props.theme.fontWeights.semibold};
  margin: 2rem;
  margin-bottom: 6rem;
  text-align: center;
`;

const FacilitySection = styled.div`
  padding-bottom: 4rem;
  border-bottom: ${props => props.isLast ? 'none' : `1px solid ${props.theme.colors.gray[200]}`};
  margin-bottom: 4rem;
`;

const FacilityTitle = styled(Headline2)` //semibold 36px
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
`;

const MapImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 2rem;
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const TableContainer = styled.div`
  width: 50%;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
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

const TableTitle = styled.table` //semibold 24px
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid ${props => props.theme.colors.gray[300]};
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

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

const Location = () => {
    const facilities = [
        {
            title: "제1공장",
            mapImage: firstFacilityMapImage,
            facilityImage: firstFacilityImage,
            address: "경기도 김포시 통진읍 가현리542번지 D동-13",
            phone: "(031) 981-7847",
            fax: "(031) 989-7847"
        },
        {
            title: "제2공장",
            mapImage: secondFacilityMapImage,
            facilityImage: secondFacilityImage,
            address: "경기도 김포시 통진읍 가현리542번지 D동-11",
            phone: "(031) 981-7847",
            fax: "(031) 989-7847"
        }
    ];

    return (
        <LocationWrapper>
            <Content>
                <Title>사업장 위치</Title>

                {facilities.map((facility, index) => (
                    <FacilitySection key={index} isLast={index === facilities.length - 1}>
                        <FacilityTitle>{facility.title}</FacilityTitle>
                        <MapImage src={facility.mapImage} alt={`${facility.title} 지도`} />
                        <InfoContainer>
                            <TableContainer>
                                <TableTitle>{facility.title}</TableTitle>
                                <Table>
                                    <tbody>
                                        <TableRow>
                                            <TableCell>주소</TableCell>
                                            <TableCell>{facility.address}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>전화번호</TableCell>
                                            <TableCell>{facility.phone}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>팩스번호</TableCell>
                                            <TableCell>{facility.fax}</TableCell>
                                        </TableRow>
                                    </tbody>
                                </Table>
                            </TableContainer>
                            <FacilityImage src={facility.facilityImage} alt={`${facility.title} 전경`} />
                        </InfoContainer>
                    </FacilitySection>
                ))}
            </Content>
        </LocationWrapper>
    );
};

export default Location;