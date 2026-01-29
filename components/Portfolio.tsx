
import React, { useState } from 'react';
import { PortfolioItem } from '../types';

interface PortfolioProps {
  portfolio: PortfolioItem[];
}

const Portfolio: React.FC<PortfolioProps> = ({ portfolio }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Initially show 3 items, show all if expanded
  const visiblePortfolio = isExpanded ? portfolio : portfolio.slice(0, 3);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    // If we are collapsing, scroll back to the top of the portfolio section
    if (isExpanded) {
      document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Portfolio</h2>
            <h3 className="text-4xl font-extrabold text-gray-900">검증된 성공 실적</h3>
          </div>
          <p className="text-gray-500 max-w-md">
            에스아이씨는 국내외 유수 기업들과 함께 수많은 자동화 프로젝트를 완수하며 최고의 기술력을 입증해왔습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ease-in-out">
          {visiblePortfolio.map((item) => (
            <div 
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg uppercase">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-blue-600 font-bold mb-2">{item.period}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <div className="text-sm font-medium text-gray-500 mb-4">{item.client}</div>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {portfolio.length > 3 && (
          <div className="mt-16 text-center">
            <button 
              onClick={toggleExpand}
              className="group px-10 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-black transition-all shadow-lg flex items-center space-x-2 mx-auto"
            >
              <span>{isExpanded ? '간략히 보기' : '더 많은 실적 보기'}</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2.5} 
                stroke="currentColor" 
                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
