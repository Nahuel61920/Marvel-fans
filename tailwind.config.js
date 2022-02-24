module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pattern-characters-red': "url('../img/pattern-characters-red.jpg')",
        'character-cap': "url('../img/character-l.png')",
        'pattern-characters-spider': "url('../img/spider.jpg')",
      }),
      screens:{
        'xsm': '320px'

      }
    },
  },
  plugins: [],
}
