import jsonEslint from '@eslint/json';
import { defineConfig } from 'eslint/config';

const baseJsonConfig = jsonEslint.configs.recommended;

export const json = defineConfig({
  name: 'any/plugins/json',
  extends: [baseJsonConfig],
  language: 'json/json',
  ignores: ['package-lock.json'],
});

export const jsonc = defineConfig({
  name: 'any/plugins/jsonc',
  extends: [baseJsonConfig],
  language: 'json/jsonc',
});

export const json5 = defineConfig({
  name: 'any/plugins/json5',
  extends: [baseJsonConfig],
  language: 'json/json5',
});

export default {
  json,
  jsonc,
  json5,
};
