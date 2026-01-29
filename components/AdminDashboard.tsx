
import React, { useState } from 'react';
import { SiteData, PortfolioItem, ServiceItem } from '../types';

interface AdminDashboardProps {
  data: SiteData;
  onUpdate: (data: SiteData) => void;
  onClose: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ data, onUpdate, onClose }) => {
  const [activeTab, setActiveTab] = useState<'config' | 'company' | 'services' | 'portfolio'>('config');
  const [localData, setLocalData] = useState<SiteData>(data);

  const handleSave = () => {
    onUpdate(localData);
    onClose();
  };

  const updateConfig = (key: keyof typeof localData.config, value: string) => {
    setLocalData({
      ...localData,
      config: { ...localData.config, [key]: value }
    });
  };

  const updateCompany = (key: keyof typeof localData.company, value: string) => {
    setLocalData({
      ...localData,
      company: { ...localData.company, [key]: value }
    });
  };

  const addPortfolio = () => {
    const newItem: PortfolioItem = {
      id: Date.now().toString(),
      title: "새 프로젝트",
      period: "2024.01 ~ 2024.12",
      client: "고객사",
      description: "프로젝트 설명을 입력하세요.",
      category: "일반",
      imageUrl: "https://picsum.photos/800/600?random=" + Math.random()
    };
    setLocalData({ ...localData, portfolio: [newItem, ...localData.portfolio] });
  };

  const removePortfolio = (id: string) => {
    setLocalData({ ...localData, portfolio: localData.portfolio.filter(p => p.id !== id) });
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 bg-gray-900 text-white flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0m-9.75 0h9.75" />
              </svg>
            </div>
            <h2 className="text-xl font-bold tracking-tight">SIC 관리자 대시보드</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100 bg-gray-50">
          {[
            { id: 'config', label: '디자인 및 문구' },
            { id: 'company', label: '회사 정보' },
            { id: 'services', label: '서비스 관리' },
            { id: 'portfolio', label: '포트폴리오' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-8 py-4 text-sm font-bold transition-all ${
                activeTab === tab.id 
                ? 'bg-white text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-grow overflow-y-auto p-8 bg-white">
          {activeTab === 'config' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">프라이머리 컬러</label>
                  <input 
                    type="color" 
                    value={localData.config.primaryColor} 
                    onChange={e => updateConfig('primaryColor', e.target.value)}
                    className="w-full h-12 p-1 rounded-xl cursor-pointer" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">메인 타이틀</label>
                  <input 
                    type="text" 
                    value={localData.config.heroTitle} 
                    onChange={e => updateConfig('heroTitle', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">메인 서브타이틀</label>
                <textarea 
                  value={localData.config.heroSubTitle} 
                  onChange={e => updateConfig('heroSubTitle', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none h-24"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">회사 소개 텍스트</label>
                <textarea 
                  value={localData.config.aboutText} 
                  onChange={e => updateConfig('aboutText', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none h-48"
                />
              </div>
            </div>
          )}

          {activeTab === 'company' && (
            <div className="grid grid-cols-2 gap-6 animate-fade-in">
              {Object.keys(localData.company).map(key => (
                <div key={key}>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">{key}</label>
                  <input 
                    type="text" 
                    value={(localData.company as any)[key]} 
                    onChange={e => updateCompany(key as any, e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" 
                  />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'portfolio' && (
            <div className="space-y-6 animate-fade-in">
              <button 
                onClick={addPortfolio}
                className="w-full py-4 border-2 border-dashed border-gray-200 rounded-2xl text-gray-400 font-bold hover:border-blue-500 hover:text-blue-500 transition-all flex items-center justify-center space-x-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <span>새 포트폴리오 추가</span>
              </button>
              
              <div className="space-y-4">
                {localData.portfolio.map((item, idx) => (
                  <div key={item.id} className="p-6 border border-gray-100 rounded-2xl bg-gray-50 flex items-start space-x-6">
                    <img src={item.imageUrl} className="w-24 h-24 rounded-xl object-cover shadow-sm" alt="" />
                    <div className="flex-grow grid grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        value={item.title} 
                        onChange={e => {
                          const newList = [...localData.portfolio];
                          newList[idx].title = e.target.value;
                          setLocalData({ ...localData, portfolio: newList });
                        }}
                        className="px-3 py-2 rounded-lg border border-gray-200 text-sm font-bold"
                        placeholder="제목"
                      />
                      <input 
                        type="text" 
                        value={item.client} 
                        onChange={e => {
                          const newList = [...localData.portfolio];
                          newList[idx].client = e.target.value;
                          setLocalData({ ...localData, portfolio: newList });
                        }}
                        className="px-3 py-2 rounded-lg border border-gray-200 text-sm"
                        placeholder="고객사"
                      />
                      <input 
                        type="text" 
                        value={item.imageUrl} 
                        onChange={e => {
                          const newList = [...localData.portfolio];
                          newList[idx].imageUrl = e.target.value;
                          setLocalData({ ...localData, portfolio: newList });
                        }}
                        className="px-3 py-2 rounded-lg border border-gray-200 text-xs col-span-2"
                        placeholder="이미지 URL"
                      />
                    </div>
                    <button 
                      onClick={() => removePortfolio(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="space-y-8 animate-fade-in">
              <p className="text-sm text-gray-500 italic">서비스 아이콘 및 상세 정보는 현재 JSON 구조로 관리됩니다.</p>
              {localData.services.map((service, idx) => (
                <div key={service.id} className="p-6 border border-gray-100 rounded-2xl bg-gray-50 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      value={service.title} 
                      onChange={e => {
                        const newList = [...localData.services];
                        newList[idx].title = e.target.value;
                        setLocalData({ ...localData, services: newList });
                      }}
                      className="px-3 py-2 rounded-lg border border-gray-200 text-sm font-bold"
                    />
                    <input 
                      type="text" 
                      value={service.icon} 
                      onChange={e => {
                        const newList = [...localData.services];
                        newList[idx].icon = e.target.value;
                        setLocalData({ ...localData, services: newList });
                      }}
                      className="px-3 py-2 rounded-lg border border-gray-200 text-sm"
                    />
                  </div>
                  <textarea 
                    value={service.description} 
                    onChange={e => {
                      const newList = [...localData.services];
                      newList[idx].description = e.target.value;
                      setLocalData({ ...localData, services: newList });
                    }}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm h-20"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-gray-100 flex justify-end space-x-4 bg-gray-50">
          <button 
            onClick={onClose}
            className="px-6 py-3 rounded-xl font-bold text-gray-600 hover:bg-gray-200 transition-colors"
          >
            취소
          </button>
          <button 
            onClick={handleSave}
            className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
          >
            변경사항 저장하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
