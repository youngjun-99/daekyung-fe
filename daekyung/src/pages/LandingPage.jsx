import React from "react";
import CI2 from "../assets/CI-2.png";
// import divider from '../assets/divider.svg';
import landingMain from "../assets/랜딩페이지_대경인쇄.jpg";
import landingProcess from "../assets/랜딩페이지_공정과정.jpg";
import landingProduct from "../assets/랜딩페이지_제품소개.png";
import landingEquipment from "../assets/랜딩페이지_설비소개.JPG"; // .JPG로 수정

const LandingPage = () => {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <header className="w-full h-[84px] bg-bgwhitecolor fixed top-0 z-50">
        <div className="container mx-auto flex items-center justify-between h-full px-4">
          <div className="w-[268px] h-[84px]">
            <img
              className="w-[159px] h-[70px] my-[7px]"
              src={CI2}
              alt="Company Logo"
            />
          </div>
          <nav className="flex space-x-8">
            <a
              href="#"
              className="font-PC-title-EN-t5-EN-rg text-font-0-2black"
            >
              회사소개
            </a>
            <a
              href="#"
              className="font-PC-title-EN-t5-EN-rg text-font-0-2black"
            >
              공정과정
            </a>
            <a
              href="#"
              className="font-PC-title-EN-t5-EN-rg text-font-0-2black"
            >
              제품소개
            </a>
            <a
              href="#"
              className="font-PC-title-EN-t5-EN-rg text-font-0-2black"
            >
              설비소개
            </a>
            <a
              href="#"
              className="font-PC-title-EN-t5-EN-rg text-font-0-2black"
            >
              고객문의
            </a>
          </nav>
          <button className="bg-[#0071bc] text-font-0-1white font-semibold rounded-md px-4 py-3">
            E-카달로그 다운로드
          </button>
        </div>
      </header>

      <main className="flex-grow pt-[84px]">
        <section
          className="h-[996px] bg-cover bg-center"
          style={{ backgroundImage: `url(${landingMain})` }}
        >
          <div className="container mx-auto h-full flex flex-col justify-end pb-24">
            <p className="text-white text-3xl mb-4">
              <span>고객의 </span>
              <span className="font-bold">본질</span>
              <span>에 </span>
              <span className="font-bold">가치</span>
              <span>를 더하는</span>
            </p>
            <h1 className="font-display-large text-white text-7xl mb-8">
              (주) 대경인쇄
            </h1>
            <p className="font-detail-large text-white">
              그라비아 인쇄 | 산업용 · 식품용 진공포장지 | 각종 특수포장지
              제조전문
            </p>
          </div>
        </section>

        <section
          className="h-[1080px] bg-cover bg-center"
          style={{ backgroundImage: `url(${landingProcess})` }}
        >
          <div className="container mx-auto h-full flex flex-col justify-end pb-24">
            <h2 className="font-display-large text-white text-7xl mb-8">
              공정과정
            </h2>
            <p className="font-detail-large text-white mb-8 max-w-3xl">
              Lorem ipsum dolor sit amet consectetur. Magna in tempor suscipit
              lacus proin lectus risus. Proin feugiat consectetur tortor risus
              nunc nulla porttitor nullam.
            </p>
            <button className="border border-white text-white px-6 py-3 w-[120px]">
              바로가기
            </button>
          </div>
        </section>

        <section
          className="h-[1080px] bg-cover bg-center"
          style={{ backgroundImage: `url(${landingProduct})` }}
        >
          <div className="container mx-auto h-full flex flex-col justify-end pb-24">
            <h2 className="font-display-large text-white text-7xl mb-8">
              제품소개
            </h2>
            <p className="font-detail-large text-white mb-8 max-w-3xl">
              Lorem ipsum dolor sit amet consectetur. Magna in tempor suscipit
              lacus proin lectus risus. Proin feugiat consectetur tortor risus
              nunc nulla porttitor nullam.
            </p>
            <button className="border border-white text-white px-6 py-3 w-[120px]">
              바로가기
            </button>
          </div>
        </section>

        <section
          className="h-[1080px] bg-cover bg-center"
          style={{ backgroundImage: `url(${landingEquipment})` }}
        >
          <div className="container mx-auto h-full flex flex-col justify-end pb-24">
            <h2 className="font-display-large text-white text-7xl mb-8">
              설비소개
            </h2>
            <p className="font-detail-large text-white mb-8 max-w-3xl">
              Lorem ipsum dolor sit amet consectetur. Magna in tempor suscipit
              lacus proin lectus risus. Proin feugiat consectetur tortor risus
              nunc nulla porttitor nullam.
            </p>
            <button className="border border-white text-white px-6 py-3 w-[120px]">
              바로가기
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-[#003458] text-white py-14">
        <div className="container mx-auto">
          <div className="flex justify-between mb-8">
            <nav className="flex space-x-10">
              <a href="#" className="font-button-b1-sb">
                회사소개
              </a>
              <a href="#" className="font-button-b1-sb">
                공정과정
              </a>
              <a href="#" className="font-button-b1-sb">
                제품소개
              </a>
              <a href="#" className="font-button-b1-sb">
                설비소개
              </a>
              <a href="#" className="font-button-b1-sb">
                고객문의
              </a>
            </nav>
          </div>
          {/* <img src={divider} alt="Divider" className="w-full mb-8" /> */}
          <div className="flex justify-between">
            <div>
              <h3 className="font-PC-headline-KR-h5-KR-sb mb-4">
                (주) 대경인쇄
              </h3>
              <p className="font-PC-body-KR-b4-KR-rg text-[#555555]">
                대표이사 : 노진명
              </p>
              <p className="font-PC-body-KR-b4-KR-rg text-[#555555]">
                경기도 김포시 통진읍 귀전로154번길 126-13
              </p>
              <p className="font-PC-body-KR-b4-KR-rg">
                사업자등록번호 : 123-45-67890
              </p>
              <p className="font-PC-body-KR-b4-KR-rg text-[#555555]">
                E-mail : 4118dk@naver.com
              </p>
            </div>
            <div>
              <p className="font-PC-body-KR-b3-KR-rg mb-2">전화번호</p>
              <p className="font-PC-headline-KR-h5-KR-sb">(031) 981-7847</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
