import eslintCommentsPlugin from '@eslint-community/eslint-plugin-eslint-comments';
import jsEslint from '@eslint/js';
import arrayFuncPlugin from 'eslint-plugin-array-func';
import importPlugin from 'eslint-plugin-import';
import importHelpersPlugin from 'eslint-plugin-import-helpers';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import regexpPlugin from 'eslint-plugin-regexp';

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
  },
  {
    files: matchingFilesPattern,
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@eslint-community/eslint-comments': eslintCommentsPlugin,
      'array-func': arrayFuncPlugin,
      import: importPlugin,
      'import-helpers': importHelpersPlugin,
      perfectionist: perfectionistPlugin,
      regexp: regexpPlugin,
    },
    rules,
  },
];
