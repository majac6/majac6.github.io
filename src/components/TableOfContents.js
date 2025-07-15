import React, { useEffect, useRef, useState } from 'react';

const TableOfContents = ({ headings }) => {
  const [activeId, setActiveId] = useState('');
  const [isClicking, setIsClicking] = useState(false);
  const clickTimeout = useRef(null);
  const observer = useRef(null);

  const lastHeadingId = headings?.[headings.length - 1]?.id ?? '';

  useEffect(() => {
    if (!headings || headings.length === 0) return;

    const handleIntersection = (entries) => {
      if (isClicking) return;

      const visibleHeadings = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => ({
          id: entry.target.id,
          top: entry.boundingClientRect.top,
          ratio: entry.intersectionRatio,
        }));

      if (visibleHeadings.length === 0) return;

      // 가장 많이 보이는 heading 선택
      const mostVisible = visibleHeadings.sort((a, b) => {
        if (b.ratio === a.ratio) {
          return a.top - b.top; // 같으면 화면 상단에 가까운 것
        }
        return b.ratio - a.ratio;
      })[0];

      if (mostVisible && mostVisible.id !== activeId) {
        setActiveId(mostVisible.id);
      }
    };

    const options = {
      root: null,
      rootMargin: '0px 0px -60% 0px', // 화면 상단에서 40% 지점 기준
      threshold: [0.1, 0.25, 0.5, 0.75, 1.0],
    };

    observer.current = new IntersectionObserver(handleIntersection, options);

    const elements = headings
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    elements.forEach((el) => observer.current.observe(el));

    return () => {
      if (observer.current) {
        observer.current.disconnect();
        observer.current = null;
      }
    };
  }, [headings, isClicking, activeId]);

  // 스크롤이 맨 아래 근처에 가면 마지막 heading을 강제로 활성화
  useEffect(() => {
    const handleScroll = () => {
      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.offsetHeight;
      const margin = 30;

      if (docHeight - scrollBottom <= margin && lastHeadingId !== activeId) {
        setActiveId(lastHeadingId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastHeadingId, activeId]);

  const scrollToHeading = (id) => {
    setIsClicking(true);
    setActiveId(id);
    const el = document.getElementById(id);
    const navHeight = document.querySelector('nav')?.offsetHeight || 0;

    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.scrollY - navHeight - 8;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }

    if (clickTimeout.current) clearTimeout(clickTimeout.current);
    clickTimeout.current = setTimeout(() => {
      setIsClicking(false);
    }, 500); // 클릭 후 500ms 동안은 scrollspy 비활성화
  };

  if (!headings || headings.length === 0) return null;

  return (
    <nav className="border border-card-border rounded-lg p-4 bg-card-bg">
      <h3 className="text-xs font-semibold mb-3 text-subtle tracking-wide uppercase">
        목차
      </h3>
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={`w-full cursor-pointer text-left px-2 py-1 text-2xs transition-colors
                ${activeId === heading.id
                  ? 'font-bold text-primary-hover border-primary bg-primary-bg'
                  : 'text-muted hover:text-primary-hover'}
              `}
              style={{ paddingLeft: `${(heading.depth - 2) * 8}px` }}
            >
              {heading.value}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
