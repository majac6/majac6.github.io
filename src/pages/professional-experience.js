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

const Timeline = ({ label, projects }) => {
  if (projects.length === 0) return null;
  return (
    <div className="mt-4">
      <div className="text-2xs font-semibold text-subtle tracking-wide">{label}</div>
      <ul className="mt-1.5 space-y-1.5">
        {projects.map((project) => (
          <li key={project.name} className="text-xs text-muted leading-relaxed">
            <span className="text-subtle tabular-nums">{project.duration}</span>
            {' · '}
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
          </li>
        ))}
      </ul>
    </div>
  );
};

const ServiceBlock = ({ service, projects }) => {
  const ordered = [...projects].sort(byOldestFirst);
  const tracks = service.tracks && service.tracks.length > 0 ? service.tracks : [];

  return (
    <div className="pt-6 mt-6 border-t border-border-strong first:pt-0 first:mt-0 first:border-t-0 break-inside-avoid">
      <h3 className="text-base font-bold text-foreground">
        {service.name}
        {service.kind ? <span className="ml-2 text-xs font-normal text-subtle">— {service.kind}</span> : null}
      </h3>
      <div className="text-2xs text-subtle tabular-nums mt-0.5">{[service.span, service.role].filter(Boolean).join(' · ')}</div>

      {service.summary ? <p className="text-xs text-muted leading-relaxed mt-2.5">{service.summary}</p> : null}

      {service.wins && service.wins.length > 0 && (
        <div className="mt-4">
          <div className="text-2xs font-semibold text-subtle tracking-wide">주요 성과</div>
          <ul className="mt-1.5 space-y-1.5">
            {service.wins.map((win) => (
              <li key={win} className="text-xs text-foreground leading-relaxed">
                {win}
              </li>
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
                <div className="pb-4 border-b border-border">
                  <div className="text-2xl font-bold text-foreground">{exp.company}</div>
                  <div className="text-2xs text-subtle mt-1 tabular-nums">
                    {[exp.period, exp.position, exp.team].filter(Boolean).join(' · ')}
                  </div>
                </div>

                {services.map((service) => (
                  <ServiceBlock key={service.id} service={service} projects={exp.projects.filter((p) => p.serviceId === service.id)} />
                ))}

                {orphans.length > 0 && <Timeline label="기타" projects={[...orphans].sort(byOldestFirst)} />}
              </section>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ProfessionalExperience;
