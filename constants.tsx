
import React from 'react';
import { SiteData } from './types';

export const INITIAL_DATA: SiteData = {
  company: {
    name: "주식회사 에스아이씨 (SIC Co. , Ltd.)",
    ceo: "강상일",
    establishment: "2014년 05월 01일",
    address: "경기도 안양시 동안구 엘에스로116번길 91, 금정역3차 SK V1 센터 709호",
    phone: "070-8806-0258",
    mobile: "010-3317-0258",
    fax: "070-4384-0258",
    email: "sic0258@naver.com"
  },
  config: {
    primaryColor: "#1e40af",
    secondaryColor: "#3b82f6",
    heroTitle: "미래를 여는 스마트 자동화의 리더",
    heroSubTitle: "제어 판넬 설계,제작부터 PLC/HMI 프로그램 개발,시운전 까지 최상의 솔루션을 제공합니다.",
    aboutText: "저희 에스아이씨는 자동화에 관련된 PLC/HMI 제품을 주력으로 각종 자동화 관련 SYSTEM 설계, PANEL 제작, 시운전 등을 수행하고 있습니다. 고객으로부터 가장 사랑받는 통합 자동화 시스템을 만들어서 21세기 정보화 사회의 주무대인 자동화 솔루션을 제공하는 초일류 전문기업이 되겠습니다."
  },
  services: [
    {
      id: "s1",
      title: "PLC 프로그램 개발",
      description: "산업 전반의 제어 및 통신 시스템 개발",
      icon: "⚡",
      details: ["시스템 제어 로직 설계", "산업용 통신 네트워크 구축", "대형 시스템 통합"],
      brands: ["Allen Bradley", "Siemens", "Mitsubishi", "LS"]
    },
    {
      id: "s2",
      title: "HMI/SCADA 솔루션",
      description: "직관적인 모니터링 및 인터페이스 구축",
      icon: "🖥️",
      details: ["실시간 데이터 시각화", "생산 관리 시스템 연동", "모바일 모니터링 구현"],
      brands: ["Factory Talk View SE", "WinCC", "GOT", "Cimon", "Intouch"]
    },
    {
      id: "s3",
      title: "제어판넬 설계 및 제작",
      description: "규격화된 고품질 제어 시스템 제작",
      icon: "⚙️",
      details: ["Auto CAD/EPLAN 설계", "MCC/LOP 판넬 제작", "현장 시운전 및 유지보수"],
      brands: ["Rittal", "Schneider", "LS Electric"]
    }
  ],
  portfolio: [
    {
      id: "p1",
      title: "북미 AGV 운반 시스템 개발",
      period: "2019.11 ~ 2020.01",
      client: "현대자동차 알라바마 공장",
      description: "컨베이어 라인 무인 운반 시스템 제어 프로그램 개발 및 납품",
      category: "물류자동화",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "p2",
      title: "화력발전소 CHB 이설공사",
      period: "2013.09 ~ 2013.11",
      client: "한국남동발전",
      description: "석탄 이송설비 제어 시스템 PLC/HMI Conversion",
      category: "에너지",
      imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "p3",
      title: "태양광 발전 모니터링 시스템",
      period: "2018.11 ~ 2018.12",
      client: "신인천화력 발전소",
      description: "태양광 발전 효율 모니터링 및 통합 관리 시스템 구축",
      category: "신재생에너지",
      imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "p4",
      title: "상하수도 통합 제어 시스템",
      period: "2021.05 ~ 2021.08",
      client: "안양시 상하수도사업소",
      description: "수처리 공정 자동화 및 원격 감시 제어 시스템 구축",
      category: "수처리",
      imageUrl: "https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "p5",
      title: "물류센터 컨베이어 제어 솔루션",
      period: "2022.01 ~ 2022.04",
      client: "CJ 대한통운",
      description: "대규모 허브 터미널 화물 분류 시스템 최적화 프로그램 개발",
      category: "물류자동화",
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "p6",
      title: "반도체 클린룸 공조 제어 판넬",
      period: "2023.03 ~ 2023.06",
      client: "SK 하이닉스 협력사",
      description: "정밀 환경 제어를 위한 고신뢰성 제어 판넬 설계 및 제작",
      category: "반도체",
      imageUrl: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800"
    }
  ]
};
