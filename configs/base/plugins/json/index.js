// eslint.config.js
import jsonEslint from '@eslint/json';

const baseJsonConfig = jsonEslint.configs.recommended;

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ...baseJsonConfig,
    files: ['**/*.json'],
    ignores: ['package-lock.json'],
    language: 'json/json',
  },
  {
    ...baseJsonConfig,
    files: ['**/*.jsonc'],
    language: 'json/jsonc',
  },
  {
    ...baseJsonConfig,
    files: ['**/*.json5'],
    language: 'json/json5',
  },
];
