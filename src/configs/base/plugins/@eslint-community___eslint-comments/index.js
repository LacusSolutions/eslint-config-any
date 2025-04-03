import eslintCommentsConfigs from '@eslint-community/eslint-plugin-eslint-comments/configs';
import { defineConfig } from 'eslint/config';

import rules from './rules/index.js';

const matchingFilesPattern = ['**/*.{js,jsx,mjsx,cjs,mjs,ts,tsx,mtsx,vue}'];
const baseJavaScriptConfig = eslintCommentsConfigs.recommended;

export default defineConfig([
  {
    ...baseJavaScriptConfig,
    files: matchingFilesPattern,
    rules: {
      ...baseJavaScriptConfig.rules,
      ...rules,
    },
  },
]);
