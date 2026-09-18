import { defineConfig } from 'eslint/config';

import jlmConfig from './dist/index.js';

export default defineConfig([
  ...jlmConfig.node,
  {
    rules: {
      'import-x/extensions': [
        'warn',
        'ignorePackages',
        {
          fix: true,
        },
      ],
    },
  },
]);
