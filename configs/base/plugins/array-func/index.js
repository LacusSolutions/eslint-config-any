import arrayFuncPlugin from 'eslint-plugin-array-func';

import { JS, TS, VUE } from '../../../../utils/index.js';
import rules from './rules/index.js';

const matchingFilesPattern = [JS, TS, VUE];
const baseArrayFuncConfig = arrayFuncPlugin.configs.recommended;

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ...baseArrayFuncConfig,
    files: matchingFilesPattern,
    rules: {
      ...baseArrayFuncConfig.rules,
      ...rules,
    },
  },
];
