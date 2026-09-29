import { defineConfig } from 'eslint/config';
import tsEslint from 'typescript-eslint';

import { VUE } from '../files/index.js';

export default defineConfig({
  name: 'any/plugins/typescript',
  extends: [tsEslint.configs.recommended],
  languageOptions: {
    parserOptions: {
      projectService: true,
      extraFileExtensions: VUE.toDottedArray(),
    },
  },
});
