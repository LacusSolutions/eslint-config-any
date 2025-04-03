import regexpPlugin from 'eslint-plugin-regexp';
import { defineConfig } from 'eslint/config';

import { JS, TS, VUE } from '../../../../utils/index.js';
import rules from './rules/index.js';

const matchingFilesPattern = [JS, TS, VUE];
const baseRegExpConfig = regexpPlugin.configs['flat/recommended'];

export default defineConfig([
  {
    ...baseRegExpConfig,
    files: matchingFilesPattern,
    rules: {
      ...baseRegExpConfig.rules,
      ...rules,
    },
  },
]);
