# `eslint-plugin-replyguy`

The ESLint plugin you definitely didn’t ask for.

## Install & Config

```bash
npm install --save-dev eslint-plugin-replyguy
```

```js
module.exports = {
  parserOptions: { ecmaVersion: 2018 },
  plugins: ['replyguy'],
  rules: {
    'replyguy/use-triple-equals': 2,
    'replyguy/use-double-equals': 2,
  },
};
```
