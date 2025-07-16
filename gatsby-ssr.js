import React from 'react';

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      key="theme-init"
      dangerouslySetInnerHTML={{
        __html: `
(function() {
  try {
    var theme = localStorage.getItem('theme');
    if (
      theme === 'dark' ||
      (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
        `,
      }}
    />,
  ]);
};
