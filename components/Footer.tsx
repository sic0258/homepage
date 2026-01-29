
import React from 'react';
import { CompanyInfo } from '../types';

interface FooterProps {
  company: CompanyInfo;
}

const Footer: React.FC<FooterProps> = ({ company }) => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-20 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 text-white font-bold text-2xl mb-8">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-sm">S</div>
              <span>{company.name}</span>
            </div>
            <p className="max-w-md mb-8 leading-relaxed">
              에스아이씨는 전문화된 인력과 축적된 노하우를 바탕으로 공장 자동화 분야의 글로벌 리더가 되기 위해 노력하고 있습니다.
            </p>
            <div className="flex space-x-4">
              {['Blog', 'Insta', 'LinkedIn', 'Youtube'].map(social => (
                <button key={social} className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                   <span className="text-[10px] font-bold">{social}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6">Quick Links</h5>
            <ul className="space-y-4 text-sm">
              <li><button className="hover:text-white">회사 소개</button></li>
              <li><button className="hover:text-white">사업 분야</button></li>
              <li><button className="hover:text-white">프로젝트 실적</button></li>
              <li><button className="hover:text-white">인재 채용</button></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6">Contact</h5>
            <ul className="space-y-4 text-sm">
              <li>{company.phone}</li>
              <li>{company.email}</li>
              <li className="leading-relaxed">{company.address}</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            &copy; 2024 (주)에스아이씨. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <button className="hover:text-white">개인정보처리방침</button>
            <button className="hover:text-white">이용약관</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
