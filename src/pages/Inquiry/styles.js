import styled from "styled-components";
import { wclamp, hclamp } from "/src/utils";

export const FormContainer = styled.div`
  position: relative;
  overflow-x: hidden;
`;

export const HeroSection = styled.div`
  position: relative;
  width: ${wclamp(360, 1920)};
  height: ${wclamp(300, 500)};
  margin: 0 auto;
  margin-bottom: ${wclamp(8, 16)};
`;

export const HeroImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position: center;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 50%; /* 세로 중앙 정렬 */
  left: ${wclamp(20, 230)};
  z-index: 2;
  color: white;
  transform: translateY(-50%); /* 세로 중앙 정렬을 위한 Y축 transform만 사용 */

  @media (max-width: 790px) {
    padding: 0 16px;
    left: 16px; /* 모바일에서는 16px만큼만 떨어지도록 */
    width: calc(100% - 32px); /* 모바일에서의 너비 조정 */
  }
`;

export const HeroSub = styled.p`
  font-size: ${wclamp(12, 15)};
  line-height: ${wclamp(12, 19)};
  color: white;
`;

export const HeroTitle = styled.h2`
  font-size: ${wclamp(32, 66)};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  line-height: ${wclamp(40, 83)};
  color: white;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: ${wclamp(320, 1460)};
  margin-top: ${wclamp(32, 100)};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${wclamp(94, 120)};

  @media (max-width: 789px) {
    margin-bottom: 94px;
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
export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-top: 1px solid black;
  margin-bottom: 80px;

  tr {
    border-bottom: 1px solid #e5e5ec;
  }

  @media (max-width: 789px) {
    display: flex;
    flex-wrap: wrap;

    tbody {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }

    tr {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      border-bottom: none;
    }
  }
`;

export const TableCell = styled.td`
  padding: auto 24px;
  vertical-align: middle;

  &[colspan="3"] {
    padding: 24px 16px;
  }

  @media (max-width: 789px) {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 70%;
    background-color: white;
    border-bottom: 1px solid #e5e5ec;

    &[colspan="3"] {
      width: 70%;
      padding: 6px 8px;
    }
  }
`;

export const LabelCell = styled.td`
  width: ${wclamp(100, 250)};
  background-color: #f7f7fb;
  font-size: ${wclamp(15, 19)};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${wclamp(19, 24)};
  text-align: center;
  vertical-align: middle;

  @media (max-width: 789px) {
    width: 30%;
    font-size: 15px;
    line-height: 19px;
    border-bottom: 1px solid #e5e5ec;
    background-color: #f7f7fb;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentCell = styled.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ContentLabel = styled.div`
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: none;
  font-size: ${wclamp(15, 19)};
  line-height: ${wclamp(19, 24)};

  &::placeholder {
    color: #e1e1e1;
  }
  @media (max-width: 789px) {
    font-size: 15px;
    line-height: 19px;
  }
`;

export const Select = styled.select`
  width: 141px;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #e1e1e1;
  font-size: ${wclamp(15, 19)};
  line-height: ${wclamp(19, 24)};
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23333' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-color: #fff;
  color: ${(props) => (props.value === "" ? "#999" : "#333")};
  margin-left: 24px;

  option {
    color: black;
  }

  @media (max-width: 789px) {
    width: 107px;
    height: 27px;
    font-size: 15px;
    line-height: 19px;
  }
`;

export const SizeInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SizeInput = styled(Input)`
  width: 80px;
  height: 40px;
  border: 1px solid #e1e1e1;
  font-size: ${wclamp(15, 19)};
  line-height: ${wclamp(19, 24)};
  text-align: center;

  @media (max-width: 789px) {
    width: 40px;
    height: 27px;
    font-size: 15px;
    line-height: 19px;
    padding: 7.5px 4px;
  }

  &:first-child {
    margin-left: 24px;
  }
`;

export const SizeText = styled.span`
  font-size: 19px;
  line-height: 24px;
  color: #333;
`;

export const PrintInput = styled(Input)`
  width: 72px;
  height: 40px;
  font-size: ${wclamp(15, 19)};
  line-height: ${wclamp(19, 24)};
  border: 1px solid #e1e1e1;
  text-align: center;
  margin-left: 24px;

  @media (max-width: 789px) {
    font-size: 15px;
    line-height: 19px;
    width: 48px;
    height: 27px;
    padding: 8px 4px;
  }
`;

export const MaterialInput = styled.textarea`
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  border: 1px solid #e1e1e1;
  font-size: ${wclamp(15, 19)};
  line-height: ${wclamp(19, 24)};
  margin-left: 24px;
  resize: none;
  overflow-y: hidden;

  &::placeholder {
    color: #e1e1e1;
  }

  @media (max-width: 789px) {
    font-size: 15px;
    line-height: 19px;
    padding: 4px 8px;
    height: 46px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: ${wclamp(103, 112)};
  padding: 10px;
  border: 1px solid #e1e1e1;
  font-size: ${wclamp(15, 19)};
  line-height: ${wclamp(19, 24)};
  resize: none;
  margin-left: 24px;

  &::placeholder {
    color: #e1e1e1;
  }

  @media (max-width: 789px) {
    width: 100%;
    height: 103px;
    font-size: 15px;
    line-height: 19px;
  }
`;

export const RequiredMark = styled.span`
  color: red;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const Radio = styled.input`
  width: 16px;
  height: 16px;
  margin: 0;
`;

export const RadioLabel = styled.label`
  font-size: 14px;
  cursor: pointer;
`;

export const UnitText = styled.span`
  margin-left: 8px;
  font-size: 14px;
  color: #333;
`;

export const SubmitButton = styled.button`
  display: block;
  width: 200px;
  height: 48px;
  margin: 80px auto 0 auto;
  border: none;
  background-color: ${(props) => props.theme.colors.primary.DEFAULT};
  color: white;
  font-size: 19px;
  line-height: 24px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s;
`;

export const TableSection = styled.section``;

export const TableTitle = styled.div`
  font-size: ${wclamp(21, 32)};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${wclamp(31, 40)};
  margin-bottom: 16px;

  @media (max-width: 789px) {
    font-size: 21px;
    line-height: 31px;
    margin-bottom: 8px;
  }
`;

export const TableSub = styled.div`
  font-size: ${wclamp(12, 17)};
  line-height: ${wclamp(12, 21)};
  margin-bottom: 16px;

  @media (max-width: 789px) {
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 8px;
  }
`;

export const TermSection = styled.section`
  margin-bottom: 40px;
`;

export const Term = styled.div`
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid #e5e5ec;
  border-radius: 4px;
`;

export const TermTitle = styled.div`
  font-size: ${wclamp(19, 21)};
  line-height: ${wclamp(24, 31)};
  margin-bottom: 8px;
  font-weight: ${(props) => props.theme.fontWeights.bold};

  @media (max-width: 789px) {
    font-size: 19px;
    line-height: 24px;
  }
`;

export const TermContent = styled.div`
  font-size: ${wclamp(15, 19)};
  line-height: ${wclamp(19, 24)};
  white-space: pre-line;

  @media (max-width: 789px) {
    font-size: 15px;
    line-height: 19px;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: ${wclamp(8, 24)};

  @media (max-width: 789px) {
    margin-top: 8px;
  }
`;

export const Checkbox = styled.input`
  width: ${wclamp(20, 24)};
  height: ${wclamp(20, 24)};
  cursor: pointer;

  @media (max-width: 789px) {
    width: 20px;
    height: 20px;
  }
`;

export const CheckboxLabel = styled.label`
  font-size: ${wclamp(15, 17)};
  line-height: ${wclamp(19, 21)};

  @media (max-width: 789px) {
    font-size: 15px;
    line-height: 19px;
  }
`;
