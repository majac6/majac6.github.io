import React from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

const Navigation = () => {
  const location = useLocation();
  
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

  return (
    <nav className="print:hidden border-b border-gray-200 bg-white sticky top-0 z-30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link to="/" className="text-lg font-bold tracking-tight hover:text-primary-600 transition-colors">
            HungSun LIM
          </Link>

          {/* 네비게이션 메뉴 */}
          <div className="flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors
                  ${isActive(item.path)
                    ? 'text-primary-600 font-semibold border-b-2 border-primary-600'
                    : 'text-gray-700 hover:text-primary-600 hover:border-b-2 hover:border-primary-200'}
                `}
                style={{
                  borderBottomWidth: isActive(item.path) ? '2px' : '0',
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 