# `eslint-plugin-replyguy`

The ESLint plugin you definitely didn’t ask for.

![The plugin in action](https://res.cloudinary.com/jlengstorf/video/upload/q_auto,f_auto,w_800/v1596869287/oss/eslint-plugin-replyguy/demo.gif)

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
