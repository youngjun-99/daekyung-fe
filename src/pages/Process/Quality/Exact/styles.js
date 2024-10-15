import styled from "styled-components";
import { wclamp, hclamp } from "/src/utils";

export const ExactContent = styled.div`
  position: relative;
  width: 100%;
  max-width: ${wclamp(320, 1460)};
`;

export const Title = styled.h1`
  font-size: ${wclamp(19, 32)};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${wclamp(24, 40)};
  margin-bottom: ${wclamp(16, 40)};
`;

export const SubTitle = styled.h3`
  font-size: ${wclamp(15, 19)};
  line-height: ${wclamp(19, 24)};
`;

export const SecondTitle = styled.h2`
  font-size: ${wclamp(19, 32)};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${wclamp(24, 40)};
  margin: ${wclamp(32, 80)} 0;
`;

export const ExactGraphImage = styled.div`
  position: relative;
  width: 100%;
  padding: 0 ${wclamp(40, 220)};
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }
`;

export const ExactDeviceImage = styled.div`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  justify-content: center;
  align-items: center;
  gap: ${wclamp(16, 40)};
  width: 100%;
  margin-top: ${wclamp(32, 40)};

  img {
    width: ${({ isMobile }) => (isMobile ? "100%" : "45%")};
    height: auto;
    object-fit: cover;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }
`;

export const ExactProcessImage = styled.div`
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
`;
