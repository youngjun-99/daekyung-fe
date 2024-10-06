import React from 'react';
import { useNavigate } from 'react-router-dom';
import companyImage from '../assets/images/home/company.jpg';
import processImage from '../assets/images/home/process.jpg';
import productImage from '../assets/images/home/product.png';
import facilityImage from '../assets/images/home/facility.jpg';

const Home = () => {
  const navigate = useNavigate();
  const sections = [
    { title: '(주) 대경인쇄', subtitle: '고객의 본질에 가치를 더하는', image: companyImage, text: '그라비아 인쇄 | 산업용 · 식품용 진공포장지 | 각종 특수포장지 제조전문', url: '/' },
    { title: '공정과정', subtitle: '공정과정 입니다.', image: processImage, url: '/process' },
    { title: '제품소개', subtitle: '제품소개 입니다.', image: productImage, url: '/product'},
    { title: '설비소개', subtitle: '설비소개 입니다.', image: facilityImage, url: '/facility'},
  ];

  return (
    <div className="w-full">

      {/* 첫 번째 섹션 */}
      <div className="relative w-full h-screen min-h-[1080px]">
        <img 
          src={sections[0].image} 
          alt={sections[0].title} 
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end items-start 
        p-8 md:p-16 lg:p-24
        text-white">
          <div className="max-w-[1920px] mx-auto w-full mb-10 space-y-4">
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-2xl">
              고객의 <strong className="font-bold">본질</strong>에 <strong className="font-bold">가치</strong>를 더하는
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">{sections[0].title}</h2>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl max-w-2xl">{sections[0].text}</p>
          </div>
        </div>
      </div>

      {/* 나머지 섹션들 */}
      {sections.slice(1).map((section, index) => (
        <div key={index} className="relative w-full h-screen min-h-[1080px]">
          <img 
            src={section.image} 
            alt={section.title} 
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end items-start p-8 md:p-16 lg:p-24">
            <div className="max-w-[1920px] mx-auto w-full">
              {/* 섹션 순서: subtitle 먼저 */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 text-white">{section.title}</h2>
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-14 text-white max-w-2xl">{section.subtitle}</p>
              <button className="mb-14 px-6 py-2 rounded hover:bg-gray-200 transition duration-300 text-base md:text-lg lg:text-xl"
                style={{
                  border: '2px solid rgba(255, 255, 255, 0.5)',
                  position: 'relative',
                }}
                onClick={() => navigate(section.url)}>
                <span style={{ color: 'white', position: 'relative', zIndex: 1 }}>바로 가기</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
