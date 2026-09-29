import jsEslint from '@eslint/js';
import { defineConfig } from 'eslint/config';

export default defineConfig({
  name: 'any/plugins/js',
  extends: [jsEslint.configs.recommended],
});
