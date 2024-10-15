import styled from "styled-components";
import { wclamp } from "/src/utils";

export const FunctionContent = styled.div`
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
  width: 100%;
  max-width: ${wclamp(320, 1460)};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${wclamp(90, 120)};

  @media (max-width: 789px) {
    margin-bottom: 90px;
  }
`;

export const FunctionItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${wclamp(0, 80)};
  padding: ${wclamp(0, 56)} 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    padding: 24px 0;
  }
`;

export const ProductImage = styled.img`
  width: ${wclamp(320, 560)};
  height: auto;
  object-fit: cover;
  aspect-ratio: 560/280;
  object-position: bottom center;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductInfo = styled.div`
  flex: 1;
`;

export const ProductTitle = styled.h4`
  font-size: ${wclamp(21, 25)};
  line-height: 31px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin-bottom: 16px;
  color: black;

  @media (max-width: 768px) {
    font-size: 21px;
    margin-bottom: 12px;
  }
`;

export const ProductContent = styled.p`
  font-size: ${wclamp(15, 19)};
  line-height: ${wclamp(19, 24)};
  color: #767676;
  margin: 0 0 16px 0;

  @media (max-width: 768px) {
    font-size: 15px;
    margin: 0 0 12px 0;
  }
`;

export const UsageTitle = styled.h5`
  font-size: ${wclamp(14, 16)};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.primary.DEFAULT};
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const UsageText = styled.p`
  font-size: ${wclamp(15, 19)};
  line-height: ${wclamp(19, 24)};
  color: #767676;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
