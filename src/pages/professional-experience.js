import React from 'react';
import Layout from 'components/Layout';
import PROFESSIONAL_EXPERIENCES from 'data/experiences';

/** '2024.10 - 2024.11' / '2024.12' / '외주' → 정렬용 숫자. 파싱 불가능하면 맨 뒤로 보낸다. */
const startOf = (duration) => {
  const matched = /(\d{4})\.(\d{1,2})/.exec(duration || '');
  if (!matched) return Number.MAX_SAFE_INTEGER;
  return Number(matched[1]) * 100 + Number(matched[2]);
};

/** 진행 내역은 서비스 안에서 오래된 것부터 읽히도록 오름차순으로 둔다. */
const byOldestFirst = (a, b) => startOf(a.duration) - startOf(b.duration);

/** '2024' → '24'. 연도가 아니면 그대로 둔다. */
const shortYear = (point) => point.replace(/^\d{2}(\d{2})(?=\.|$)/, '$1');

/**
 * 진행 내역의 기간은 짧게 줄여 읽는 흐름을 끊지 않게 한다. 연도의 앞 두 자리는
 * 서비스 헤더에 이미 온전히 적혀 있으므로 생략하고, 한 해 안에서 끝나는 기간은
 * 연도를 한 번만 적는다.
 *
 *   '2024.10 - 2024.11' → '24.10–11'
 *   '2022.11 - 2023.02' → '22.11–23.02'
 *   '2024.12'           → '24.12'
 *   '외주'               → '외주'
 */
const formatDuration = (duration) => {
  const points = (duration || '').split('-').map((point) => point.trim());
  if (points.length < 2) return shortYear(points[0] || '');

  const [from, to] = points;
  const sameYear = /^\d{4}\./.test(from) && from.slice(0, 4) === to.slice(0, 4);
  return `${shortYear(from)}–${sameYear ? to.slice(5) : shortYear(to)}`;
};

/** 목록 항목. 글머리 기호를 실제 글자로 두어 복사했을 때도 따라오게 한다. */
const Bullet = ({ children, className = '' }) => (
  <li className={`pl-[1.15em] -indent-[1.15em] leading-relaxed ${className}`}>
    <span className="text-subtle">•</span> {children}
  </li>
);

const Timeline = ({ label, projects }) => {
  if (projects.length === 0) return null;
  return (
    <div className="mt-4">
      <div className="keep-with-next text-2xs font-semibold text-subtle tracking-wide">{label}</div>
      <ul className="mt-1.5 space-y-1.5">
        {projects.map((project) => (
          <Bullet key={project.name} className="text-xs text-muted">
            <span className="text-subtle tabular-nums">{formatDuration(project.duration)}</span>{' '}
            <span className="font-semibold text-foreground">{project.name}</span>
            {project.headline ? ` — ${project.headline}` : ''}
            {project.link ? (
              <>
                {' '}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="print-url text-primary hover:underline">
                  {project.linkLabel || '링크'}
                </a>
              </>
            ) : null}
          </Bullet>
        ))}
      </ul>
    </div>
  );
};

const ServiceBlock = ({ service, projects }) => {
  const ordered = [...projects].sort(byOldestFirst);
  const tracks = service.tracks && service.tracks.length > 0 ? service.tracks : [];

  return (
    <div className="pt-6 mt-6 border-t border-border-strong first:pt-0 first:mt-0 first:border-t-0">
      <h3 className="text-base font-bold text-foreground">
        {service.name}
        {service.kind ? <span className="ml-2 text-xs font-normal text-subtle">— {service.kind}</span> : null}
      </h3>
      <div className="text-2xs text-subtle tabular-nums mt-0.5">{[service.span, service.role].filter(Boolean).join(' · ')}</div>

      {service.summary ? <p className="text-xs text-muted leading-relaxed mt-2.5">{service.summary}</p> : null}

      {service.wins && service.wins.length > 0 && (
        <div className="mt-4">
          <div className="keep-with-next text-2xs font-semibold text-subtle tracking-wide">주요 성과</div>
          <ul className="mt-1.5 space-y-1.5">
            {service.wins.map((win) => (
              <Bullet key={win} className="text-xs text-foreground">
                {win}
              </Bullet>
            ))}
          </ul>
        </div>
      )}

      {tracks.length > 0 ? (
        tracks.map((track) => <Timeline key={track} label={`진행 내역 — ${track}`} projects={ordered.filter((p) => p.track === track)} />)
      ) : (
        <Timeline label="진행 내역" projects={ordered} />
      )}

      {service.stack && service.stack.length > 0 && (
        <p className="text-2xs text-subtle leading-relaxed mt-3">{service.stack.join(' · ')}</p>
      )}
    </div>
  );
};

const ProfessionalExperience = () => {
  return (
    <Layout title="경력기술서 - Professional Experience : HungSun LIM">
      <div className="max-w-1xl mx-auto px-2 py-12">
        <h1 className="text-3xl font-bold mb-10 tracking-tight text-foreground">경력기술서 (Professional Experience)</h1>
        <div className="space-y-10">
          {PROFESSIONAL_EXPERIENCES.map((exp) => {
            const services = exp.services || [];
            const assigned = new Set(services.map((s) => s.id));
            const orphans = exp.projects.filter((p) => !assigned.has(p.serviceId));

            return (
              <section
                key={exp.company + exp.period}
                className="bg-card-bg border border-card-border rounded-xl shadow-sm p-8 print:border-0 print:shadow-none print:p-0"
              >
                <div className="keep-with-next pb-4 border-b border-border">
                  <div className="text-2xl font-bold text-foreground">{exp.company}</div>
                  <div className="text-2xs text-subtle mt-1 tabular-nums">
                    {[exp.period, exp.position, exp.team].filter(Boolean).join(' · ')}
                  </div>
                </div>

                {/* 서비스를 한 겹 감싸야 첫 서비스에 first: 변형이 걸린다.
                    감싸지 않으면 회사 이름의 아래 선과 첫 서비스의 위 선이 겹쳐 보인다. */}
                <div className="mt-6">
                  {services.map((service) => (
                    <ServiceBlock key={service.id} service={service} projects={exp.projects.filter((p) => p.serviceId === service.id)} />
                  ))}

                  {orphans.length > 0 && <Timeline label="기타" projects={[...orphans].sort(byOldestFirst)} />}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ProfessionalExperience;
