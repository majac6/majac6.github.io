/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx,md}'],
  safelist: [
    'prose',
    'prose-lg',
    'prose-invert', // dark mode 고려 시
  ],
  plugins: [require('@tailwindcss/typography')],
};
