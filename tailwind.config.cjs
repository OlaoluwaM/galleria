/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#000000',
      gray: {
        700: '#7D7D7D',
        DEFAULT: '#E5E5E5',
        200: '#F3F3F3',
      },
      white: '#FFFFFF',
    },

    extend: {
      fontFamily: {
        primary: ['Libre Baskerville', 'ui-serif'],
      },

      fontSize: {
        display: ['14.286rem', '0.75'],
        heading1: ['4rem', '1.1429'],
        heading2: ['1.71429rem', '1.20834'],
        heading3: ['1.29rem', '1.2223'],
        subhead2: ['0.929rem', '1.308'],

        subhead1: [
          '1.071429rem',
          {
            lineHeight: '1.267',
            fontWeight: '400',
          },
        ],

        'button-lg': [
          '0.86rem',
          {
            lineHeight: '1.25',
            letterSpacing: '0.209em',
          },
        ],

        'button-sm': [
          '0.6429rem',
          {
            lineHeight: '1.223',
            letterSpacing: '0.223em',
          },
        ],
      },
    },
  },
  plugins: [],
};
