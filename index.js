const rules = {
  'no-loops': require('./lib/rules/no-loops'),
  'no-array-methods': require('./lib/rules/no-array-methods'),
  'use-triple-equals': require('./lib/rules/use-triple-equals'),
  'use-double-equals': require('./lib/rules/use-double-equals'),
  'i-have-a-daughter': require('./lib/rules/i-have-a-daughter'),
  'no-const': require('./lib/rules/no-let-const'),
}

const rulesAsErrors = Object.fromEntries(
  Object.keys(rules).map((key) => [`replyguy/${key}`, 2])
)

module.exports = {
  rules,
  configs: {
    all: {
      plugins: ['replyguy'],
      rules: rulesAsErrors,
    },
  },
}
