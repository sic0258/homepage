
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AdminDashboard from './components/AdminDashboard';
import { INITIAL_CONTENT } from './constants';
import { SiteContent } from './types';

const App: React.FC = () => {
  const [content, setContent] = useState<SiteContent>(() => {
    const saved = localStorage.getItem('sic_content');
    return saved ? JSON.parse(saved) : INITIAL_CONTENT;
  });
  
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    localStorage.setItem('sic_content', JSON.stringify(content));
  }, [content]);

  const handleUpdateContent = (newContent: SiteContent) => {
    setContent(newContent);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Admin Toggle (Fixed Button) */}
      <button 
        onClick={() => setIsAdmin(!isAdmin)}
        className="fixed bottom-6 right-6 z-50 px-4 py-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-all flex items-center gap-2"
      >
        <i className={`fas ${isAdmin ? 'fa-eye' : 'fa-user-cog'}`}></i>
        {isAdmin ? '사이트 보기' : '관리자 모드'}
      </button>

      {isAdmin ? (
        <AdminDashboard content={content} onUpdate={handleUpdateContent} />
      ) : (
        <>
          <Navbar settings={content.settings} />
          <main>
            <Hero settings={content.settings} />
            <Services services={content.services} />
            <Projects projects={content.projects} />
            <Contact settings={content.settings} />
          </main>
          <footer className="bg-gray-900 text-white py-12 px-4">
            <div className="max-container mx-auto max-w-7xl grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">{content.settings.companyName}</h2>
                <p className="text-gray-400 max-w-md">
                  고객의 가치를 최우선으로 생각하는 자동화 시스템 전문 기업입니다. 
                  차별화된 기술력으로 스마트 팩토리의 비전을 실현합니다.
                </p>
              </div>
              <div className="text-sm text-gray-400 space-y-1">
                <p>주소: {content.settings.address}</p>
                <p>대표: {content.settings.representative}</p>
                <p>이메일: {content.settings.contactEmail}</p>
                <p>Copyright © 2024 (주)에스아이씨. All Rights Reserved.</p>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;
