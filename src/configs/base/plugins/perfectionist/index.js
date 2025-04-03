import perfectionistPlugin from 'eslint-plugin-perfectionist';
import { defineConfig } from 'eslint/config';

import { JS, TS, VUE } from '../../../../utils/index.js';
import rules from './rules/index.js';

const matchingFilesPattern = [JS, TS, VUE];

export default defineConfig([
  {
    files: matchingFilesPattern,
    plugins: {
      perfectionist: perfectionistPlugin,
    },
    rules,
  },
]);
