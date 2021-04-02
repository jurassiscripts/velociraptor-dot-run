module.exports = {
  darkMode: 'media',
  purge: ["./_includes/**/*.{html,njk}"],
  variants: {
    extend: {
      textColor: ['group-focus'],
    },
  },
}
