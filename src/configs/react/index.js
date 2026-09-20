import reactPlugin from '@eslint-react/eslint-plugin';
import eslintReactKit from '@eslint-react/kit';
import jsxA11yXPlugin from 'eslint-plugin-jsx-a11y-x';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

import { JS, TS } from '../../utils/index.js';
import { jsxBooleanValue } from './kit/jsx-boolean-value.js';
import rules from './rules/index.js';

const matchingFilesPattern = [JS, TS];
const baseReactJsConfig = reactPlugin.configs.strict;
const baseReactTsConfig = reactPlugin.configs['strict-type-checked'];
const baseJsxA11yConfig = jsxA11yXPlugin.configs.strict;
const eslintReactKitPlugin = eslintReactKit().use(jsxBooleanValue).getPlugin();

export default defineConfig([
  {
    ...baseReactJsConfig,
    files: [JS],
  },
  {
    ...baseReactTsConfig,
    files: [TS],
  },
  {
    ...baseJsxA11yConfig,
    files: matchingFilesPattern,
  },
  {
    files: matchingFilesPattern,
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      '@eslint-react/kit': eslintReactKitPlugin,
    },
    rules,
  },
]);
