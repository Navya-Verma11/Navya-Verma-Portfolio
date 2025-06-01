/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e3f8ff',
          100: '#b3e7ff',
          200: '#80d5ff',
          300: '#4dc4ff',
          400: '#26b4fe',
          500: '#3B82F6', // Primary blue
          600: '#0062cc',
          700: '#0047a3',
          800: '#002e7a',
          900: '#001952',
        },
        accent: {
          50: '#e3fff1',
          100: '#b3ffdb',
          200: '#80ffc5',
          300: '#4dffaf',
          400: '#26fe9a',
          500: '#10B981', // Neon green
          600: '#00cc66',
          700: '#00a352',
          800: '#007a3d',
          900: '#005229',
        },
        dark: {
          50: '#f2f2f2',
          100: '#d9d9d9',
          200: '#bfbfbf',
          300: '#a6a6a6',
          400: '#8c8c8c',
          500: '#737373',
          600: '#595959',
          700: '#404040',
          800: '#262626',
          900: '#0d0d0d',
        },
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};