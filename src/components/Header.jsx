import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoImage from '../assets/images/daekyung-logo.png';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHomePage = location.pathname === '/';

  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img onClick={() => navigate('/')} src={logoImage} alt="Daekyung Printing" className="h-12 w-auto" />
          </div>
          {/* 햄버거 메뉴 아이콘 (모바일) */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* 데스크탑 네비게이션 */}
          <nav className="hidden md:flex items-center justify-between w-full">
            <ul className="flex-auto text-black text-lg font-bold">
              <ul className="grid mx-40 grid-cols-5 gap-8 justify-items-center text-black text-lg font-bold">
                <li><Link to="/about" className="hover:text-gray-900">회사소개</Link></li>
                <li><Link to="/process" className="hover:text-gray-900">공정과정</Link></li>
                <li><Link to="/products" className="hover:text-gray-900">제품소개</Link></li>
                <li><Link to="/facilities" className="hover:text-gray-900">설비소개</Link></li>
                <li><Link to="/inquiry" className="hover:text-gray-900">고객문의</Link></li>
              </ul>
            </ul>
          </nav>
          {isHomePage && (
              <button 
                className="bg-button-blue text-white px-4 py-2 rounded transition duration-300"
              >
                E-카달로그 다운하기
              </button>
            )}
        </div>
        {/* 모바일 네비게이션 */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-2">
              <li><Link to="/about" className="block text-gray-700 hover:text-gray-900 font-medium">회사소개</Link></li>
              <li><Link to="/process" className="block text-gray-700 hover:text-gray-900 font-medium">공정과정</Link></li>
              <li><Link to="/products" className="block text-gray-700 hover:text-gray-900 font-medium">제품소개</Link></li>
              <li><Link to="/facilities" className="block text-gray-700 hover:text-gray-900 font-medium">설비소개</Link></li>
              <li><Link to="/inquiry" className="block text-gray-700 hover:text-gray-900 font-medium">고객문의</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;