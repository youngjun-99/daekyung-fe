import React from "react";
import styled from "styled-components";
import { Headline1 } from "../../styles/Typography";

const DescWrapper = styled.div`
  position: relative;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  margin-top: 5rem;
  padding: 1rem 4rem; // 좌우 패딩을 5rem으로 설정

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 1rem 2rem; // 화면이 작아질 때 패딩 줄임
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 1rem; // 모바일 화면에서 더 작은 패딩
  }
`;

const Title = styled(Headline1)`
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  text-align: center;
`;

const TableContainer = styled.div`
  padding: 0 15rem;
  margin: 6rem 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`;

const TableHeader = styled.th`
  padding: 1rem;
  text-align: center;
  vertical-align: middle;
  font-size: 1.5rem; // 24px
  font-weight: 600;
  border-top: 1.5px solid ${(props) => props.theme.colors.gray[700]};
  border-bottom: 0.5px solid ${(props) => props.theme.colors.gray[300]};
  border-right: 0.5px solid ${(props) => props.theme.colors.gray[300]};
  background-color: #f7f7fb;

  &:last-child {
    border-right: none;
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  font-size: 1.5rem; // 24px
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[300]};
  border-right: 1px solid ${(props) => props.theme.colors.gray[300]};
  text-align: center;
  vertical-align: middle;

  &:last-child {
    border-right: none;
  }
`;

const TableRow = styled.tr``;

const Desc = () => {
  const equipmentData = [
    {
      process: "인쇄",
      equipment: ["9도 인쇄기 (제1공장)", "10도 인쇄기 (제2공장)"],
      ea: [1, 1],
    },
    {
      process: "합지",
      equipment: ["드라이 (용제,무용제)", "T-다이 (1액형, 2액형)"],
      ea: [1, 1],
    },
    { process: "스레팅", equipment: "슬리터기", ea: 1 },
    { process: "가공", equipment: "가공기", ea: 3 },
  ];

  return (
    <DescWrapper>
      <Content>
        <Title>설비개요</Title>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <TableHeader>제조공정</TableHeader>
                <TableHeader>설비</TableHeader>
                <TableHeader>EA</TableHeader>
              </tr>
            </thead>
            <tbody>
              {equipmentData.map((item, index) => (
                <React.Fragment key={index}>
                  {Array.isArray(item.equipment) ? (
                    item.equipment.map((eq, eqIndex) => (
                      <TableRow key={`${index}-${eqIndex}`}>
                        {eqIndex === 0 && (
                          <TableCell rowSpan={item.equipment.length}>
                            {item.process}
                          </TableCell>
                        )}
                        <TableCell>{eq}</TableCell>
                        <TableCell>{item.ea[eqIndex]}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell>{item.process}</TableCell>
                      <TableCell>{item.equipment}</TableCell>
                      <TableCell>{item.ea}</TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </Content>
    </DescWrapper>
  );
};

export default Desc;
