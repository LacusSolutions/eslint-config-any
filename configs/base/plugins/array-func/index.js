import arrayFuncPlugin from 'eslint-plugin-array-func';

import rules from './rules/index.js';

const matchingFilesPattern = ['**/*.{js,jsx,mjsx,cjs,mjs,ts,tsx,mtsx,vue}'];
const baseArrayFuncConfig = arrayFuncPlugin.configs.recommended;

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ...baseArrayFuncConfig,
    files: matchingFilesPattern,
    rules: {
      ...baseArrayFuncConfig.rules,
      ...rules,
    },
  },
];
