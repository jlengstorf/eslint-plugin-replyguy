const rules = {
  'no-loops': require('./lib/rules/no-loops'),
  'no-array-methods': require('./lib/rules/no-array-methods'),
  'use-triple-equals': require('./lib/rules/use-triple-equals'),
  'use-double-equals': require('./lib/rules/use-double-equals'),
};

const rulesAsErrors = Object.fromEntries(
  Object.keys(rules).map((key) => [`replyguy/${key}`, 2]),
);

module.exports = {
  rules,
  configs: {
    all: {
      plugins: ['replyguy'],
      rules: rulesAsErrors,
    },
  },
};
