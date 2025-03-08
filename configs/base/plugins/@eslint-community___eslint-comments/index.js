import eslintCommentsConfigs from '@eslint-community/eslint-plugin-eslint-comments/configs';

import rules from './rules/index.js';

const matchingFilesPattern = ['**/*.{js,jsx,mjsx,cjs,mjs,ts,tsx,mtsx,vue}'];
const baseJavaScriptConfig = eslintCommentsConfigs.recommended;

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ...baseJavaScriptConfig,
    files: matchingFilesPattern,
    rules: {
      ...baseJavaScriptConfig.rules,
      ...rules,
    },
  },
];
