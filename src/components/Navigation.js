import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

const Navigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  // 테마 토글 시 html에 dark 클래스 토글 및 localStorage 저장
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.theme = theme;
  }, [theme]);

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

  const handleMenuClose = () => setMenuOpen(false);
  const handleThemeToggle = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <nav className="print:hidden bg-background sticky top-0 z-30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link to="/" className="text-lg font-bold tracking-tight hover:text-primary">
            HungSun LIM
          </Link>

          {/* 데스크탑: 메뉴 + 테마토글 */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium
                  ${
                    isActive(item.path)
                      ? 'text-primary font-semibold border-b-2 border-primary'
                      : 'text-foreground hover:text-primary hover:border-b-2 hover:border-primary-border'
                  }
                `}>
                {item.label}
              </Link>
            ))}
            {/* 테마 토글 버튼 */}
            <button
              className="flex items-center justify-center w-8 h-8 rounded-full bg-background text-foreground hover:bg-primary-bg ml-2"
              onClick={handleThemeToggle}
              aria-label="테마 전환"
              type="button">
              {theme === 'dark' ? (
                <svg width={18} height={18} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                </svg>
              ) : (
                <svg width={18} height={18} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
                </svg>
              )}
            </button>
          </div>

          {/* 모바일: 테마토글 + 햄버거 */}
          <div className="flex md:hidden items-center gap-1">
            {/* 테마 토글 버튼 */}
            <button
              className="flex outline-none items-center justify-center w-8 h-8 rounded-full bg-background text-foreground hover:bg-primary-bg"
              onClick={handleThemeToggle}
              aria-label="테마 전환"
              type="button">
              {theme === 'dark' ? (
                <svg width={18} height={18} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                </svg>
              ) : (
                <svg width={18} height={18} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
                </svg>
              )}
            </button>
            {/* 햄버거 버튼 */}
            <button
              className="block p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
              onClick={() => setMenuOpen((open) => !open)}
              type="button">
              <span className="sr-only">메뉴</span>
              <svg
                className="w-6 h-6 text-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* 모바일 메뉴 드롭다운 */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-background border border-border rounded-lg shadow-lg py-2 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-2 text-base font-medium rounded
                  ${
                    isActive(item.path)
                      ? 'text-primary font-semibold bg-primary-bg'
                      : 'text-foreground hover:text-primary hover:bg-primary-bg'
                  }
                `}
                onClick={handleMenuClose}>
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
