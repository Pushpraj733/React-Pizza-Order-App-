/** @type {import('tailwindcss').Config} */
// *Disable the eslint warnings by below comment
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },
    height: {
      screen: '100dvh',
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
