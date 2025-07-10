import React from 'react';
import Layout from 'components/Layout';

// 실제 이력서의 '프로젝트 경험' 항목을 1:1로 구조화한 상세 경력기술서 데이터 (아모레퍼시픽 전체)
const PROFESSIONAL_EXPERIENCES = [
  {
    company: '아모레퍼시픽 / AMORE PACIFIC',
    position: 'Senior Frontend Engineer(Lead)',
    period: '2024.01 - NOW',
    projects: [
      {
        name: '주문 페이지 2차',
        duration: '2025.01 - 2025.04',
        description: '1차 목표 달성 이후 회원 케이스에서도 동일한 경험을 주기 위해 후속 개발이 진행되었습니다.',
        stack: ['typescript', 'react19', 'nextjs15', 'tailwind', 'storybook', 'docker'],
        roles: [
          '프로젝트 개발 총괄',
          'VOC 대응 등 모니터링 계획 수립',
          '결제 프로세스 및 에러 케이스 발생 시 대응 방안 수립',
        ],
        achievements: [
          '로그 수집 및 분석을 통해 버그 발생시 문제가 되는 부분을 정확히 파악할수 있게 되었습니다.',
          '데이터독을 활용해 웹 바이탈을 측정하고 메모리 누수 등 문제를 발견하고 해결할수 있는 기초 마련.',
          '주문과 관련된 모든 페이지 내재화 완료.',
        ],
      },
      {
        name: '2024 겨울 아모레 세일 페스타',
        duration: '2024.12',
        description: '라이브방송과 연계된 쿠폰 feature 를 추가. 라이브방송 영상에서 상품과 관련된 쿠폰을 발급하고 쿠폰을 사용할수 있는 기능을 추가, 데이터독을 활용해 VOC 유입 전 미리 대응할수 있도록 시스템 구성.',
        stack: ['typescript', 'react17', 'nextjs10', 'datadog'],
        roles: [
          '라이브방송 영상에서 상품고 관련된 쿠폰을 발급하고 쿠폰을 사용할수 있는 기능 추가',
          '데이터독을 활용해 VOC 유입 전 미리 대응할수 있도록 시스템 구성',
        ],
        achievements: [
          '라이브방송에서 별도 쿠폰함으로 이동할 필요 없이 쿠폰을 발급받을수 있어 쿠폰 발급 프로세스가 간소화됨.',
          '유저 플로우 최적화로 보다 정확한 구매 전환율 측정 가능',
        ],
      },
      {
        name: '주문 페이지 1차',
        duration: '2024.10 - 2024.11',
        description: '외주사에서 관리된 주문/완료 페이지 내재화. 기존 nextjs10 환경이 아닌 사내 devops 환경에서 운영되는 EKS 로 이관, next 최신 버전(14)로 모던한 프로젝트 구성. 비회원 구매 케이스 우선 1차 목표.',
        stack: ['typescript', 'react18', 'nextjs14', 'tailwind', 'storybook', 'docker'],
        roles: [
          '프로젝트 개발 총괄',
          '새로운 주문 프론트앤드 프로젝트 아키텍처 설계',
          'tailwind 기반 디자인시스템 설계',
        ],
        achievements: [
          'DevOps 환경에서 운영되는 EKS 로 이관 및 배포 환경 구성',
          'nextjs14 기반 및 모던한 프론트엔드 프로젝트 구성',
        ],
      },
      {
        name: 'Web/Native 인터페이스 리팩토링',
        duration: '2024.08 - 2024.09',
        description: '아모레몰 Web과 Native App(iOS, Android) 간 Webview 인터페이스를 선언적으로 재설계. 외주사에도 JS 라이브러리로 제공.',
        stack: ['javascript', 'typescript', 'react17', 'nextjs10'],
        roles: [
          'Web-Native 인터페이스 라이브러리 설계',
          '라이브러리 React Hook, pure javascript 각각 작성',
        ],
        achievements: [
          '매주 발생하는 동일한 원인의 다른 버그 발생률 Zero 달성',
          '동일한 기능의 라이브러리를 외주사에 제공하여 동일한 기능 구현 시간 단축',
        ],
      },
      {
        name: '데이터독(DataDog) 도입',
        duration: '2024.06 - 2024.07',
        description: '로그 수집과 분석, 장애 대응 등 전반적인 모니터링을 위해 데이터독 도입. 고객 VOC 유입 전 미리 대응할수 있도록 시스템 구성.',
        stack: ['DataDog'],
        roles: [],
        achievements: [
          '웹 바이탈 데이터 수집 및 분석 환경 구성해 성능적으로 취약한 부분에 대응할수 있도록 기술적 기반 마련.',
          '클라이언트 에러 발생 시 웹훅을 통해 알림 추가해 대응 시간 단축.',
        ],
      },
      {
        name: '2024 여름 아모레 세일 페스타',
        duration: '2024.04 - 2024.05',
        description: '아모레 세일 페스타용 신규 feature "럭키드로우"와 "멤버십플러스 이용권" 개발. 신규 유저 유입 및 멤버십 체험 기능 추가.',
        stack: ['Nextj10', 'React17', 'Redux'],
        roles: [
          '상품상세 페이지 업데이트 및 럭키드로우 관련 페이지 추가',
          '멤버십플러스 이용권 조회/사용/갱신/취소 등 관리 페이지 추가',
        ],
        achievements: [
          '럭키드로우를 통해 운영에서 새로운 방식의 BM 활용 가능',
          '멤버십플러스를 이용권 형태로 추가해 다양한 제휴사 혜택 추가',
          '선물하기 기능을 통해 신규 유저 확보 루트 추가',
        ],
      },
      {
        name: '디지털 분석 도구 고도화',
        duration: '2024.03 - 2024.04',
        description: 'GA3 지원 종료로 GA4 마이그레이션 및 분석 도구 통합 모듈화. 데이터 분석 및 통계 효율화.',
        stack: ['Nextj10', 'React17', 'GA3', 'GA4', 'GTM', 'aiaqua'],
        roles: [
          '페이스북/카카오/네이버 등 추적 도구 GTM 주입 가이드',
          'GA, GTM 관련 React 컴포넌트 및 훅 작성',
        ],
        achievements: [
          '분석 도구 통합 및 관리 효율화',
          'GA4 기반 정확한 데이터 분석 및 매출 분석 용이',
        ],
      },
      {
        name: '아모레몰 선물하기',
        duration: '2024.01 - 2024.02',
        description: '단일 상품 선물하기 feature 추가. 구매자는 수신자 정보 입력, 수신자는 별도 페이지에서 상품 수령.',
        stack: ['Nextjs10', 'React17', 'Typescript', 'Redux'],
        roles: [
          '선물하기 모듈 설계',
          '모니터링 방안 수립',
        ],
        achievements: [
          '선물받기를 통한 신규 유저 확보 경로 추가',
          '선물 수요 시즌에 기능 활용 기대',
          '모니터링 방안 수립으로 문제 발생 시 대응 시간 단축',
        ],
      },
    ],
  },
  {
    company: '딜리헙(Dillyhub)',
    position: 'Fullstack Engineer',
    period: '2021.01 - 2023.06',
    projects: [
      {
        name: 'Google Cloud Platform 마이그레이션 from AWS',
        duration: '2025.01 ~ 2025.02',
        description: '퇴사 이후 진행된 프로젝트로 이전 AWS k8s 환경의 비용 문제로 인해 GCP docker run (컨테이너) 환경으로 마이그레이션.',
        stack: ['k8s', 'aws', 'gcp'],
        roles: [
          '기존 k8s 환경 분석',
          '각 프로젝트별 docker run 필요 파일 및 환경변수 생성',
          'AWS k8s 에서 GCP docker run 으로 수동 마이그레이션 진행',
        ],
        achievements: [
          '비용 절감으로 인해 매달 비용문제 해결',
          '소수 인원으로 쉽게 관리할수 있도록 마이그레이션 진행',
        ],
      },
      {
        name: '프론트앤드 리팩토링',
        duration: '2023.03 ~ 2023.06',
        description: '1차 개발을 마친 상태에서 프론트앤드 리팩토링. Typescript + Vite, Vitest, Storybook 등 최신 기술 도입 및 테스트 코드 작성, 전체 코드 TS로 포팅.',
        stack: ['Typescript', 'Vite', 'Vitest', 'Tailwind', 'SCSS', 'Storybook'],
        roles: [
          '전반적인 프로젝트 구조 설계',
          '배포 및 브랜치 전략 수립',
          '기존 javascript 코드 typescript 로 포팅',
        ],
        achievements: [
          '빌드 속도 약 2~3배 이상 감소',
          '테스트 코드 작성으로 안정성 향상',
          '타입스크립트 적용으로 코드 안정성 향상',
        ],
      },
      {
        name: '텍스트 에디터 및 뷰어 개발',
        duration: '2022.11 ~ 2023.02',
        description: 'Promise Mirror 를 활용해 100% 확장 가능한 텍스트 에디터 개발 및 스튜디오/스토어 프로젝트 적용, 뷰어에 댓글 기능 추가.',
        stack: ['React', 'Webpack', 'Javascript', 'tailwind', 'SCSS', 'Promise Mirror'],
        roles: [
          'Promise Mirror 프레임워크 분석 및 구조화',
          '텍스트 에디터 및 뷰어 개발',
          '뷰어에 댓글 기능 추가',
        ],
        achievements: [
          '웹소설도 게재할수 있도록 서비스 확장',
          'Promise Mirror 를 통해 완성형이 아닌 조합형 에디터 구현해 추후 기능 확장이 용이하도록 함',
        ],
      },
      {
        name: '갤러리 개발',
        duration: '2022.06 ~ 2022.10',
        description: '일러스트 등 다양한 이미지를 게시하고 유저간 소통할 수 있는 갤러리 기능 개발. 이미지 업로드, 편집, Feed, 댓글, 도네이션(Meow) 기능 포함.',
        stack: ['React', 'Webpack', 'Javascript', 'tailwind', 'SCSS', 'Nodejs', 'Express'],
        roles: [
          '이미지 업로드 및 간단한 편집기능 개발',
          '이미지 뷰를 위한 Feed 컴포넌트 개발',
          '댓글 기능 추가',
          '도네이션(Meow) 기능 추가',
        ],
        achievements: [
          '일러스트 게재 기능 추가',
          '도네이션(Meow) 을 통해 새로운 BM 도입',
        ],
      },
      {
        name: 'iOS App 출시',
        duration: '2022.04 ~ 2022.05',
        description: '안드로이드 앱 출시 경험을 바탕으로 iOS 앱도 동일한 아키텍처로 개발. 애플로그인 서드파티 로그인 지원 추가.',
        stack: ['React', 'Webpack', 'Javascript', 'tailwind', 'SCSS', 'JS Interface'],
        roles: [
          'Apple Login 구현',
          '기존 로직에서 iOS 관련 스펙이 동작하도록 구조 변경 및 구현',
        ],
        achievements: [
          'iOS 앱 출시 및 애플로그인 지원',
        ],
      },
      {
        name: 'Product 기능 추가',
        duration: '2022.01 ~ 2022.03',
        description: '디지털 컨텐츠(폰트, 이미지 등) 판매 기능 구현. Quill 에디터 도입, 프로덕트 기능에 필요한 컴포넌트/페이지/훅 구현.',
        stack: ['React', 'Webpack', 'Javascript', 'tailwind', 'SCSS', 'Quill Editor', 'Nodejs', 'Express'],
        roles: [
          'Quill 에디터 React 컴포넌트 작성',
          '프로덕트 기능에 필요한 추가 컴포넌트, 페이지, 훅 구현',
        ],
        achievements: [
          '완성형 에디터를 통해 유저가 풍부한 컨텐츠 게재 가능',
          '디지털 상품을 게시하고 판매할수 있는 새로운 BM 추가',
        ],
      },
      {
        name: 'Android App 출시',
        duration: '2021.11 ~ 2021.12',
        description: 'Base로 설계된 안드로이드 앱에 웹뷰 형태로 웹앱 렌더링, 네이티브 앱과 연동 위한 JS Interface 설계/적용.',
        stack: ['JS Interface', 'React', 'Webpack', 'Javascript', 'tailwind', 'SCSS'],
        roles: [
          'JS interface 정의',
          'Android 앱 동작성 테스트 및 앱 전용 페이지 구현',
        ],
        achievements: [
          'Android 앱 출시 및 JS 인터페이스 연동',
        ],
      },
      {
        name: '스토어/스튜디오 추가 업데이트',
        duration: '2021.06 ~ 2021.10',
        description: '스토어, 스튜디오 개발 이후 기능 추가 및 외부 라이브러리 설치, A/B 테스트 등 마케팅/분석 기능 강화.',
        stack: ['React', 'Webpack', 'Javascript', 'tailwind', 'SCSS', 'Nodejs', 'Express'],
        roles: [
          '애널리틱스 툴 적용 : GTM, Mixpanel',
          '스토어 홈/스튜디오 랜딩 페이지 개발',
          'Hackle 사용한 A/B 테스트 진행',
        ],
        achievements: [
          '계획된 마케팅 진행',
          '유저 행동 분석 및 A/B테스트 진행',
        ],
      },
      {
        name: '스토어 웹 개발',
        duration: '2021.03 ~ 2021.05',
        description: '창작자가 만든 창작물을 공개하기 위한 웹앱 개발. 웹툰 뷰어, 디자인 시스템, 커스터마이제이션 뷰어, 알림, 소셜 로그인 등 구현.',
        stack: ['React', 'Webpack', 'Javascript', 'tailwind', 'SCSS', 'Nodejs', 'Express'],
        roles: [
          '웹툰 뷰어 개발',
          '디자인 시스템 개발',
          '커스터마이제이션 뷰어 개발',
          '알림 등 유저와의 상호작용 시스템 개발',
          '서드파티(카카오, 네이버, 페이스북) 로그인 연동',
        ],
        achievements: [
          '웹툰 뷰어 및 디자인 시스템 구축',
          '소셜 로그인 등 다양한 기능 구현',
        ],
      },
      {
        name: '스튜디오 웹 개발',
        duration: '2021.01 ~ 2021.02',
        description: '창작자를 위한 웹앱 개발. 웹툰 생성 위자드, 에디터, 폼, 커스터마이제이션, 디자인 시스템, 소셜 로그인 등 구현.',
        stack: ['React', 'Webpack', 'Javascript', 'tailwind', 'SCSS', 'React Hook Form', 'Nodejs', 'Express'],
        roles: [
          '웹툰 생성 위자드 개발',
          '웹툰 에디터 개발',
          'React Hook Form 적용',
          '커스터마이제이션 에디터 개발',
          '디자인 시스템 개발',
          '서드파티(카카오, 네이버, 페이스북) 로그인 연동',
        ],
        achievements: [
          '웹툰 생성/에디터/디자인 시스템 등 창작자 기능 강화',
        ],
      },
    ],
  },
  {
    company: 'LGU+',
    position: 'Frontend Engineer(Lead)',
    period: '2020.09 - 2020.12',
    projects: [
      {
        name: 'Home-in 프론트앤드 프로젝트',
        duration: '2020.09 ~ 2020.12',
        description: '프로젝트 도중 합류, 퍼블리싱/프론트 개발 유기화, VueJS 기반 프론트 개발 교육 및 진행상화, 웹뷰 기반 앱 개발환경 구축.',
        stack: ['VueJS', 'JS interface', 'Javascript', 'Tailwind'],
        roles: [
          '프론트앤드 개발 총괄',
          '퍼블리셔 대상 VueJS 컴포넌트 구현 교육 진행',
          'iOS, Android 진행상황 체크 및 웹 인터페이스 개발 테스트 진행',
          'WEB(PC, Mobile) : 1개의 로직(index)에서 다른 UI(PC, Mobile) 을 렌더링할수 있는 구조로 개선',
          '웹뷰 기반 iOS, Android 개발환경 구축',
        ],
        achievements: [],
      },
    ],
  },
  {
    company: '주식회사 카닥',
    position: 'Frontend Engineer',
    period: '2019.01 - 2020.08',
    projects: [
      {
        name: '카닥몰 3차 업데이트',
        duration: '2020.08',
        description: '마이페이지, 장바구니, 체크아웃 등 워드프레스 의존 페이지를 React로 재구현, DB 직접 연동 및 Express 엔드포인트 작성.',
        stack: ['React', 'Express', 'SCSS', 'Javascript', 'Nodejs'],
        roles: [
          '장바구니, 결제하기 등 주요 페이지 로드 속도 대폭 감소',
        ],
        achievements: [],
      },
      {
        name: '카닥 커뮤니티 탭 구현',
        duration: '2020.06 ~ 2020.07',
        description: '카닥 앱에 "커뮤니티" 탭 추가, 유저 정보/마이카 활용, 서버/웹/앱 데이터 구조 및 인터페이스 설계, 팀원 협업 구조화.',
        stack: ['React', 'SCSS'],
        roles: [
          '프로젝트 리딩',
          '각 환경(서버, 웹, 앱) 데이터 구조와 인터페이스 정의',
        ],
        achievements: [
          '카닥 앱에 커뮤니티 탭을 통해 데일리 접속자 증가',
          '보유/관심차종 기반 게시물 설계로 유저 관심도 및 사업 데이터 활용도 증가',
        ],
      },
      {
        name: 'cardoc react generator 업데이트',
        duration: '2020.05',
        description: 'cg 커맨드 개선, 페이지/엘리먼트 자동 생성, 프로젝트 메인 언어 자동 감지, 패키지 자동 첨부, 작업자 피로도 감소.',
        stack: ['NodeJS', 'Yarn Workspace'],
        roles: [
          'ts, js 옵션 자동 감지',
          'ReadME/프론트 개발자 교육',
        ],
        achievements: [],
      },
      {
        name: '마이카 프로필 업데이트',
        duration: '2020.05',
        description: '마이카 프로필 페이지 신규 UI 적용, 레거시 코드 개선, 컨테이너 패턴 적용, DeBounce 등 렌더링 최적화.',
        stack: ['React', 'Context', 'Hooks', 'SCSS'],
        roles: [
          '컨테이너 패턴 적용',
          'callback 패턴/DeBounce 적용',
        ],
        achievements: [],
      },
      {
        name: '카닥몰 2차 업데이트',
        duration: '2020.04',
        description: '카닥몰 상품 검색/목록/상세/후기/문의 등 장바구니 이전 단계까지 흐름 구현, 컨테이너 패턴 적용.',
        stack: ['React', 'Typescript', 'Context', 'Hooks', 'SCSS'],
        roles: [
          '상품/전시 관련 페이지 개발',
          '상태 및 코드 최적화',
          '컨테이너 패턴 적용',
        ],
        achievements: [],
      },
      {
        name: '카닥몰 첫 랜딩 페이지 프로젝트',
        duration: '2020.03',
        description: '통합결제 프로젝트와 병행, 워드프레스 view 미사용, 프론트엔드 별도 작성, 빠른 로딩/UX 도입.',
        stack: ['React', 'Typescript', 'Context', 'Hooks', 'SCSS'],
        roles: [
          '동적 컴포넌트 구성',
          '컴포넌트 최적화',
          '컨테이너 컴포넌트간 통신규약/내부 교육',
        ],
        achievements: [],
      },
      {
        name: '카닥 통합결제, 신용카드등록 프로젝트',
        duration: '2020.02 - 2020.03',
        description: '결제창 통합, 신용카드 등록 기능 추가, 템플릿 패턴/컴포넌트화, input masking hook 등 적용.',
        stack: ['React', 'Typescript', 'Context', 'Hooks'],
        roles: [
          '프로젝트 개발 리드',
          '컨테이너 패턴/카드번호 input masking hook',
          'Context 활용 리렌더링 컨트롤',
        ],
        achievements: [
          '결제 로비 일원화, 서비스별 결제수단 추가/삭제시 일괄 적용',
          '레거시 코드 활용으로 빠르고 안정성 높은 개발',
        ],
      },
      {
        name: '프론트엔드 모든 프로젝트 모노레포(Monorepo) 전환 및 CI/CD 개선',
        duration: '2019.12 - 2020.01',
        description: 'MSA+모놀리식 방식에서 yarn workspace로 모노레포 전환, 젠킨스→github Action, 도커 전환, 쉘스크립트/cli 툴 제작, 팀 내 교육.',
        stack: ['AWS', 'Github Action', 'Docker', 'Yarn', 'Yarn Workspace'],
        roles: [
          './deploy.sh로 production 배포 시스템화',
          '1개 저장소에 다중 프로젝트 구조',
          'cli 툴로 코드 컨벤션 통일',
          'README 재정리/팀 세미나',
        ],
        achievements: [
          '모노레포로 배포 시간 단축, 저장소 수 대폭 감소',
          '젠킨스→github Action으로 CI/CD 개선',
        ],
      },
      {
        name: '테크샵, 워시, admin 툴 업데이트',
        duration: '2019.11 - 2019.12',
        description: '테크샵(엔진오일), 워시(세차) 서비스 100% 웹뷰, 네이티브 앱과 JS인터페이스 통신, 리액트 패턴 개선.',
        stack: ['React', 'NextJS', 'Typescript', 'React Hooks', 'React Router', 'Redux', 'Context'],
        roles: [
          '불필요한 의존성 해제',
          'Function 컴포넌트 사용 지향',
          '공통 디자인 컴포넌트/엘리먼트 작성',
        ],
        achievements: [],
      },
      {
        name: '카닥 4.0 업데이트',
        duration: '2019.07 - 2019.10',
        description: '웹뷰 디자인 업데이트, 쿠폰함/쇼핑탭/쿠폰 연동, 컨테이너 패턴/커스텀 애니메이션/스토리북 적용.',
        stack: ['React', 'NextJS', 'Typescript', 'React Hooks', 'React Router', 'Context', 'Story Book'],
        roles: [
          '컨테이너 패턴/커스텀 화면전환 애니메이션',
          '공통 행동 Hooks, Function 컴포넌트, 스토리북 활용',
        ],
        achievements: [],
      },
      {
        name: '카닥 앱 마이카 업데이트',
        duration: '2019.03 - 2019.06',
        description: '앱 사용자 차량 등록, 모든 서비스 이용 가능 마이카 기능, Android/iOS WebView 전제 개발, 백오피스 업데이트.',
        stack: ['React', 'React Hooks', 'React Router', 'Context'],
        roles: [
          '웹뷰용 모놀리식 프로젝트 구성',
          '컨테이너 패턴/커스텀 애니메이션/공통 Hooks/Function 컴포넌트',
        ],
        achievements: [],
      },
      {
        name: '카닥 앱 React Native POC',
        duration: '2019.01 - 2019.03',
        description: 'Native+WebView 앱 일부 기능 React Native로 샘플 제작, Adobe XD로 프로토타입, Boiler Plate/화면전환/사진선택 등 구현.',
        stack: ['React Native', 'Expo', 'React', 'Adobe XD'],
        roles: [
          'Adobe XD로 목표/프로토타입 제작',
          'Boiler Plate/기본 레이아웃/견적요청 기능 작성',
        ],
        achievements: [],
      },
    ],
  },
  {
    company: '오픈소스컨설팅',
    position: 'Frontend Engineer',
    period: '2017.07 - 2018.12',
    projects: [
      {
        name: 'Play-ce RoRo Admin 업데이트',
        duration: '2018.09 - 2018.12',
        description: '일반 유저 사이드 작업 후 관리자 대시보드/콘솔 작업.',
        stack: ['React', 'Styled Component', 'React Router', 'Redux', 'Context', 'Code Spliting'],
        roles: [
          'Sketch로 기획/프로토타입',
          '컨테이너 패턴 적용',
          'Google Material Design 가이드 준수',
          '프론트엔드 개발환경 구성 및 기능 구현',
          'Context API 사용',
          'Code Spliting 등 앱 최적화',
          'Jest 기반 테스트 환경 구성',
        ],
        achievements: [],
      },
      {
        name: 'Play-ce RoRo 웹 콘솔 개발',
        duration: '2017.07 - 2018.08',
        description: 'On Premise 서버 환경을 AWS 등 Cloud로 자동 전환하는 웹 콘솔. 서버/클라우드 인증정보 입력→환경 분석→클라우드 자동 마이그레이션. 디자인/관리자 콘솔 작업.',
        stack: ['React', 'Styled Component', 'React Router', 'Mobx', 'Redux', 'AWS', 'Angular4'],
        roles: [
          'Adobe XD로 기획/프로토타입',
          'Photoshop/Illustrator로 샘플 디자인',
          '프론트엔드 개발환경 구성 및 기능 구현',
          'Redux 컴포넌트 기반 구조 개발',
          'Redux 기반 Flux 구조 작성',
          'Code Spliting 등 앱 최적화',
          'Jest 기반 테스트 환경 구성',
          'Anglar4에서 React로 리팩토링',
        ],
        achievements: [],
      },
      {
        name: '공식 제품 소개 페이지 개발',
        duration: '2017.09 - 2017.10',
        description: '사내 개발 제품 소개용 Static 웹사이트. 제품 종류/소개, 한/영 번역, markdown blog로 소식 전달.',
        stack: ['gatsby', 'Styled Component'],
        roles: [
          'Adobe XD로 기획/프로토타입',
          'Photoshop/Illustrator로 샘플 디자인',
          '프론트엔드 개발환경 구성 및 기능 구현',
          'React 컴포넌트 기반 구조 개발',
        ],
        achievements: [],
      },
    ],
  },
  {
    company: '박차컴퍼니',
    position: 'Frontend Engineer',
    period: '2016.06 ~ 2017.05',
    projects: [
      {
        name: '차팡 모바일 앱 개발',
        duration: '2017.02 - 2017.05',
        description: '딜러용 차량 경매 하이브리드 앱(iOS, Android 동시 배포). 경매, 차량 상태/사고/보험/가격정보, 낙찰 후 추가정보/서류처리 등 구현.',
        stack: ['Framework7', 'SCSS', 'Cordova', 'PHP'],
        roles: [
          '프론트엔드 개발환경 구성 및 기능 구현',
          'Framework7 기반 페이지 구조 개발',
          'd3.js 활용 가격변동 그래프 제작',
          '플레이스토어/앱스토어 등록 및 인증서 작업',
          'SCSS 기반 스타일 클래스 작성',
        ],
        achievements: [],
      },
      {
        name: '박차 모바일 앱 업데이트',
        duration: '2016.10 - 2017.01',
        description: 'LPG 중고차 구매 하이브리드 앱(iOS, Android 동시 배포). 차량 상태/사고/수리/보험 등 정보 제공, 계약/탁송 등 프로세스 구현.',
        stack: ['Framework7', 'SCSS', 'Cordova', 'PHP'],
        roles: [
          '프론트엔드 개발환경 구성 및 기능 구현',
          'Framework7 기반 페이지 구조 개발',
          'SCSS 기반 스타일 클래스 작성',
        ],
        achievements: [],
      },
      {
        name: '박차 비즈 웹사이트 개발',
        duration: '2016.06 - 2016.09',
        description: '중고차 양수도 전용 웹사이트. carvana 참고, 좌측 필터/차종/색상/연식/주행거리/제조사 등 부드러운 목록 전환, 상세 페이지 UX 개선.',
        stack: ['AngularJS', 'SCSS', 'PHP'],
        roles: [
          '프론트엔드 개발환경 구성 및 기능 구현',
          'AngularJS 기반 컨트롤러 구조 개발',
          'AngularJS 디렉티브/서비스/팩토리 활용',
          'SCSS 기반 스타일 클래스 작성',
        ],
        achievements: [],
      },
    ],
  },
  {
    company: '외주/개인 프로젝트',
    position: 'Project Manager',
    period: '',
    projects: [
      {
        name: '트윈클링',
        duration: '외주',
        description: '외주 프로젝트, Project Manager',
        stack: ['기획', 'PM'],
        roles: [
          '외주 프로젝트 관리 및 기획',
        ],
        achievements: [],
      },
      {
        name: '베트남 쇼핑몰',
        duration: '2018.07 - 2018.08',
        description: 'PHP 기반 오픈소스인 영카트5를 활용해 베트남 쇼핑몰 구축. 귀금속 쇼핑몰에 맞게 커스터마이징, docker-compose로 미들웨어 관리, 글로벌 서비스 인프라(AWS EC2, RDB, S3, CloudFront) 설계/구축.',
        stack: ['PHP', 'Composer', 'Jquery', 'SCSS', 'Docker', 'Docker-compose', 'AWS', 'EC2', 'S3', 'CloudFront'],
        roles: [
          '요구사항 정리 및 문서화',
          'Adobe XD로 기본 기획 및 프로토타입 작성',
          '백엔드 개발환경 구성 및 기능 구현',
          '프론트엔드 개발환경 구성 및 기능 구현',
          'Docker, Docker-compose 기반 개발/테스트/배포 환경 구성',
        ],
        achievements: [],
      },
      {
        name: '백오피스',
        duration: '2017.11 - 2017.12',
        description: '귀금속 주문~배송까지의 내부 업무 프로세스 웹앱. 주문→발주→입고→배송, 매출 대시보드, Lumen 기반 백엔드, 협업. 현재도 간헐적 유지보수.',
        stack: ['Angular4', 'Lumen', 'Composer', 'Docker', 'Docker-compose', 'GitLab'],
        roles: [
          '요구사항 정리 및 문서화',
          'Kakao Oven으로 기본 기획 및 프로토타입 작성',
          '프론트엔드 개발환경 구성 및 기능 구현',
          'ng 컴포넌트 기반 구조 개발',
          'rxjs 기반 데이터 반응형 구조',
          'Laradock 기반 개발/테스트/배포 환경 구성',
        ],
        achievements: [],
      },
    ],
  },
  {
    company: '이큐브랩(Ecube Labs)',
    position: 'Fullstack Engineer',
    period: '2012.11 - 2016.03',
    projects: [
      {
        name: 'CCN 웹사이트 2.0 개발',
        duration: '2015.08 - 2016.03',
        description: '기존 1.0 버전에서 새로운 제품군 추가 및 다양한 요구사항 수용을 위해 2.0 리워크. 구글맵 지도 기반에서 각 사용자별 제품 관리, 마커 그룹화 및 실시간 필터링 제공.',
        stack: ['AngularJS', 'SCSS', 'NodeJS', 'MariaDB', 'AWS'],
        roles: [
          '프론트엔드 기능 구현',
          'AngularJS 기반 컨트롤러/디렉티브/서비스/팩토리 개발',
          'SCSS 기반 스타일 클래스 작성',
          'NodeJS 기반 API 개발',
        ],
        achievements: [],
      },
      {
        name: '시크릿차트 웹사이트 개발',
        duration: '2014.08 - 2015.08',
        description: '병원 마케팅 플랫폼, 후기 게시/공유, 병원정보/검색/추천, 관리자 페이지 등 다양한 기능 개발.',
        stack: ['Jquery', 'SCSS', 'Codeigniter', 'MariaDB'],
        roles: [
          '백엔드/프론트엔드 개발환경 구성 및 기능 구현',
          'CI 기반 MVC 구조 개발',
          '네이티브 앱 용 API 개발 및 테스트페이지 작성',
          'Jquery 기반 구조 개발',
          'SCSS 기반 스타일 클래스 작성',
        ],
        achievements: [],
      },
      {
        name: 'CCN 웹사이트 1.0 개발',
        duration: '2012.11 - 2014.08',
        description: '태양광 압축 쓰레기통 관리용 웹 콘솔, 지도 기반 데이터 시각화, 하이브리드 앱(PhoneGap) 개발 및 업데이트.',
        stack: ['Jquery', 'SCSS', 'PhoneGap', 'JqueryMobile', 'Codeigniter', 'MariaDB'],
        roles: [
          '백엔드/프론트엔드 개발환경 구성 및 기능 구현',
          'Jquery/PhoneGap 기반 구조 개발',
          'JqueryMobile 기반 구조 개발',
          'SCSS 기반 스타일 클래스 작성',
          'CI 기반 MVC 구조 개발',
          'PHP 기반 HTTP 포트 활용 서버-제품간 프로토콜 개발',
        ],
        achievements: [],
      },
    ],
  },
];

const ProfessionalExperience = () => {
  return (
    <Layout title="경력기술서 - Professional Experience : HungSun LIM">
      <div className="max-w-3xl mx-auto px-2 py-8">
        <h1 className="text-2xl font-bold mb-8 tracking-tight">경력기술서 (Professional Experience)</h1>
        <div className="space-y-10">
          {PROFESSIONAL_EXPERIENCES.map((exp, idx) => (
            <section key={exp.company + exp.period} className="bg-white border border-gray-100 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div className="text-lg font-semibold text-primary-600">{exp.company}</div>
                <div className="text-xs text-gray-400 mt-1 md:mt-0">{exp.period}</div>
              </div>
              <div className="text-sm text-gray-700 mb-2 font-medium">{exp.position}</div>
              {exp.projects.map((project, pidx) => (
                <div key={project.name + pidx} className="mb-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                    <div className="text-base font-bold">{project.name}</div>
                    <div className="text-xs text-gray-400 mt-1 md:mt-0">{project.duration}</div>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{project.description}</div>
                  {project.roles && project.roles.length > 0 && (
                    <div className="mb-1">
                      <span className="font-semibold text-xs text-gray-500">주요 역할</span>
                      <ul className="list-disc list-inside text-xs text-gray-700 space-y-0.5 ml-2">
                        {project.roles.map((role, ridx) => (
                          <li key={ridx}>{role}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.stack && project.stack.length > 0 && (
                    <div className="mb-1">
                      <span className="font-semibold text-xs text-gray-500">기술스택</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {project.stack.map((tech) => (
                          <span key={tech} className="px-2 py-0.5 bg-gray-50 border border-gray-200 rounded text-xs text-gray-600">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.achievements && project.achievements.length > 0 && (
                    <div>
                      <span className="font-semibold text-xs text-gray-500">주요 성과</span>
                      <ul className="list-disc list-inside text-xs text-gray-700 space-y-0.5 ml-2">
                        {project.achievements.map((ach, aid) => (
                          <li key={aid}>{ach}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProfessionalExperience; 