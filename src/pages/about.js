import React from 'react';
import Layout from 'components/Layout';

// 1. 경력 데이터 구조화
const CAREERS = [
  {
    company: '아모레퍼시픽 / AMORE PACIFIC',
    position: 'Senior Frontend Engineer(Lead)',
    period: '2024.01 - NOW',
    details: [
      '아모레몰(전자상거래) 프론트엔드 개발 리드',
      '커머스커뮤니티, 스킨노트 등 신사업 프론트엔드 개발 리드',
      '프론트엔드 기술 전략 및 로드맵 수립',
      '프론트엔드 개발 환경 구축 및 운영',
      '협력사 및 계약직 인력 관리',
      '프로젝트 일정 관리',
    ],
  },
  {
    company: '딜리헙(Dillyhub)',
    position: 'Fullstack Engineer',
    period: '2021.01 - 2023.06',
    details: [
      '오픈 웹툰/소설 플랫폼(US,KR) 스토어/스튜디오 프론트엔드/백엔드 개발 및 운영',
      '딜리뷰 프론트엔드/백엔드 개발 및 운영',
      '디자인 시스템 구축',
      'k8s 기반 devops 환경 구축 및 운영',
    ],
  },
  {
    company: 'LGU+',
    position: 'Frontend Engineer(Lead)',
    period: '2020.09 - 2020.12',
    details: [
      'Home-in(홈 서비스 플랫폼) 프론트엔드 개발 리드',
      '퍼블리셔 대상 VueJS 컴포넌트 구현 교육',
      'iOS, Android 웹뷰 기반 개발환경 구축',
      '프로젝트 일정 관리',
    ],
  },
  {
    company: '주식회사 카닥',
    position: 'Frontend Engineer',
    period: '2019.01 - 2020.08',
    details: [
      '카닥 프론트엔드 개발환경 구축 및 운영',
      '수리, 테크샵(엔진오일), 세차, 카닥몰, 커뮤니티 등 개발 및 운영',
      '프론트엔드 모노레포/CI/CD/배포 자동화',
    ],
  },
  {
    company: '오픈소스컨설팅(Open Source Consulting)',
    position: 'Frontend Engineer',
    period: '2017.07 - 2018.12',
    details: [
      'Play-ce RoRo Admin/웹 콘솔/제품 소개 페이지 등 프론트엔드 개발',
      'React, Angular, Gatsby 등 다양한 프레임워크 활용',
      'AWS 등 클라우드 환경 기반 개발',
    ],
  },
  {
    company: '박차컴퍼니',
    position: 'Frontend Engineer',
    period: '2016.06 - 2017.05',
    details: [
      '차팡/박차 모바일 앱, 박차 비즈 웹사이트 등 프론트엔드 개발',
      'Framework7, AngularJS 등 하이브리드/SPA 개발',
    ],
  },
  {
    company: '이큐브랩(Ecube Labs)',
    position: 'Fullstack Engineer',
    period: '2012.11 - 2016.03',
    details: [
      'IoT 기반 스마트 쓰레기통 관리 시스템(CCN) 및 병원 마케팅 플랫폼(시크릿차트) 등 다양한 웹서비스 프론트/백엔드 개발',
      'AngularJS, Jquery, SCSS, NodeJS, Codeigniter 등 다양한 기술 스택 활용',
      '지도 기반 데이터 시각화, 관리자 대시보드, 하이브리드 앱(PhoneGap) 등 주요 기능 구현',
      '프론트엔드/백엔드 환경 설계 및 구축, API/컨트롤러/서비스/디렉티브 등 구조 설계 및 개발',
    ],
  },
];

// 2. 자격증 데이터 구조화
const LICENSES = [
  { date: '2004.12.10', name: 'MCommerce관리사 2급', code: 'MCS-09-000231' },
  { date: '2004.10.11', name: '정보기기운용기능사', code: '04404100554Y' },
  { date: '2004.04.30', name: '인터넷정보검색사 2급', code: 'IIS-21-002405' },
  { date: '2004.04.19', name: '정보처리기능사', code: '0M01101408Y' },
  { date: '2003.12.22', name: '컴퓨터그래픽스운용기능사', code: '03405 1027520' },
  { date: '2003.10.30', name: '컴퓨터활용능력 2급', code: '' },
  { date: '2003.07.03', name: '워드프로세서 1급', code: '' },
];

// 3. 학력 데이터 구조화
const EDUCATIONS = [
  {
    period: '2009.03 - 2013.08',
    school: '강남대학교 컴퓨터미디어공학부',
    degree: '졸업(학사)',
  },
  {
    period: '2007.03 - 2009.02',
    school: '세한대학교 컴퓨터교육과',
    degree: '수료',
  },
  {
    period: '2006.03 - 2006.09',
    school: '연세디지털게임교육원',
    degree: '게임기획 수료',
  },
  {
    period: '2003.03 - 2006.02',
    school: '태원고등학교',
    degree: '졸업',
  },
];

const AboutPage = () => {
  return (
    <Layout title="About Me - Senior Frontend Engineer : HungSun LIM">
      <div className="max-w-3xl mx-auto px-2 py-8">
        {/* 프로필 섹션 */}
        <section className="mb-12 text-center">
          <div className="mb-5">
            <img
              src="https://s.gravatar.com/avatar/ac88fef73fb20037feaf38ff349b129c?s=500&r=pg"
              alt="HungSun LIM"
              className="w-28 h-28 rounded-full mx-auto border border-gray-200 mb-4"
            />
          </div>
          <div className="mb-2">
            <div className="text-xl font-bold">임흥선</div>
            <div className="text-base text-gray-500">HungSun LIM</div>
          </div>
          <div className="mb-3">
            <div className="text-base font-semibold mb-1">Senior Frontend Engineer</div>
            <div className="text-xs text-gray-400 mb-1">KangNam Univ. Computer Media Engineering</div>
            <a href="mailto:majac6@gmail.com" className="text-primary-600 hover:underline text-sm">
              majac6@gmail.com
            </a>
          </div>
          <div className="space-x-3 mt-2">
            <a
              href="https://github.com/majac6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-600 text-xs underline-offset-2 hover:underline">
              GitHub
            </a>
            <a
              href="https://www.facebook.com/majac6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-600 text-xs underline-offset-2 hover:underline">
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/hungsun-lim-a37824106/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-600 text-xs underline-offset-2 hover:underline">
              Linkedin
            </a>
          </div>
          {/* 경력기술서 바로가기 */}
          <div className="mt-4">
            <a
              href="/professional-experience"
              className="inline-block px-4 py-1.5 border border-primary-600 text-primary-600 rounded font-medium text-xs hover:bg-primary-50 transition-colors">
              경력기술서 바로가기
            </a>
          </div>
        </section>

        {/* 스킬 섹션 */}
        <section className="mb-12 border-b border-gray-100 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-base font-semibold mb-2">Frontend (Senior)</h3>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>• Micro Frontend Architecture, Buildtime Or Runtime (Monolithic, Monorepo, Federation)</li>
                <li>• Javascript, Typescript</li>
                <li>• React, NextJS(10,12 and over 13), Angular, Svelte, Vue</li>
                <li>• React Native, Expo</li>
                <li>• Tailwind, SCSS, CSS, Storybook</li>
                <li>• Vite, Webpack, Rollup</li>
                <li>• Vitest, Jest, Cypress, React Testing Library, playwright</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-2">Backend (Mid-Level)</h3>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>• Javascript / Typescript : NodeJS, NestJS, Express</li>
                <li>• PHP : Codeigniter, Laravel</li>
                <li>• Database :MySQL, MariaDB, Redis, Memcached</li>
              </ul>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-base font-semibold mb-2">Infrastructure / Operation</h3>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• DevOps : EKS, k8s, ECS, Docker run</li>
              <li>• GitOps : ArgoCD</li>
              <li>• CI/CD : Github Actions, Jenkins</li>
              <li>• Monitoring : Datadog, Grafana, Prometheus, Sentry, OpenSearch</li>
              <li>• Cloud : AWS, GCP, Azure</li>
            </ul>
          </div>
        </section>

        {/* 자격증 섹션 */}
        <section className="mb-12 border-b border-gray-100 pb-8">
          <h2 className="text-lg font-bold mb-6">Licenses</h2>
          <ul className="space-y-1 text-xs text-gray-700">
            {LICENSES.map((lic) => (
              <li key={lic.date + lic.name + lic.code}>
                • {lic.date} - {lic.name}{lic.code ? `(${lic.code})` : ''}
              </li>
            ))}
          </ul>
        </section>

        {/* 경력 섹션 */}
        <section className="mb-12 border-b border-gray-100 pb-8">
          <h2 className="text-lg font-bold mb-6">경력</h2>
          <div className="mb-6">
            <div className="space-y-5">
              {CAREERS.map((career) => (
                <div key={career.company + career.period}>
                  <div className="text-xs text-gray-400 mb-1">{career.period}</div>
                  <div className="text-xs font-medium text-gray-700 mb-1">{career.position}</div>
                  <div className="text-base font-semibold mb-1">{career.company}</div>
                  <ul className="space-y-1 text-xs text-gray-700">
                    {career.details.map((d, i) => (
                      <li key={i}>• {d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 학력 섹션 */}
        <section className="mb-12 border-b border-gray-100 pb-8">
          <h2 className="text-lg font-bold mb-6">학력</h2>
          <div className="space-y-5">
            {EDUCATIONS.map((edu) => (
              <div key={edu.period + edu.school}>
                <div className="text-xs text-gray-400 mb-1">{edu.period}</div>
                <div className="text-base font-semibold mb-1">{edu.school}</div>
                <div className="text-xs text-gray-700">{edu.degree}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
