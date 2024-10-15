import styled from "styled-components";
import { wclamp } from "/src/utils";

export const TypeContent = styled.div`
  position: relative;
  width: 100%;
  max-width: ${wclamp(320, 1460)};
  margin: 0 ${wclamp(20, 230)};

  @media (max-width: 789px) {
    margin: 0 auto;
  }
`;

export const TitleSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${wclamp(32, 80)};
`;

export const Title = styled.h1`
  font-size: ${wclamp(25, 50)};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${wclamp(31, 63)};
`;

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${wclamp(40, 80)};
  width: 100%;
  margin-bottom: ${wclamp(90, 120)};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 90px;
  }
`;

export const TypeItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-bottom: 1px solid #e1e1e1;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`;

export const ProductInfo = styled.div``;

export const ProductTitle = styled.h4`
  font-size: ${wclamp(21, 32)};
  line-height: ${wclamp(31, 40)};
  font-weight: 700;
  margin-bottom: 16px;
  color: black;

  @media (max-width: 789px) {
    font-size: 21px;
    line-height: 31px;
  }
`;

export const ProductContent = styled.p`
  font-size: ${wclamp(12, 19)};
  line-height: ${wclamp(19, 24)};
  color: #767676;
  word-break: keep-all;

  @media (max-width: 789px) {
    font-size: 15px;
    line-height: 19px;
  }
`;
