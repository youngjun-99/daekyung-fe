import styled from "styled-components";
import { wclamp } from "/src/utils";

export const HistoryContent = styled.div`
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

export const Title = styled.h3`
  font-size: ${wclamp(25, 50)};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${wclamp(31, 63)};
`;

export const TimelineSection = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: ${wclamp(0, 148)};

  @media (max-width: 789px) {
    margin-bottom: ${wclamp(0, 90)};
  }
`;

export const Timeline = styled.div`
  position: relative;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  @media (max-width: 789px) {
    margin: auto;
  }
`;
