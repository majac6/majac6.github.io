/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#ffffff',
          dark: '#0f172a', // slate-900
        },
        foreground: {
          DEFAULT: '#0f172a', // slate-900
          dark: '#f1f5f9',    // slate-100
        },
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          DEFAULT: '#10b981',
          dark: '#34d399',
        },
      },
      fontFamily: {
        'sans': ['Spoqa Han Sans', 'Spoqa Han Sans Neo', 'Spoqa Han Sans JP', 'Source Sans Pro', 'Apple SD Gothic Neo', 'Nanum Barun Gothic', 'Nanum Gothic', '돋움', 'Dotum', 'Verdana', 'Arial', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 