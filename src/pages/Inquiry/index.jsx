import React, { useState } from "react";
import {
  FormContainer,
  HeroSection,
  HeroImage,
  HeroContent,
  HeroSub,
  HeroTitle,
  Container,
  TitleSection,
  Title,
  StyledTable,
  TableCell,
  LabelCell,
  Input,
  Select,
  RequiredMark,
  RadioGroup,
  Radio,
  RadioLabel,
  SubmitButton,
  ContentCell,
  ContentLabel,
  SizeInputGroup,
  SizeInput,
  SizeText,
  TextArea,
  UnitText,
  PrintInput,
  MaterialInput,
  TableSection,
  TableTitle,
  TableSub,
  TermSection,
  Term,
  TermTitle,
  TermContent,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
} from "./styles";
import heroImage from "/src/assets/images/inquiry/hero.png";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    productType: "",
    width: "",
    length: "",
    height: "",
    printCount: "",
    productDetail: "",
    requirements: "",
    catalog: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // 체크박스 처리
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
      return;
    }

    // 숫자 입력 필드 처리
    if (["width", "length", "height", "printCount"].includes(name)) {
      if (value === "" || /^\d+$/.test(value)) {
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
      return;
    }

    // radio 버튼 처리
    if (type === "radio") {
      setFormData((prev) => ({
        ...prev,
        [name]: value === "true",
      }));
      return;
    }

    // 나머지 일반 입력 필드 처리
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isValidNumber = (value) => {
    return value === "" || (Number(value) > 0 && Number(value) <= 999);
  };

  const isValidCountNumber = (value) => {
    return value === "" || (Number(value) > 0 && Number(value) <= 10);
  };

  const formatMailContent = (data) => {
    const sizeString =
      data.width && data.length
        ? `${data.width} × ${data.length}${
            data.height ? ` × ${data.height}` : ""
          }`
        : "미입력";

    return `
[문의내용]<br />
■ 문의자 정보<br />
- 성함: ${data.name}<br />
- 회사명: ${data.company}<br />
- 연락처: ${data.phone}<br />
- 이메일: ${data.email}<br /><br />
■ 제품 정보<br />
- 제품 형태: ${data.productType || "미입력"}<br />
- 제품 규격: ${sizeString}<br />
- 인쇄 도수: ${data.printCount ? `${data.printCount}도` : "미입력"}<br />
- 재질 및 두께: ${data.productDetail || "미입력"}<br />
- 추가 요구사항: ${data.requirements || "없음"}<br />
- 카탈로그 요청: ${data.catalog ? "네" : "아니오"}<br /><br />
※ 문의시간: ${new Date().toLocaleString("ko-KR", {
      timeZone: "Asia/Seoul",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })}
    `.trim();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 필수 필드 검증
    if (
      !formData.name ||
      !formData.company ||
      !formData.phone ||
      !formData.email
    ) {
      alert("필수 항목을 모두 입력해주세요.");
      return;
    }

    // 숫자 필드 검증
    const numericFields = ["width", "length", "height"];
    for (const field of numericFields) {
      if (formData[field] && !isValidNumber(formData[field])) {
        alert("제품 규격에 유효한 숫자를 입력해주세요 (1-999)");
        return;
      }
    }

    if (formData.printCount && !isValidCountNumber(formData.printCount)) {
      alert("인쇄 도수에 유효한 숫자를 입력해주세요 (1-10)");
      return;
    }

    const token = "5e1c806fce84b47b60b9c4775d3c5034".trim();

    const formDataToSend = new FormData();
    formDataToSend.append("to", "dudqh8956@dk-print.co.kr");
    formDataToSend.append("user_id", "dudqh8956");
    formDataToSend.append("subject", "문의가 접수되었습니다.");
    formDataToSend.append("content", formatMailContent(formData));
    formDataToSend.append("save_sent_mail", "N");

    try {
      const response = await fetch("/api/hiworks/office/v2/webmail/sendMail", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      if (response.ok) {
        alert("문의가 성공적으로 전송되었습니다.");
        console.log(response.json());
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          productType: "",
          width: "",
          length: "",
          height: "",
          printCount: "",
          productDetail: "",
          requirements: "",
          catalog: false,
        });
      } else {
        const errorData = await response.json();
        alert(
          `문의 전송에 실패했습니다: ${
            errorData.message || "다시 시도해주세요."
          }`
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("문의 전송 중 오류가 발생했습니다.");
    }
  };

  return (
    <FormContainer>
      <HeroSection>
        <HeroImage src={heroImage} />
        <HeroContent>
          <HeroSub>Inquiry</HeroSub>
          <HeroTitle>문의하기</HeroTitle>
        </HeroContent>
      </HeroSection>
      <Container>
        <TitleSection>
          <Title>언제든 편하게 문의주세요!</Title>
        </TitleSection>
        <TableSection>
          <TableTitle>문의 내용 입력</TableTitle>
          <TableSub>
            <RequiredMark>*</RequiredMark>표시는 필수 입력 항목입니다.
          </TableSub>
          <form onSubmit={handleSubmit}>
            <StyledTable>
              <tbody>
                <tr>
                  <LabelCell>
                    <RequiredMark>*</RequiredMark>문의자 성함
                  </LabelCell>
                  <TableCell>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="문의자 성함을 입력해주세요."
                    />
                  </TableCell>
                  <LabelCell>
                    <RequiredMark>*</RequiredMark>회사명
                  </LabelCell>
                  <TableCell>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="회사명을 입력해주세요."
                    />
                  </TableCell>
                </tr>

                <tr>
                  <LabelCell>
                    <RequiredMark>*</RequiredMark>연락처
                  </LabelCell>
                  <TableCell>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="-없이 숫자로만 입력해주세요."
                    />
                  </TableCell>
                  <LabelCell>
                    <RequiredMark>*</RequiredMark>이메일
                  </LabelCell>
                  <TableCell>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                    />
                  </TableCell>
                </tr>

                <tr>
                  <LabelCell>
                    <RequiredMark>*</RequiredMark>문의 내용
                  </LabelCell>
                  <TableCell colSpan="3">
                    <ContentCell>
                      <ContentLabel>1. 제품 형태</ContentLabel>
                      <Select
                        name="productType"
                        value={formData.productType}
                        onChange={handleChange}
                      >
                        <option value="">선택하세요</option>
                        <option value="2방 파우치">2방 파우치</option>
                        <option value="3방 파우치">3방 파우치</option>
                        <option value="스탠드 파우치">스탠드 파우치</option>
                        <option value="박스 파우치">박스 파우치</option>
                        <option value="M방 파우치">M방 파우치</option>
                        <option value="T방 파우치">T방 파우치</option>
                        <option value="자동롤">자동롤</option>
                        <option value="기타">기타</option>
                      </Select>
                    </ContentCell>

                    <ContentCell>
                      <ContentLabel>
                        2. 제품 규격 (가로×세로(×밑지))
                      </ContentLabel>
                      <SizeInputGroup>
                        <SizeInput
                          type="text"
                          name="width"
                          value={formData.width}
                          onChange={handleChange}
                          placeholder="120"
                        />
                        <SizeText>×</SizeText>
                        <SizeInput
                          type="text"
                          name="length"
                          value={formData.length}
                          onChange={handleChange}
                          placeholder="80"
                        />
                        <SizeText>(×</SizeText>
                        <SizeInput
                          type="text"
                          name="height"
                          value={formData.height}
                          onChange={handleChange}
                          placeholder="70"
                        />
                        <SizeText>)</SizeText>
                      </SizeInputGroup>
                    </ContentCell>

                    <ContentCell>
                      <ContentLabel>3. 인쇄 도수</ContentLabel>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <PrintInput
                          type="text"
                          name="printCount"
                          value={formData.printCount}
                          onChange={handleChange}
                          placeholder="1-10"
                        />
                        <UnitText>도</UnitText>
                      </div>
                    </ContentCell>

                    <ContentCell>
                      <ContentLabel>4. 재질 및 두께</ContentLabel>
                      <MaterialInput
                        type="text"
                        name="productDetail"
                        value={formData.productDetail}
                        onChange={handleChange}
                        placeholder="ex) PET(12) + AL(6) + LLDPE(60)"
                      />
                    </ContentCell>

                    <ContentCell>
                      <ContentLabel>5. 그 외 요구사항</ContentLabel>
                      <TextArea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        placeholder="추가 요구사항을 입력해주세요"
                      />
                    </ContentCell>
                  </TableCell>
                </tr>

                <tr>
                  <LabelCell>카탈로그 요청</LabelCell>
                  <TableCell colSpan="3">
                    <RadioGroup>
                      <div>
                        <Radio
                          type="radio"
                          name="catalog"
                          value="true"
                          checked={formData.catalog === true}
                          onChange={handleChange}
                          id="catalog-yes"
                        />
                        <RadioLabel htmlFor="catalog-yes">네</RadioLabel>
                      </div>
                      <div>
                        <Radio
                          type="radio"
                          name="catalog"
                          value="false"
                          checked={formData.catalog === false}
                          onChange={handleChange}
                          id="catalog-no"
                        />
                        <RadioLabel htmlFor="catalog-no">아니오</RadioLabel>
                      </div>
                    </RadioGroup>
                  </TableCell>
                </tr>
              </tbody>
            </StyledTable>

            <TermSection>
              <TableTitle>약관 동의</TableTitle>
              <Term>
                <TermTitle>개인정보 수집 및 활용 동의</TermTitle>
                <TermContent>
                  {"<(주)대경인쇄> (이하 '회사')는 고객님의 홈페이지 견적/문의 서비스 이용을 위해 다음과 같이 고객님의 정보를 수집 및 이용합니다.\n" +
                    "1. 개인정보 수집/이용목적 - 견적/문의 등록, 답변 안내\n" +
                    "2. 수집하는 개인정보의 항목 - 필수항목 : 담당자명, 연락처, 이메일\n" +
                    "3. 개인정보의 보유/이용기간\n" +
                    "수집된 개인정보는 원칙적으로 문의 후 1개월 또는 업무 목적 달성 시 지체 없이 파기합니다.\n" +
                    "단, 소비자 불만/분쟁 처리 기록의 경우 전자상거래 등에서의 소비자 보호에 관한 법률에 의하여 3년 동안 정보를 보관합니다.\n\n" +
                    "회사의 개인정보보호정책, 이용에 대한 동의를 거부할 수 있으며, 동의 거부시 견적/문의 서비스를 이용할 수 없습니다."}
                </TermContent>
              </Term>
              <CheckboxContainer>
                <Checkbox
                  type="checkbox"
                  id="terms"
                  name="termsAgreed"
                  checked={formData.termsAgreed}
                  onChange={handleChange}
                />
                <CheckboxLabel>
                  개인정보 수집 및 이용에 동의합니다. (필수)
                </CheckboxLabel>
              </CheckboxContainer>
            </TermSection>
            <SubmitButton type="submit" disabled={!formData.termsAgreed}>
              문의하기
            </SubmitButton>
          </form>
        </TableSection>
      </Container>
    </FormContainer>
  );
};

export default InquiryForm;
