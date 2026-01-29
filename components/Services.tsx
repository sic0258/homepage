
import React from 'react';
import { ServiceItem } from '../types';

interface ServicesProps {
  services: ServiceItem[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <div className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Expertise</h2>
          <h3 className="text-4xl font-extrabold text-gray-900">제공하는 전문 서비스</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={service.id} 
              className={`group p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 hover:-translate-y-2 bg-white relative overflow-hidden`}
            >
              {/* Subtle number indicator */}
              <div className="absolute top-4 right-6 text-6xl font-black text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity">
                0{idx + 1}
              </div>

              <div className="text-5xl mb-6">{service.icon}</div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">{service.title}</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-3 mb-8">
                {service.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span className="text-sm text-gray-600">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-50">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">지원 브랜드</div>
                <div className="flex flex-wrap gap-2">
                  {service.brands.map((brand, bIdx) => (
                    <span key={bIdx} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
