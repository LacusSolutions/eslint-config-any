# ESLint Configuration for Any JS Project

![NPM Latest Version](https://img.shields.io/npm/v/eslint-config-any)
![Downloads Count](https://img.shields.io/npm/dm/eslint-config-any.svg)
![Test Status](https://img.shields.io/github/actions/workflow/status/LacusSolutions/eslint-config-any/publish.yml?label=ci/cd)
![Last Update Date](https://img.shields.io/github/last-commit/LacusSolutions/eslint-config-any)
![Project License](https://img.shields.io/github/license/LacusSolutions/eslint-config-any)

This package provides strict linting and formatting rules for (almost) all sorts of JavaScript stack projects, like React, Next.js, Vue, Vanilla, Node and their variants in TypeScript.

Requires **ESLint 10+** and **Node 22+**.

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

With ESLint 10+ and its [Flat Configuration](https://eslint.org/blog/2022/08/new-config-system-part-1/), things got a little more complicated to setup, specially if you seek stricter rules for linting and formatting (like I do). However, things got way more flexible, allowing plugins and configs to apply only to certain files that actually use them for linting. For example, you'll only need `eslint-plugin-vue` for `*.vue` files, ot TypeScript-specific rules in files that actually use TS, and so on.

So you'll' just need to select one generalized preset and make small compositions in a few cases.

The current presets available are:

- `react`: for React projects, adding support not only for basic JS files but also TS, JSX and TSX extensions, as well as providing browser's global variables.
- `next`: for Next.js projects. Includes the full `react` stack plus `@next/eslint-plugin-next` (`core-web-vitals`). **Don't select both `react` and `next`, as they overlap**.
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
      'import-x/no-duplicates': 'off',
      'jsx-a11y-x/no-autofocus': 'error',
    },
  },
];
```

React/import/a11y/Next overrides use `@eslint-react/*`, `import-x/*`, `jsx-a11y-x/*`, and `@next/next/*` (not `react/*`, `react-hooks/*`, `import/*`, or `jsx-a11y/*`).

If the Next app is not at the ESLint cwd (monorepo), set `settings.next.rootDir` in your config.

## ESLint 10 notes

- `eslint:recommended` now includes `no-unassigned-vars`, `no-useless-assignment`, and `preserve-caught-error`. This package leaves them on.
- `/* eslint-env */` comments are errors; use `languageOptions.globals` or these presets.
- Config files are resolved from each linted file upward (monorepos: put `eslint.config.*` where the files live, or pass `--config`).
- `.eslintignore` is gone; if you need gitignore-driven ignores, use `includeIgnoreFile()` from `eslint/config` in **your** config.
- JSX components count as variable references (`no-unused-vars` / `no-undef`).
- `no-shadow-restricted-names` reports `globalThis` by default.
- React rules are `@eslint-react/*`, not `react/*` / `react-hooks/*`. Import rules are `import-x/*`, not `import/*`. A11y rules are `jsx-a11y-x/*`. Next.js rules are `@next/next/*`.
- `import-x/extensions` omits JS/TS/Vue extensions. That fights `moduleResolution: "node16"` / `"nodenext"` (TypeScript requires `.js` in import specifiers). Override to `'off'` or `'always'` in that case.
- On `*.ts` / `*.vue`, `import-x/named`, `namespace`, `default`, `no-unresolved`, and `no-named-as-default-member` are off — `tsc` already covers them.

## Contribute

Feel free to submit a Pull Request to this project and suggest stricter rules, plugins, fixes and documentation enhancements.
