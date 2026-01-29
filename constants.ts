
import { SiteContent } from './types';

export const INITIAL_CONTENT: SiteContent = {
  settings: {
    companyName: "(주)에스아이씨 (SIC Co., Ltd.)",
    heroTitle: "미래를 선도하는 스마트 공장 자동화의 파트너",
    heroSubtitle: "PLC/HMI 프로그래밍부터 제어 판넬 제작, 시운전까지 완벽한 통합 솔루션을 제공합니다.",
    primaryColor: "blue",
    contactEmail: "sic0258@naver.com",
    phoneNumber: "010-3317-0258",
    address: "경기도 안양시 동안구 엘에스로116번길 91(금정역3차 SKV1 센터 709호)",
    representative: "강 상 일"
  },
  services: [
    {
      id: "1",
      icon: "fa-microchip",
      title: "PLC/HMI 프로그래밍",
      description: "LS, Mitsubishi, Siemens 등 다양한 제조사의 PLC 및 HMI 작화 로직 설계 및 최적화 시스템 구축"
    },
    {
      id: "2",
      icon: "fa-cogs",
      title: "제어 판넬 제작 및 설치",
      description: "고품질 부품을 사용한 자동제어 판넬 설계, 제작 및 현장 설치 전문 서비스 제공"
    },
    {
      id: "3",
      icon: "fa-chart-line",
      title: "시스템 통합(SI) 컨설팅",
      description: "공정 분석을 통한 효율적인 생산 라인 구축 및 공장 자동화 전문 기술 컨설팅"
    }
  ],
  projects: [
    {
      id: "p1",
      title: "반도체 라인 약액 공급 장치(CDS) 제어 시스템",
      category: "PLC/HMI",
      description: "고정밀 유량 제어 및 모니터링 시스템 구축으로 생산 수율 향상",
      imageUrl: "https://picsum.photos/seed/cds/800/600",
      date: "2023-12"
    },
    {
      id: "p2",
      title: "식음료 포장 공정 자동화 라인",
      category: "System Integration",
      description: "서보 모터 제어를 통한 고속 패키징 시스템 및 HMI 원격 감시 체계 구축",
      imageUrl: "https://picsum.photos/seed/food/800/600",
      date: "2024-02"
    }
  ]
};
