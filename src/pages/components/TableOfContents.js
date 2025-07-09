import React, { useState, useEffect } from 'react';

const TableOfContents = ({ headings }) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -35% 0px',
      }
    );

    const headingElements = headings.map(({ id }) => 
      document.getElementById(id)
    ).filter(Boolean);

    headingElements.forEach((element) => observer.observe(element));

    return () => {
      headingElements.forEach((element) => observer.unobserve(element));
    };
  }, [headings]);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
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
              className={`w-full text-left px-2 py-1 text-sm rounded transition-colors
                ${activeId === heading.id
                  ? 'font-bold text-primary-600 border-l-2 border-primary-600 bg-transparent'
                  : 'text-gray-700 hover:text-primary-600 border-l-2 border-transparent'}
              `}
              style={{
                paddingLeft: `${(heading.depth - 1) * 14 + 8}px`,
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