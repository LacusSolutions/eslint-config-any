import importHelpersPlugin from 'eslint-plugin-import-helpers';

import { JS, TS, VUE } from '../../../../utils/index.js';
import rules from './rules/index.js';

const matchingFilesPattern = [JS, TS, VUE];

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: matchingFilesPattern,
    plugins: {
      'import-helpers': importHelpersPlugin,
    },
    rules,
  },
];
