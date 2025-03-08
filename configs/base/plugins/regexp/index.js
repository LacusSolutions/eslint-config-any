import regexpPlugin from 'eslint-plugin-regexp';

import rules from './rules/index.js';

const matchingFilesPattern = ['**/*.{js,jsx,mjsx,cjs,mjs,ts,tsx,mtsx,vue}'];
const baseRegExpConfig = regexpPlugin.configs['flat/recommended'];

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ...baseRegExpConfig,
    files: matchingFilesPattern,
    rules: {
      ...baseRegExpConfig.rules,
      ...rules,
    },
  },
];
