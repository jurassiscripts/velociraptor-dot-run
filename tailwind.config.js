module.exports = {
  darkMode: 'media',
  purge: [
    "index.njk",
    "404.html",
    "./_includes/**/*.{html,njk}",
  ],
  variants: {
    extend: {
      textColor: ['group-focus'],
    },
  },
}
