import React from 'react';
import Helmet from 'react-helmet';
import Navigation from './Navigation';

const Layout = ({ children, title = "Senior Frontend Engineer : HungSun LIM" }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      <Helmet title={title}>
        <html lang="ko" />
        <meta name="description" content="Senior Frontend Engineer HungSun LIM의 포트폴리오" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Navigation />
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-12">
        {children}
      </main>
      <footer className="border-t border-gray-200 py-8 mt-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="text-base font-semibold opacity-70 mb-2">
              Thanks for visiting
            </div>
            <div className="space-x-4">
              <a 
                href="https://github.com/majac6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-600 transition-colors text-sm underline-offset-2 hover:underline"
                aria-label="GitHub 프로필"
              >
                GitHub
              </a>
              <a 
                href="https://www.facebook.com/majac6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-600 transition-colors text-sm underline-offset-2 hover:underline"
                aria-label="Facebook 프로필"
              >
                Facebook
              </a>
              <a 
                href="https://www.linkedin.com/in/hungsun-lim-a37824106/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-600 transition-colors text-sm underline-offset-2 hover:underline"
                aria-label="LinkedIn 프로필"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
