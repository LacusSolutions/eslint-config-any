import regexpPlugin from 'eslint-plugin-regexp';

import { JS, TS, VUE } from '../../../../utils/index.js';
import rules from './rules/index.js';

const matchingFilesPattern = [JS, TS, VUE];
const baseRegExpConfig = regexpPlugin.configs['flat/recommended'];

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ...baseRegExpConfig,
    files: matchingFilesPattern,
    rules: {
      ...baseRegExpConfig.rules,
      ...rules,
    },
  },
];
