
import React from 'react';
import { Service } from '../types';

interface Props {
  services: Service[];
}

const Services: React.FC<Props> = ({ services }) => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-blue-600 font-extrabold text-sm tracking-[0.2em] uppercase">What We Do</h2>
          <h3 className="text-4xl font-bold text-gray-900">전문적인 자동화 솔루션</h3>
          <p className="text-gray-500 max-w-2xl mx-auto">에스아이씨는 수많은 현장 경험과 전문 지식을 바탕으로 최적화된 시스템을 구축합니다.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 blue-gradient rounded-2xl flex items-center justify-center text-white text-2xl mb-8 group-hover:scale-110 transition-transform">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
