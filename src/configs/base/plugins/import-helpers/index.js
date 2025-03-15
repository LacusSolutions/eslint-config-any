import importHelpersPlugin from 'eslint-plugin-import-helpers';
import { defineConfig } from 'eslint/config';

import { JS, TS, VUE } from '../../../../utils/index.js';
import rules from './rules/index.js';

const matchingFilesPattern = [JS, TS, VUE];

export default defineConfig([
  {
    files: matchingFilesPattern,
    plugins: {
      'import-helpers': importHelpersPlugin,
    },
    rules,
  },
]);
