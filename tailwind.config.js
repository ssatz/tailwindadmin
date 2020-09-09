const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  purge: [
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          '200': '#F0F5F9',
          '900':'#3E475E'
        }
      }
    }
  },
  variants: {},
  plugins: []
}
