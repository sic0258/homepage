
import React from 'react';
import { SiteSettings } from '../types';

interface Props {
  settings: SiteSettings;
}

const Hero: React.FC<Props> = ({ settings }) => {
  return (
    <section id="home" className="relative h-[85vh] flex items-center overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 rounded-l-[100px] -z-10 transform translate-x-20"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold tracking-wider">
            SYSTEM INTEGRATION & CONSULTING
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.15]">
            {settings.heroTitle}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
            {settings.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="blue-gradient text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-200 text-center hover:scale-105 transition-transform">
              우리의 기술력 보기
            </a>
            <a href="#contact" className="bg-white border-2 border-gray-200 text-gray-800 px-8 py-4 rounded-xl font-bold text-center hover:border-blue-600 transition-colors">
              상담 예약하기
            </a>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
             <img 
               src="https://picsum.photos/seed/factory/1000/800" 
               alt="Factory Automation" 
               className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
             />
          </div>
          {/* Floating stats badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-4">
            <div className="w-12 h-12 blue-gradient rounded-lg flex items-center justify-center text-white">
              <i className="fas fa-check-circle text-xl"></i>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold">완료된 프로젝트</p>
              <p className="text-2xl font-bold text-gray-900">100+ 건</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
