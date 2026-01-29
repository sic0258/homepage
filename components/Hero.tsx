
import React from 'react';
import { SiteConfig } from '../types';

interface HeroProps {
  config: SiteConfig;
}

const Hero: React.FC<HeroProps> = ({ config }) => {
  return (
    <div className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background with abstract shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-1/2 h-1/2 bg-blue-50 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-1/3 h-1/3 bg-blue-100 rounded-full blur-[120px] opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-blue-100 shadow-sm animate-bounce">
            <span>Professional System Integration</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-[1.1]">
            <span className="text-blue-gradient">{config.heroTitle}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-light">
            {config.heroSubTitle}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-blue-600 text-white rounded-xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200 hover:-translate-y-1"
            >
              솔루션 보기
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl text-lg font-bold hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-1"
            >
              상담 문의
            </button>
          </div>
        </div>
      </div>

      {/* Industrial aesthetic element */}
      <div className="hidden lg:block absolute right-12 bottom-12 w-1/3 animate-pulse pointer-events-none">
        <div className="p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="h-2 w-32 bg-gray-200 rounded"></div>
          </div>
          <div className="space-y-2">
            <div className="h-2 w-full bg-blue-100 rounded"></div>
            <div className="h-2 w-4/5 bg-blue-100 rounded"></div>
            <div className="h-2 w-2/3 bg-blue-100 rounded"></div>
          </div>
          <div className="pt-4 flex justify-between">
            <div className="text-xs font-bold text-blue-600 uppercase tracking-widest">System Online</div>
            <div className="text-xs font-bold text-gray-400">Ver 2.5.0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
