import React, { useState, useEffect, useRef } from 'react';

const TableOfContents = ({ headings }) => {
  const [activeId, setActiveId] = useState('');
  const [isClicking, setIsClicking] = useState(false);
  const clickTimeout = useRef(null);
  const lastHeadingId = headings && headings.length > 0 ? headings[headings.length - 1].id : '';

  // IntersectionObserver 기반 scrollspy
  useEffect(() => {
    if (isClicking) return; // 클릭 중에는 scrollspy 비활성화
    const nav = document.querySelector('nav');
    const navHeight = nav ? nav.offsetHeight : 0;
    const marginTop = Math.min(navHeight + 8, window.innerHeight / 2);

    const observer = new window.IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: `-${marginTop}px 0px 0px 0px`,
        threshold: 0.1,
      }
    );

    const headingElements = headings.map(({ id }) => 
      document.getElementById(id)
    ).filter(Boolean);

    headingElements.forEach((element) => observer.observe(element));

    // Fallback: headings이 1개뿐이거나, 마운트 시점에만 1회 실행
    if (headingElements.length > 0 && !activeId) {
      setActiveId(headingElements[0].id);
    }

    return () => {
      headingElements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
    // activeId를 의존성에 추가하지 않음 (무한루프 방지)
  }, [headings, isClicking]);

  // 스크롤이 끝에 가까워지면 마지막 heading 강제 active
  useEffect(() => {
    const handleScroll = () => {
      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.body.offsetHeight;
      const margin = 10;
      if (docHeight - scrollBottom <= margin && lastHeadingId) {
        setActiveId(lastHeadingId);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastHeadingId]);

  // 목차 아이템 클릭 핸들러
  const scrollToHeading = (id) => {
    setIsClicking(true);
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      const nav = document.querySelector('nav');
      const navHeight = nav ? nav.offsetHeight : 0;
      const y = element.getBoundingClientRect().top + window.pageYOffset - navHeight - 8;
      window.scrollTo({ top: y, behavior: 'auto' }); // 스무스 스크롤 X
    }
    if (clickTimeout.current) clearTimeout(clickTimeout.current);
    clickTimeout.current = setTimeout(() => setIsClicking(false), 300); // 300ms 후 scrollspy 재개
  };

  if (!headings || headings.length === 0) {
    return null;
  }

  return (
    <nav className="border border-gray-200 rounded-lg p-4 bg-white">
      <h3 className="text-xs font-semibold mb-3 text-gray-500 tracking-wide uppercase">
        목차
      </h3>
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={`w-full text-left px-2 py-1 text-2xs rounded transition-colors
                ${activeId === heading.id
                  ? 'font-bold text-primary-700 border-l-4 border-primary-600 bg-primary-50 shadow-sm'
                  : 'text-gray-700 hover:text-primary-600 border-l-4 border-transparent'}
              `}
              style={{
                paddingLeft: `${(heading.depth - 2) * 8}px`,
              }}
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