import React from 'react';
import Layout from 'components/Layout';

const Resume = () => {
  return (
    <Layout>
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
            <a 
              href="mailto:majac6@gmail.com" 
              className="text-primary-600 hover:underline text-sm"
            >
              majac6@gmail.com
            </a>
          </div>
          <div className="space-x-3 mt-2">
            <a 
              href="https://github.com/majac6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-600 text-xs underline-offset-2 hover:underline"
            >
              GitHub
            </a>
            <a 
              href="https://www.facebook.com/majac6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-600 text-xs underline-offset-2 hover:underline"
            >
              Facebook
            </a>
            <a 
              href="https://www.linkedin.com/in/hungsun-lim-a37824106/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-600 text-xs underline-offset-2 hover:underline"
            >
              Linkedin
            </a>
          </div>
        </section>

        {/* 스킬 섹션 */}
        <section className="mb-12 border-b border-gray-100 pb-8">
          <div className="mb-6">
            <p className="text-base text-gray-700 leading-relaxed">
              스타트업부터 대기업까지 다양한 회사에서 개발을 통해 문제를 해결하고 비즈니스 목표를 달성해 왔습니다. 회사 또는 팀 규모에 따라 선택할 수 있는 가장 최적의 개발 방법을 도출하고 실행하며 목표한 바 내에 비즈니스 목표를 달성하고 이를 기반으로 팀과 개인의 성장도 함께 이룰 수 있는 순환 구조를 만들고 유지하며 발전해 나가는 것을 좋아합니다.
            </p>
          </div>
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
          <div>
            <h3 className="text-base font-semibold mb-2">Licenses</h3>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• 2004.12.10 - MCommerce관리사 2급(MCS-09-000231)</li>
              <li>• 2004.10.11 - 정보기기운용기능사(04404100554Y)</li>
              <li>• 2004.04.30 - 인터넷정보검색사 2급(IIS-21-002405)</li>
              <li>• 2004.04.19 - 정보처리기능사(0M01101408Y)</li>
              <li>• 2003.12.22 - 컴퓨터그래픽스운용기능사(03405 1027520)</li>
              <li>• 2003.10.30 - 컴퓨터활용능력 2급</li>
              <li>• 2003.07.03 - 워드프로세서 1급</li>
            </ul>
          </div>
        </section>

        {/* 경력 섹션 */}
        <section className="mb-12 border-b border-gray-100 pb-8">
          <h2 className="text-lg font-bold mb-6">경력 및 학력</h2>
          <div className="mb-6">
            <h3 className="text-base font-semibold mb-3">경력</h3>
            <div className="space-y-5">
              <div>
                <div className="text-xs text-gray-400 mb-1">2024.01 - NOW</div>
                <div className="text-xs font-medium text-gray-700 mb-1">Frontend Engineer(Lead)</div>
                <div className="text-base font-semibold mb-1">아모레퍼시픽(AMORE PACIFIC)</div>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>• 아모레몰(전자상거래) 프론트엔드 개발 리드</li>
                  <li>• 커머스커뮤니티, 스킨노트 등 신사업 프론트엔드 개발 리드</li>
                  <li>• 프론트엔드 기술 전략 및 로드맵 수립</li>
                  <li>• 프론트엔드 개발 환경 구축 및 운영</li>
                  <li>• 협력사 및 계약직 인력 관리</li>
                  <li>• 프로젝트 일정 관리</li>
                </ul>
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">2021.01 - 2023.06</div>
                <div className="text-xs font-medium text-gray-700 mb-1">Fullstack Engineer</div>
                <div className="text-base font-semibold mb-1">딜리딜리(Dillyhub)</div>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>• 딜리딜리(오픈 웹툰/소설 플랫폼) US,KR 스토어/스튜디오 프론트엔드/백엔드 개발 및 운영</li>
                  <li>• 딜리뷰 프론트엔드/백엔드 개발 및 운영</li>
                  <li>• 딜리딜리 디자인 시스템 구축</li>
                  <li>• k8s 기반 devops 환경 구축 및 운영</li>
                </ul>
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">2020.09 - 2020.12</div>
                <div className="text-xs font-medium text-gray-700 mb-1">Frontend Engineer(Lead)</div>
                <div className="text-base font-semibold mb-1">엘지유플러스(LGU+)</div>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>• Homin(홈 서비스 플랫폼) 프론트엔드 개발 리드</li>
                  <li>• Homin 프론트엔드 개발 환경 구축 및 운영</li>
                  <li>• 협력사 및 계약직 인력관리 및 교육</li>
                  <li>• 프로젝트 일정 관리</li>
                </ul>
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">2019.01 - 2020.08</div>
                <div className="text-xs font-medium text-gray-700 mb-1">Frontend Engineer</div>
                <div className="text-base font-semibold mb-1">카독(Cardoc)</div>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>• 카독 프론트엔드 개발환경 구축 및 운영</li>
                  <li>• 수리, 테크샵(엔진오일), 세차, 카독몰 개발 및 운영</li>
                </ul>
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">2017.07 - 2018.12</div>
                <div className="text-xs font-medium text-gray-700 mb-1">Frontend Engineer</div>
                <div className="text-base font-semibold mb-1">오픈소스컨설팅(Open Source Consulting)</div>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>• 다양한 클라이언트의 웹 프로젝트 개발</li>
                  <li>• React, Vue.js 기반 프론트엔드 개발</li>
                  <li>• Node.js 기반 백엔드 개발</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Resume;
