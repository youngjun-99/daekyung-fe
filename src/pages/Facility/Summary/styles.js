import styled from "styled-components";
import { wclamp } from "/src/utils";

export const SummaryContent = styled.div`
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

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border-top: 1px solid black;
  margin-bottom: ${wclamp(90, 120)};

  @media (max-width: 789px) {
    margin-bottom: 90px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  position: relative;
  font-size: ${wclamp(17, 24)};
  line-height: ${wclamp(21, 34)};
  padding: ${wclamp(8, 16)};
  background-color: #f8f9fa;
  text-align: center;
  border-bottom: 1px solid #dee2e6;
  border-right: ${(props) => (!props.isLast ? "1px solid #dee2e6" : "none")};
  border-left: ${(props) => (!props.isFirst ? "1px solid #dee2e6" : "none")};
  font-weight: ${(props) => props.theme.fontWeights.bold};

  @media (max-width: 789px) {
    padding: 8px;
    font-size: 17px;
    line-height: 21px;
  }
`;

export const Td = styled.td`
  font-size: ${wclamp(17, 24)};
  line-height: ${wclamp(21, 34)};
  padding: ${wclamp(12, 16)};
  border: 1px solid #dee2e6;
  border-bottom: ${(props) => (props.isLastRow ? "1px solid #dee2e6" : "none")};
  border-right: ${(props) => (!props.isLast ? "1px solid #dee2e6" : "none")};
  border-left: ${(props) => (!props.isFirst ? "1px solid #dee2e6" : "none")};
  text-align: center;
  vertical-align: middle;

  @media (max-width: 789px) {
    padding: 8px;
    font-size: 17px;
    line-height: 21px;
  }
`;
