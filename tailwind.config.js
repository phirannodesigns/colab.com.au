const tw = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        'transparent-black': 'hsla(0, 0%, 0%, 0.5)',
        fuschia: '#CA0088',
        gray: {
          ...tw.colors.gray,
          '200': '#f3f3f4',
        },
      },
      fontFamily: {
        display: ['True North', ...tw.fontFamily.sans],
        sans: ['Poppins', ...tw.fontFamily.sans],
      },
      maxWidth: {
        '1920': '1920px',
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
