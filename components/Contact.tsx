
import React, { useState } from 'react';
import { CompanyInfo } from '../types';

interface ContactProps {
  company: CompanyInfo;
}

const Contact: React.FC<ContactProps> = ({ company }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`[(주)에스아이씨] 홈페이지 상담 문의 - ${formData.name}`);
    const body = encodeURIComponent(
      `문의자/회사명: ${formData.name}\n` +
      `연락처: ${formData.contact}\n\n` +
      `문의내용:\n${formData.message}`
    );
    
    // Open default mail client with pre-filled details
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Location</h2>
          <h3 className="text-4xl font-extrabold text-gray-900">찾아오시는 길</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="h-[450px] bg-gray-100 rounded-3xl overflow-hidden shadow-inner relative border border-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
              alt="Location Map" 
              className="w-full h-full object-cover grayscale opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white max-w-xs text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">SIC 본사</h4>
                <p className="text-sm text-gray-600">{company.address}</p>
                <a 
                  href={`https://map.kakao.com/?q=${encodeURIComponent(company.address)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 inline-block w-full py-2 bg-blue-600 text-white rounded-lg font-bold text-sm shadow-md"
                >
                  지도 크게보기
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-blue-gradient p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden">
               {/* Accent circles */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
              
              <h4 className="text-2xl font-bold mb-8">고객 지원 센터</h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm opacity-70 mb-1">대표 전화</div>
                    <div className="text-xl font-bold">{company.phone}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm opacity-70 mb-1">이메일 문의</div>
                    <div className="text-xl font-bold">{company.email}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm opacity-70 mb-1">운영 시간</div>
                    <div className="text-xl font-bold">평일 09:00 - 18:00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 border border-gray-100 bg-gray-50 rounded-3xl">
              <h4 className="text-xl font-bold mb-6 text-gray-900">상담 신청</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="성함 / 회사명" 
                  required
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                />
                <input 
                  type="text" 
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="연락처 또는 이메일" 
                  required
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" 
                />
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="문의 내용을 입력해 주세요." 
                  rows={4} 
                  required
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all shadow-lg active:scale-95"
                >
                  상담 접수하기 (이메일 발송)
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
