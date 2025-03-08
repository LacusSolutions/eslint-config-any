import importPlugin from 'eslint-plugin-import';

import rules from './rules/index.js';

const matchingFilesPattern = ['**/*.{js,jsx,mjsx,cjs,mjs,ts,tsx,mtsx,vue}'];

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: matchingFilesPattern,
    plugins: {
      import: importPlugin,
    },
    rules,
  },
];
