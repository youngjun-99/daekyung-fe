import styled from "styled-components";
import { wclamp } from "/src/utils";

export const LocationContent = styled.div`
  position: relative;
  width: 100%;
  max-width: ${wclamp(320, 1460)};
  margin: 0 ${wclamp(20, 230)};

  @media (max-width: 789px) {
    margin: 0 auto;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${wclamp(32, 80)};
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: ${wclamp(16, 40)};

  @media (max-width: 789px) {
    margin-bottom: 16px;
  }
`;

export const Title = styled.h1`
  font-size: ${wclamp(25, 50)};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${wclamp(31, 63)};
`;

export const FacilitySection = styled.div`
  margin-bottom: 80px;

  @media (max-width: 789px) {
    margin-bottom: 32px;
  }
`;

export const FacilityTitle = styled.h2`
  font-size: ${wclamp(21, 32)};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${wclamp(31, 40)};
  white-space: nowrap;

  @media (max-width: 789px) {
    font-size: 21px;
    line-height: 31px;
  }
`;

export const TitleLine = styled.div`
  height: 1px;
  background-color: #000;
  width: 100%;
  margin-top: auto;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${wclamp(0, 40)};

  @media (min-width: 790px) {
    align-items: stretch;
    height: ${wclamp(270, 599)};
  }

  @media (max-width: 789px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const MapContainer = styled.div`
  width: ${wclamp(327, 710)};
  height: 100%;

  @media (max-width: 789px) {
    width: 100%;
    aspect-ratio: 32/27;
    grid-row: 1;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (max-width: 789px) {
    grid-row: 2;
  }
`;

export const InfoTable = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${wclamp(0, 16)};

  @media (max-width: 789px) {
    gap: 12px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;

  @media (max-width: 789px) {
    grid-template-columns: 80px 1fr;
  }
`;

export const Label = styled.span`
  color: #666;
  font-size: ${wclamp(16, 19)};
  line-height: ${wclamp(20, 24)};

  @media (max-width: 789px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Value = styled.span`
  font-size: ${wclamp(16, 19)};
  line-height: ${wclamp(20, 24)};

  @media (max-width: 789px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const FacilityImage = styled.img`
  margin-top: ${wclamp(0, 24)};
  width: ${wclamp(0, 710)};
  height: ${wclamp(0, 471)};
  object-fit: cover;

  @media (max-width: 789px) {
    margin-top: 24px;
    width: 100%;
    height: 100%;
  }
`;
