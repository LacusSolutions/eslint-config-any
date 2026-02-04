import prettierConfigAndPlugin from 'eslint-plugin-prettier/recommended';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  prettierConfigAndPlugin,
  {
    rules: {
      'prettier/prettier': [
        'warn',
        {
          plugins: ['prettier-plugin-jsdoc'],
          jsdocCommentLineStrategy: 'multiline',
          jsdocDescriptionWithDot: true,
          jsdocPrintWidth: 80,
          printWidth: 100,
          singleQuote: true,
        },
      ],
    },
  },
]);
