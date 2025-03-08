import perfectionistPlugin from 'eslint-plugin-perfectionist';

import rules from './rules/index.js';

const matchingFilesPattern = ['**/*.{js,jsx,mjsx,cjs,mjs,ts,tsx,mtsx,vue}'];

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: matchingFilesPattern,
    plugins: {
      perfectionist: perfectionistPlugin,
    },
    rules,
  },
];
