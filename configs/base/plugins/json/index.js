// eslint.config.js
import jsonEslint from '@eslint/json';

import { JSON, JSON5, JSONC } from '../../../../utils/index.js';
const baseJsonConfig = jsonEslint.configs.recommended;

/** @type {import('eslint').Linter.Config[]} */
export default [
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
];
