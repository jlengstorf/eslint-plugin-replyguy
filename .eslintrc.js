const index = require('./index')

module.exports = {
  parserOptions: { ecmaVersion: 2020 },
  plugins: ['local'],
  rules: Object.entries(index.configs.all.rules).reduce(
    (acc, [rule, error]) => {
      acc[rule.replace('replyguy', 'local')] = error
      return acc
    },
    {}
  )
}
