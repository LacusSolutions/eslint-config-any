import jsEslint from '@eslint/js';

import eslintCommentsConfigs from './plugins/@eslint-community___eslint-comments/index.js';
import arrayFuncConfigs from './plugins/array-func/index.js';
import importHelpersConfigs from './plugins/import-helpers/index.js';
import importConfigs from './plugins/import/index.js';
import perfectionistConfigs from './plugins/perfectionist/index.js';
import regexpConfigs from './plugins/regexp/index.js';
import rules from './rules/index.js';

const matchingFilesPattern = ['**/*.{js,jsx,mjsx,cjs,mjs,ts,tsx,mtsx,vue}'];
const baseJavaScriptConfig = jsEslint.configs.recommended;

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['**/coverage/**', '**/build/**', '**/dist/**', '**/*.min.js'],
  },
  {
    ...baseJavaScriptConfig,
    files: matchingFilesPattern,
    rules: {
      ...baseJavaScriptConfig.rules,
      ...rules,
    },
  },
  ...eslintCommentsConfigs,
  ...arrayFuncConfigs,
  ...importConfigs,
  ...importHelpersConfigs,
  ...perfectionistConfigs,
  ...regexpConfigs,
];
