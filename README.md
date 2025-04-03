# ESlint Configuration for Any JS Project

<p>
  <img src="https://img.shields.io/npm/v/eslint-config-any" alt="NPM Latest Version" />

  <img src="https://img.shields.io/npm/dependency-version/eslint-config-any/peer/eslint" alt="Minimum ESlint version" />

  <img src="https://img.shields.io/npm/dependency-version/eslint-config-any/peer/prettier" alt="Minimum Prettier version" />

  <img src="https://img.shields.io/npm/dependency-version/eslint-config-any/peer/typescript" alt="Minimum TypeScript version" />

  <img src="https://img.shields.io/npm/dm/eslint-config-any.svg?style=flat-square" alt="Downloads Count" />

  <img src="https://img.shields.io/github/last-commit/juliolmuller/eslint-config-any?" alt="Last Update Date" />

  <img src="https://img.shields.io/github/license/juliolmuller/eslint-config-any" alt="Project License" />
</p>

This package provides strict linting and formatting rules for (almost) all sorts of JavaScript stack projects, like React, Vue, Vanilla, Node and their variants in TypeScript.

## Setup

**Plug-and-paly**: this is designed to be as simple as possible to setup, so you can invest your time in your project.

1. Add the necessary packages to your development dependencies:

   ```bash
   # using NPM
   $ npm install -D eslint-config-any eslint prettier typescript

   # using Bun
   $ bun add -d eslint-config-any eslint prettier typescript
   ```

2. Create a `eslint.config.mjs` file at project root.
3. Write some boilerplate like below, selecting the presets you need:

   ```js
   // eslint.config.mjs
   import anyConfig from 'eslint-config-any';

   export default [
     ...anyConfig.react,
     ...anyConfig.vitest,
   ];
   ```

## Which Presets I Can Pick?

This package is designed to make you write the less code as possible, so you don't need to deal with scaffold-hell and learning how to setup a ESlint or Prettier configuration.

With the latest version of ESlint (9+) and its [Flat Configuration](https://eslint.org/blog/2022/08/new-config-system-part-1/), things got a little more complicated to setup, specially if you seek stricter rules for linting and formatting (like I do). However, things got way more flexible, allowing plugins and configs to apply only to certain files that actually use them for linting. For example, you'll only need `eslint-plugin-vue` for `*.vue` files, ot TypeScript-specific rules in files that actually use TS, and so on.

So you'll' just need to select one generalized preset and make small compositions in a few cases.

The current presets available are:

- `react`: for React projects, adding support not only for basic JS files but also TS, JSX and TSX extensions, as well as providing browser's global variables.
- `vue`: for Vue 3 projects, adding support not only for basic JS files but also TS and VUE extensions, as well as providing browser's global variables.
- `vue2`: similar to `vue` option, except it contains some specific rules for Vue v2 only. **Don't select both presets, as they may conflict with each other**.
- `browser`: if your project does not use nay of the previous frameworks and is meant to run in the client-side, that's the one to go with. It lints files with JS and TS extensions and provides browser's global variables.
- `node`: if you're writing code for the server-side, use this preset to lint JS and TS files, as well as providing Node's global variables.
- `sharedNodeAndBrowser`: if you're project targets browser and node environments, this not only lints JS and TS files, but also ensure you only use global variables that are available in both environments.
- `commonjs`: all the presets above consider projects using ES Modules. But if you're using CommonJS, combine this option to make this standard compatible.
- `jest`: if you're using Jest as test runner, add this preset in combination of another to allow Jest variables.
- `vitest`: if you're using Vitest as test runner, add this preset in combination of another to allow Vitest variables.

## Customization

Not everyone follow the same rules. Uf you're project is one of these, you can enable disable rules by adding a new object to the configs array:

```js
// eslint.config.mjs
import anyConfig from 'eslint-config-any';

export default [
  ...anyConfig.node,
  ...anyConfig.commonjs,
  ...anyConfig.jest,
  {
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      'no-console': 'off',
    },
  },
];
```

## Contribute

Feel free to submit a Pull Request to this project and suggest stricter rules, plugins, fixes and documentation enhancements.
