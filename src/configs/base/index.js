import jsEslint from '@eslint/js';
import { defineConfig } from 'eslint/config';

import { DTS, JS, toBlob, TS, VUE } from '../../utils/index.js';
import eslintCommentsConfigs from './plugins/@eslint-community___eslint-comments/index.js';
import stylisticConfigs from './plugins/@stylistic/index.js';
import arrayFuncConfigs from './plugins/array-func/index.js';
import importHelpersConfigs from './plugins/import-helpers/index.js';
import importXConfigs from './plugins/import-x/index.js';
import jsonConfigs from './plugins/json/index.js';
import markdownConfigs from './plugins/markdown/index.js';
import perfectionistConfigs from './plugins/perfectionist/index.js';
import regexpConfigs from './plugins/regexp/index.js';
import rules from './rules/index.js';

const matchingFileBlobs = toBlob(JS, TS, DTS, VUE);

export default defineConfig([
  {
    ignores: [
      '**/node_modules/**',
      '**/build/**',
      '**/dist/**',
      '**/out/**',
      '**/coverage/**',
      '**/*.min.js',
      '**/.next/**',
      '**/next-env.d.ts',
    ],
  },
  {
    ...jsEslint.configs.recommended,
    files: matchingFileBlobs,
  },
  ...jsonConfigs,
  ...markdownConfigs,
  ...eslintCommentsConfigs,
  ...arrayFuncConfigs,
  ...importXConfigs,
  ...importHelpersConfigs,
  ...perfectionistConfigs,
  ...regexpConfigs,
  ...stylisticConfigs,
  {
    files: matchingFileBlobs,
    rules,
  },
]);
