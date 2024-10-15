import styled from "styled-components";
import { wclamp } from "/src/utils";

export const QualityContent = styled.div`
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

  @media (max-width: 789px) {
    font-size: 25px;
    line-height: 31px;
  }
`;

export const TabList = styled.div`
  display: flex;
  gap: 1px;
  margin-bottom: ${wclamp(40, 60)};
`;

export const Tab = styled.button`
  flex: 1;
  padding: auto auto;
  background: ${(props) => (props.$active ? "#166CE3" : "#fff")};
  color: ${(props) => (props.$active ? "#ffffff" : "#e1e1e1")};
  border: none;
  cursor: pointer;
  font-size: ${wclamp(15, 19)};
  line-height: ${wclamp(19, 24)};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  transition: all 0.3s ease;
  height: ${wclamp(32, 56)};

  @media (max-width: 789px) {
    font-size: 15px;
    line-height: 19px;
  }
`;

export const TabContent = styled.div`
  margin-top: ${wclamp(15, 24)};
`;
