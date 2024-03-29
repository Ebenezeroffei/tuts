module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      translate: ['group-hover', 'hover'],
      scale: ['group-hover', 'hover'],
      height: ['group-hover', 'hover'],
    },
  },
  plugins: [],
}
