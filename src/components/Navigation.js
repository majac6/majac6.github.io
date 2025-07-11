import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

const Navigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/articles', label: 'Articles' },
    { path: '/about', label: 'About Me' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // 모바일 메뉴 닫기 (링크 클릭 시)
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <nav className="print:hidden border-b border-gray-200 bg-white sticky top-0 z-30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link to="/" className="text-lg font-bold tracking-tight hover:text-primary-600 transition-colors">
            HungSun LIM
          </Link>

          {/* 햄버거 버튼 (모바일) */}
          <button
            className="block md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span className="sr-only">메뉴</span>
            {/* 햄버거 아이콘 (SVG) */}
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                // X 아이콘
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                // 햄버거 아이콘
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* 네비게이션 메뉴 (데스크탑) */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors
                  ${isActive(item.path)
                    ? 'text-primary-600 font-semibold border-b-2 border-primary-600'
                    : 'text-gray-700 hover:text-primary-600 hover:border-b-2 hover:border-primary-200'}
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        {/* 모바일 메뉴 드롭다운 */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-2 text-base font-medium transition-colors rounded
                  ${isActive(item.path)
                    ? 'text-primary-600 font-semibold bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'}
                `}
                onClick={handleMenuClose}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 