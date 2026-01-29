
import React from 'react';
import { SiteSettings } from '../types';

interface Props {
  settings: SiteSettings;
}

const Contact: React.FC<Props> = ({ settings }) => {
  return (
    <section id="contact" className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden grid lg:grid-cols-5">
          <div className="lg:col-span-2 blue-gradient p-12 text-white flex flex-col justify-between">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold">협업 문의하기</h3>
              <p className="text-blue-50/80 leading-relaxed text-lg">
                귀사의 생산 공정 자동화를 위한 최고의 솔루션을 제안해 드립니다. 지금 바로 상담을 시작하세요.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm font-semibold mb-1">전화번호</p>
                    <p className="text-xl font-bold">{settings.phoneNumber}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm font-semibold mb-1">이메일</p>
                    <p className="text-xl font-bold">{settings.contactEmail}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm font-semibold mb-1">사무실 위치</p>
                    <p className="font-medium text-sm leading-snug">{settings.address}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex gap-4">
              <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </button>
              <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                <i className="fab fa-instagram"></i>
              </button>
            </div>
          </div>

          <div className="lg:col-span-3 p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">성함/업체명</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="홍길동 (주식회사 ABC)" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">연락처</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="010-0000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">문의 유형</label>
                <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
                  <option>PLC 프로그래밍</option>
                  <option>판넬 제작 및 설치</option>
                  <option>시스템 통합 컨설팅</option>
                  <option>기타</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">상세 내용</label>
                <textarea className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none h-40" placeholder="상세한 요구사항을 입력해주세요."></textarea>
              </div>
              <button className="w-full blue-gradient text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-blue-200 transition-all">문의 제출하기</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
