import importHelpersPlugin from 'eslint-plugin-import-helpers';
import { defineConfig } from 'eslint/config';

import { JS, toBlob, TS, VUE } from '../../../../utils/index.js';
import rules from './rules/index.js';

const matchingFilBlobs = toBlob(JS, TS, VUE);

export default defineConfig([
  {
    files: matchingFilBlobs,
    plugins: {
      'import-helpers': importHelpersPlugin,
    },
    rules,
  },
]);
