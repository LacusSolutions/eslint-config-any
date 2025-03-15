// eslint.config.js
import jsonEslint from '@eslint/json';
import { defineConfig } from 'eslint/config';

import { JSON, JSON5, JSONC } from '../../../../utils/index.js';

const baseJsonConfig = jsonEslint.configs.recommended;

export default defineConfig([
  {
    ...baseJsonConfig,
    files: [JSON],
    ignores: ['package-lock.json'],
    language: 'json/json',
  },
  {
    ...baseJsonConfig,
    files: [JSONC],
    language: 'json/jsonc',
  },
  {
    ...baseJsonConfig,
    files: [JSON5],
    language: 'json/json5',
  },
]);
