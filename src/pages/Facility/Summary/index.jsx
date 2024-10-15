import React from "react";
import {
  SummaryContent,
  TitleSection,
  Title,
  TableWrapper,
  Table,
  Th,
  Td,
} from "./styles";

const Summary = () => {
  const tableData = [
    {
      category: "인쇄",
      items: [
        { equipment: "9도 인쇄기 (제1공장)", count: 1 },
        { equipment: "10도 인쇄기 (제2공장)", count: 1 },
      ],
    },
    {
      category: "합지",
      items: [
        { equipment: "드라이 (무용제)", count: 1 },
        { equipment: "T-다이", count: 1 },
      ],
    },
    {
      category: "스레팅",
      items: [{ equipment: "슬리터기", count: 1 }],
    },
    {
      category: "가공",
      items: [{ equipment: "제대기", count: 3 }],
    },
  ];
  return (
    <SummaryContent>
      <TitleSection>
        <Title>설비 개요</Title>
      </TitleSection>
      <TableWrapper>
        <Table>
          <colgroup>
            <col />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <Th isFirst>제조공정</Th>
              <Th>설비</Th>
              <Th isLast>EA</Th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((category, categoryIndex) =>
              category.items.map((item, itemIndex) => (
                <tr key={`${categoryIndex}-${itemIndex}`}>
                  {itemIndex === 0 && (
                    <Td
                      rowSpan={category.items.length}
                      isCategory
                      isFirst
                      isLastRow={categoryIndex === tableData.length - 1}
                    >
                      {category.category}
                    </Td>
                  )}
                  <Td
                    isLastRow={
                      categoryIndex === tableData.length - 1 &&
                      itemIndex === category.items.length - 1
                    }
                  >
                    {item.equipment}
                  </Td>
                  <Td
                    isLast
                    isLastRow={
                      categoryIndex === tableData.length - 1 &&
                      itemIndex === category.items.length - 1
                    }
                  >
                    {item.count}
                  </Td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </TableWrapper>
    </SummaryContent>
  );
};

export default Summary;
