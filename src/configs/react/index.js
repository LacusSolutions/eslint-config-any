import reactPlugin from '@eslint-react/eslint-plugin';
import eslintReactKit from '@eslint-react/kit';
import jsxA11yXPlugin from 'eslint-plugin-jsx-a11y-x';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

import { JS, TS } from '../../utils/index.js';
import { jsxBooleanValue } from './kit/jsx-boolean-value.js';
import rules from './rules/index.js';

const matchingJsFileBlobs = JS.toBlobArray();
const matchingTsFileBlobs = TS.toBlobArray();
const matchingAllFileBlobs = [...matchingJsFileBlobs, ...matchingTsFileBlobs];

export default defineConfig([
  {
    ...reactPlugin.configs.strict,
    files: matchingJsFileBlobs,
  },
  {
    ...reactPlugin.configs['strict-type-checked'],
    files: matchingTsFileBlobs,
  },
  {
    ...jsxA11yXPlugin.configs.strict,
    files: matchingAllFileBlobs,
  },
  {
    files: matchingAllFileBlobs,
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      '@eslint-react/kit': eslintReactKit().use(jsxBooleanValue).getPlugin(),
    },
    rules,
  },
]);
