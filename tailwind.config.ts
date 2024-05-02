import theme from 'tailwindcss/defaultTheme.ts';

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: { min: '280px', max: '380px' },
        md: { min: '381px', max: '710px' },
        lg: { min: '710px' },
      },
      colors: {
        primary: '#4E6866',
        concept: '#60807D',
        'concept-hover': '#6d918e',
        'concept-green': '#465E5C',
        'concept-outline': '#b4b4b4',
        'concept-gray-outline': '#c5c5c5',
        'concept-title': '#626262',
        'concept-bright-bg': '#e7e7e7',
        'concept-bg': '#f5f5f5',
        'concept-disabled-bg': '#e1e1e1',
      },
      minWidth: {
        modal: '46.875vw',
      },
      transitionProperty: {
        scene: 'width, margin',
      },
    },
  },
  plugins: [],
};
