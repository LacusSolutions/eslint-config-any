// eslint.config.js
import jsonEslint from '@eslint/json';
import { defineConfig } from 'eslint/config';

import { JSON, JSON5, JSONC } from '../../../../utils/index.js';

const baseJsonConfig = jsonEslint.configs.recommended;

export default defineConfig([
  {
    ...baseJsonConfig,
    files: JSON.toBlobArray(),
    ignores: ['package-lock.json'],
    language: 'json/json',
  },
  {
    ...baseJsonConfig,
    files: JSONC.toBlobArray(),
    language: 'json/jsonc',
  },
  {
    ...baseJsonConfig,
    files: JSON5.toBlobArray(),
    language: 'json/json5',
  },
]);
