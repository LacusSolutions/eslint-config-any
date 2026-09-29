import { defineConfig } from 'eslint/config';

import { node } from './dist/index.js';

export default defineConfig([
  ...node(),
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
