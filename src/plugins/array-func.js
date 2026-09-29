import arrayFuncPlugin from 'eslint-plugin-array-func';
import { defineConfig } from 'eslint/config';

export default defineConfig({
  name: 'any/plugins/array-func',
  extends: [arrayFuncPlugin.configs.recommended],
});
