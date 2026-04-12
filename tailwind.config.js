/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Share Tech Mono"', 'monospace'],
        vt: ['"VT323"', 'monospace'],
      },
      colors: {
        purple: {
          50:  '#f5f0ff',
          100: '#ede5ff',
          200: '#d8c8ff',
          300: '#bf9ff5',
          400: '#a67de8',
          500: '#8b5cf6',
          600: '#7c3aed',
          bg:  '#9b7ed0',
          dark:'#7b5ea7',
          hero:'#6b4f9e',
          card:'#c4a8e8',
          section: '#b39ddb',
          deep: '#3d2060',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 3s ease-in-out infinite',
        'dot-pulse': 'dotPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-8px)' },
        },
        dotPulse: {
          '0%,100%': { opacity: '0.3' },
          '50%':     { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
