import prettierConfigAndPlugin from 'eslint-plugin-prettier/recommended';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  prettierConfigAndPlugin,
  {
    rules: {
      'prettier/prettier': [
        'warn',
        {
          printWidth: 100,
          singleQuote: true,
        },
      ],
    },
  },
]);
