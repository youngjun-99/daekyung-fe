import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start border-b border-gray-600 pb-6 mb-6">
          <nav>
            <ul className="flex space-x-6 text-gray-50">
              <li><Link to="/about" className="hover:text-gray-300">회사소개</Link></li>
              <li><Link to="/process" className="hover:text-gray-300">공정과정</Link></li>
              <li><Link to="/products" className="hover:text-gray-300">제품소개</Link></li>
              <li><Link to="/facilities" className="hover:text-gray-300">설비소개</Link></li>
              <li><Link to="/inquiry" className="hover:text-gray-300">고객문의</Link></li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-between items-start text-gray-50">
          <div className="mr-8">
            <h3 className="font-bold text-2xl mb-2">(주) 대경인쇄</h3>
          </div>
          <div className="font-bold text-sm space-y-2 mr-auto ml-8 text-left"> {/* 오른쪽으로 이동시키기 위해 mr-auto 사용 */}
            <p>대표이사 : 노진명</p>
            <p>경기도 김포시 통진읍 귀전로154번길 126-13</p>
            <p>사업자등록번호 : 123-45-67890</p>
            <p>E-mail : 4118dk@naver.com</p>
          </div>
          <div className="text-right">
            <p className="text-left text-sm mb-1">전화번호</p>
            <p className="text-2xl font-bold">(031) 981-7847</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;