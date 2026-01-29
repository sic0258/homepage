
import React, { useState } from 'react';
import { SiteContent, Project, Service } from '../types';

interface Props {
  content: SiteContent;
  onUpdate: (newContent: SiteContent) => void;
}

const AdminDashboard: React.FC<Props> = ({ content, onUpdate }) => {
  const [activeTab, setActiveTab] = useState<'settings' | 'services' | 'projects'>('settings');

  const updateSettings = (key: string, value: string) => {
    onUpdate({
      ...content,
      settings: { ...content.settings, [key]: value }
    });
  };

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: '새로운 프로젝트',
      category: '카테고리',
      description: '설명을 입력하세요.',
      imageUrl: 'https://picsum.photos/800/600',
      date: new Date().toISOString().split('T')[0].substring(0, 7)
    };
    onUpdate({ ...content, projects: [newProject, ...content.projects] });
  };

  const deleteProject = (id: string) => {
    onUpdate({ ...content, projects: content.projects.filter(p => p.id !== id) });
  };

  const updateProject = (id: string, updates: Partial<Project>) => {
    onUpdate({
      ...content,
      projects: content.projects.map(p => p.id === id ? { ...p, ...updates } : p)
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">관리자 대시보드</h1>
          <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold animate-pulse">
            실시간 편집 모드 활성화 중
          </div>
        </div>

        <div className="flex space-x-2 mb-8 bg-white p-1.5 rounded-2xl shadow-sm inline-flex border border-gray-100">
          <button 
            onClick={() => setActiveTab('settings')}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'settings' ? 'blue-gradient text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            일반 설정
          </button>
          <button 
            onClick={() => setActiveTab('services')}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'services' ? 'blue-gradient text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            서비스 관리
          </button>
          <button 
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'projects' ? 'blue-gradient text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            포트폴리오 관리
          </button>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl p-8 border border-gray-100 animate-fadeIn">
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold border-b pb-4 mb-6">사이트 기본 정보</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-2">회사명</label>
                  <input 
                    className="w-full border p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    value={content.settings.companyName}
                    onChange={(e) => updateSettings('companyName', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-2">메인 히어로 제목</label>
                  <input 
                    className="w-full border p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    value={content.settings.heroTitle}
                    onChange={(e) => updateSettings('heroTitle', e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-600 mb-2">히어로 부제목</label>
                  <textarea 
                    className="w-full border p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none h-24"
                    value={content.settings.heroSubtitle}
                    onChange={(e) => updateSettings('heroSubtitle', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-2">대표 이메일</label>
                  <input 
                    className="w-full border p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    value={content.settings.contactEmail}
                    onChange={(e) => updateSettings('contactEmail', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-2">전화번호</label>
                  <input 
                    className="w-full border p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    value={content.settings.phoneNumber}
                    onChange={(e) => updateSettings('phoneNumber', e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div>
              <div className="flex justify-between items-center mb-8 border-b pb-4">
                <h2 className="text-xl font-bold">포트폴리오 리스트</h2>
                <button 
                  onClick={addProject}
                  className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-700 transition-colors"
                >
                  <i className="fas fa-plus mr-2"></i> 프로젝트 추가
                </button>
              </div>
              <div className="space-y-6">
                {content.projects.map(project => (
                  <div key={project.id} className="border p-6 rounded-2xl bg-gray-50 flex flex-col md:flex-row gap-6">
                    <div className="w-32 h-32 shrink-0 overflow-hidden rounded-xl border">
                      <img src={project.imageUrl} className="w-full h-full object-cover" alt="Thumb" />
                    </div>
                    <div className="flex-1 grid md:grid-cols-2 gap-4">
                      <input 
                        className="p-3 border rounded-lg font-bold"
                        value={project.title}
                        onChange={(e) => updateProject(project.id, { title: e.target.value })}
                        placeholder="제목"
                      />
                      <input 
                        className="p-3 border rounded-lg"
                        value={project.category}
                        onChange={(e) => updateProject(project.id, { category: e.target.value })}
                        placeholder="카테고리"
                      />
                      <textarea 
                        className="p-3 border rounded-lg md:col-span-2 h-20"
                        value={project.description}
                        onChange={(e) => updateProject(project.id, { description: e.target.value })}
                        placeholder="설명"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <button 
                        onClick={() => deleteProject(project.id)}
                        className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="space-y-8">
              <h2 className="text-xl font-bold border-b pb-4">서비스 내용 관리</h2>
              {content.services.map((service, index) => (
                <div key={service.id} className="p-6 border rounded-2xl bg-gray-50 flex gap-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl shrink-0">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <div className="flex-1 space-y-4">
                    <input 
                      className="w-full p-3 border rounded-lg font-bold"
                      value={service.title}
                      onChange={(e) => {
                        const newServices = [...content.services];
                        newServices[index].title = e.target.value;
                        onUpdate({ ...content, services: newServices });
                      }}
                    />
                    <textarea 
                      className="w-full p-3 border rounded-lg"
                      value={service.description}
                      onChange={(e) => {
                        const newServices = [...content.services];
                        newServices[index].description = e.target.value;
                        onUpdate({ ...content, services: newServices });
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-center gap-4">
          <i className="fas fa-info-circle text-blue-600 text-xl"></i>
          <p className="text-sm text-blue-800">
            변경사항은 즉시 로컬 저장소에 반영됩니다. 사이트 전체 레이아웃과 텍스트 이미지를 실시간으로 관리할 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
