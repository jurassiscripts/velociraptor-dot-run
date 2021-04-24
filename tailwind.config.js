module.exports = {
  darkMode: 'media',
  purge: {
    options: {
      safelist: ['ml-2', 'ml-4', 'ml-6'],
    },
    content: [
      "index.njk",
      "404.html",
      "./_includes/**/*.{html,njk}",
    ],
  },
  variants: {
    extend: {
      textColor: ['group-focus'],
    },
  },
}
