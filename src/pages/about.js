import React from 'react';
import Layout from 'components/Layout';
import { Link } from 'gatsby';
import PROFESSIONAL_EXPERIENCES from 'data/experiences';

// 1. 경력 요약 — 경력기술서와 같은 데이터에서 뽑는다.
//    회사별 항목은 담당한 서비스 이름 + 서비스에 매이지 않는 회사 단위 역할로 구성된다.
//    상세 내용은 /professional-experience 에서 본다.
const CAREERS = PROFESSIONAL_EXPERIENCES.filter((exp) => !exp.excludeFromSummary).map((exp) => ({
  company: exp.company,
  position: exp.position,
  period: exp.period,
  details: [
    ...(exp.services || []).map((service) => (service.kind ? `${service.name} — ${service.kind}` : service.name)),
    ...(exp.responsibilities || []),
  ],
}));

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
      <div className="max-w-1xl mx-auto px-2 py-8">
        {/* 프로필 섹션 */}
        <section className="mb-12 text-center">
          <div className="mb-5">
            <img
              src="/images/about/profile-hungsun.jpg"
              alt="HungSun LIM"
              className="mx-auto mb-4 rounded-full border-4 border-border-strong"
              style={{ width: '200px', height: '200px', objectFit: 'cover', objectPosition: 'center 5%' }}
            />
          </div>
          <div className="mb-2">
            <div className="text-xl font-bold">임흥선</div>
            <div className="text-base text-subtle">HungSun LIM</div>
          </div>
          <div className="mb-3">
            <div className="text-base font-semibold mb-1">시니어 프론트엔드 엔지니어</div>
            <div className="text-xs text-subtle mb-1">용인 강남대학교 컴퓨터미디어정보공학부 학사 졸업</div>
            <a href="mailto:majac6@gmail.com" className="text-primary hover:underline text-sm">
              majac6@gmail.com
            </a>
          </div>
          <div className="space-x-3 mt-2">
            <a
              href="https://github.com/majac6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtle hover:text-primary-hover text-xs underline-offset-2 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.facebook.com/majac6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtle hover:text-primary-hover text-xs underline-offset-2 hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/hungsun-lim-a37824106/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtle hover:text-primary-hover text-xs underline-offset-2 hover:underline"
            >
              Linkedin
            </a>
          </div>
          {/* 경력기술서 바로가기 */}
          <div className="mt-4">
            <Link
              to="/professional-experience"
              className="inline-block px-4 py-1.5 border border-primary text-primary rounded font-medium text-xs hover:bg-primary-bg transition-colors print:hidden"
            >
              경력기술서 바로가기
            </Link>
          </div>
        </section>

        {/* 스킬 섹션 */}
        <section className="mb-12 border-b border-border-strong pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-base font-semibold mb-2">Frontend (Senior)</h3>
              <ul className="space-y-1 text-xs text-muted">
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
              <ul className="space-y-1 text-xs text-muted">
                <li>• Javascript / Typescript : NodeJS, NestJS, Express</li>
                <li>• PHP : Codeigniter, Laravel</li>
                <li>• Database :MySQL, MariaDB, Redis, Memcached</li>
              </ul>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-base font-semibold mb-2">Infrastructure / Operation</h3>
            <ul className="space-y-1 text-xs text-muted">
              <li>• DevOps : EKS, k8s, ECS, Docker run</li>
              <li>• GitOps : ArgoCD</li>
              <li>• CI/CD : Github Actions, Jenkins</li>
              <li>• Monitoring : Datadog, Grafana, Prometheus, Sentry, OpenSearch</li>
              <li>• Cloud : AWS, GCP, Azure</li>
            </ul>
          </div>
        </section>

        {/* 자격증 섹션 */}
        <section className="mb-12 border-b border-border-strong pb-8">
          <h2 className="text-lg font-bold mb-6">Licenses</h2>
          <ul className="space-y-1 text-xs text-muted">
            {LICENSES.map((lic) => (
              <li key={lic.date + lic.name + lic.code}>
                • {lic.date} - {lic.name}
                {lic.code ? `(${lic.code})` : ''}
              </li>
            ))}
          </ul>
        </section>

        {/* 경력 섹션 */}
        <section className="mb-12 border-b border-border-strong pb-8">
          <h2 className="text-lg font-bold mb-6">경력</h2>
          <div className="mb-6">
            <div className="space-y-5">
              {CAREERS.map((career) => (
                <div key={career.company + career.period}>
                  <div className="text-xs text-subtle mb-1">{career.period}</div>
                  <div className="text-xs font-medium text-muted mb-1">{career.position}</div>
                  <div className="text-base font-semibold mb-1">{career.company}</div>
                  <ul className="space-y-1 text-xs text-muted">
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
        <section className="mb-12 border-b border-border-strong pb-8">
          <h2 className="text-lg font-bold mb-6">학력</h2>
          <div className="space-y-5">
            {EDUCATIONS.map((edu) => (
              <div key={edu.period + edu.school}>
                <div className="text-xs text-subtle mb-1">{edu.period}</div>
                <div className="text-base font-semibold mb-1">{edu.school}</div>
                <div className="text-xs text-muted">{edu.degree}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
