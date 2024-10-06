import React, { useState } from 'react';
import Greeting from './about/Greeting';
// 다른 컴포넌트들을 import 해야 합니다.
// import History from './History';
// import Organization from './Organization';
// import Certifications from './Certifications';
// import Location from './Location';

const About = () => {
  const [activeTab, setActiveTab] = useState('greeting');

  const tabs = [
    { id: 'greeting', label: '인사말' },
    { id: 'history', label: '회사연혁' },
    { id: 'organization', label: '조직도' },
    { id: 'certifications', label: '인증현황' },
    { id: 'location', label: '사업장 위치' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'greeting':
        return <Greeting />;
      case 'history':
        // return <History />;
        return <div>회사연혁 컴포넌트</div>;
      case 'organization':
        // return <Organization />;
        return <div>조직도 컴포넌트</div>;
      case 'certifications':
        // return <Certifications />;
        return <div>인증현황 컴포넌트</div>;
      case 'location':
        // return <Location />;
        return <div>사업장 위치 컴포넌트</div>;
      default:
        return <Greeting />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">회사소개</h1>
      
      {/* 탭 네비게이션 */}
      <div className="flex border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-2 px-4 mr-2 focus:outline-none ${
              activeTab === tab.id
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 탭 컨텐츠 */}
      <div className="mt-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default About;