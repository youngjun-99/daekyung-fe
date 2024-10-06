import React from 'react';
import backgroundImage from '../../assets/images/home/company.jpg';
import signatureImage from '../assets/images/about/signature.png';

const Greeting = () => {
  return (
    <div className="relative">
      {/* 배경 이미지 */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      
      {/* 컨텐츠 */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">인사말</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* 왼쪽 이미지 */}
          <div className="md:w-1/2">
            <img src="/path-to-company-image.jpg" alt="대경인쇄 외부 전경" className="w-full h-auto" />
          </div>
          
          {/* 오른쪽 텍스트 */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">
              고객의 꿈을 내 꿈처럼 함께 생각하는 회사<br />
              고객과 함께 발전하는 회사
            </h3>
            <p className="mb-4">
              안녕하세요 주식회사 대경인쇄 대표 노진명입니다.
            </p>
            <p className="mb-4">
              주식회사 대경인쇄는 고객의 꿈과 희망을 함께 키워가는 기업으로,<br />
              포장지사업분야에 이바지하며 포장지가 고내의 영혼이자 당신의 정의이라는 책임감으로<br />
              제조 관련된 공정마다 최사 일정의 모두가 최선을 다하며 최고의 제품을 만들기 위해<br />
              최선을 다하고 있습니다.
            </p>
            <p>
              언제나 고객과 회사가 함상 함계한다는 각오로 더 나은 제품개발과 협력을 통해<br />
              신뢰를 받는 기업 그리고 인정받는 기업이 되도록 최선을 다할 것을 약속드립니다.
            </p>
            
            {/* 서명 */}
            <div className="mt-8 text-right relative">
              <p>주식회사 대경인쇄 대표</p>
              <p className="font-bold text-xl">노 진 명</p>
              <img src={signatureImage} alt="노진명 서명" className="absolute right-0 -top-8 w-32 h-auto" />
            </div>
          </div>
        </div>
        
        {/* E-카탈로그 다운로드 버튼 */}
        <div className="text-center mt-12">
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300">
            E-카탈로그 다운로드
          </button>
        </div>
      </div>
    </div>
  );
};

export default Greeting;