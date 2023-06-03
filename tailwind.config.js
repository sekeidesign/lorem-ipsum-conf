/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      brand: ['Darker Grotesque', 'sans-serif'],
      sans: ['Inter', 'sans-serif'],
    },
    colors: {
      neutral: {
        100: '#F2EAE1',
        300: '#E6DBCF',
        400: '#D9CDBF',
        700: '#998E82',
        900: '#1A1918',
      },
      brand: {
        green: '#25582C',
        orange: '#EA5929',
        pink: '#F3B1A8',
        yellow: '#F6C15D',
      },
    },
    transitionTimingFunction: {
      fun: 'cubic-bezier(0.8, 0, 0.2, 1)',
    },
    extend: {
      fontSize: {
        '9xl': '7rem',
        '10xl': '7.5rem',
      },
    },
  },
  plugins: [],
};
