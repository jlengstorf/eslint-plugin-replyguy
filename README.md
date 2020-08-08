# `eslint-plugin-replyguy`

The ESLint plugin you definitely didn’t ask for.

![The plugin in action](https://res.cloudinary.com/jlengstorf/video/upload/vs_60,dl_150,e_loop/v1596922463/oss/eslint-plugin-replyguy/wnkulwmpqhfdkej133in.gif)

This plugin was inspired by [@cassidoo’s Reply Guys video](https://twitter.com/cassidoo/status/1284201376516435968) and multiple daily reminders that no matter what you tweet, there’s a Reply Guy ready to tell you you’re wrong.

## Install & Config

```bash
npm install --save-dev eslint-plugin-replyguy
```

In your `.eslintrc.js`, add this plugin as a preset:

```js
module.exports = {
  extends: ['plugin:replyguy/all'],
};
```

## Why You Should Use This Plugin

If you want your development experience to closely mirror what it’s like to share code on Twitter, you’ll love this ESLint config!

The rules in this repo are mostly untested and largely based on something read somewhere once and half-remembered but asserted as Absolute Truth™.

## Contributions Welcome

Please submit your favorite contradictory opinions as enforceable rules. Only changes that result in circular errors will be merged. But don’t you _dare_ submit tests or types or something that would make this repo look like quality software.
