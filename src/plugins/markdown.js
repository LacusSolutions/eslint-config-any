import markdownEslint from '@eslint/markdown';
import { defineConfig } from 'eslint/config';

export default defineConfig({
  name: 'any/plugins/markdown',
  extends: [markdownEslint.configs.recommended],
});
