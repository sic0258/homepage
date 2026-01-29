
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CompanyInfo from './components/CompanyInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import { SiteData } from './types';
import { INITIAL_DATA } from './constants';

const App: React.FC = () => {
  const [data, setData] = useState<SiteData>(INITIAL_DATA);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Simulate persistence with localStorage
  useEffect(() => {
    const saved = localStorage.getItem('sic_site_data');
    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  const handleUpdateData = useCallback((newData: SiteData) => {
    setData(newData);
    localStorage.setItem('sic_site_data', JSON.stringify(newData));
  }, []);

  const toggleAdmin = () => setIsAdminOpen(!isAdminOpen);

  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      <Header 
        companyName={data.company.name} 
        onAdminClick={toggleAdmin} 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      <main className="flex-grow pt-20">
        <section id="home">
          <Hero config={data.config} />
        </section>
        
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-gradient">회사 소개</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/800/600?business" alt="About SIC" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-wrap">
                  {data.config.aboutText}
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="text-blue-600 font-bold text-2xl mb-1">10+</div>
                    <div className="text-sm text-gray-500">년 업력</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="text-blue-600 font-bold text-2xl mb-1">500+</div>
                    <div className="text-sm text-gray-500">프로젝트 완료</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <Services services={data.services} />
        </section>

        <section id="portfolio" className="bg-gray-50">
          <Portfolio portfolio={data.portfolio} />
        </section>

        <section id="contact">
          <Contact company={data.company} />
        </section>
      </main>

      <Footer company={data.company} />

      {/* Admin Dashboard Overlay */}
      {isAdminOpen && (
        <AdminDashboard 
          data={data} 
          onUpdate={handleUpdateData} 
          onClose={toggleAdmin} 
        />
      )}

      {/* Admin Toggle Floating Button */}
      <button 
        onClick={toggleAdmin}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-40 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0m-9.75 0h9.75" />
        </svg>
        <span className="absolute right-16 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">관리자 도구</span>
      </button>
    </div>
  );
};

export default App;
