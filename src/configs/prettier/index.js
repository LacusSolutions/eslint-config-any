import prettierConfigAndPlugin from 'eslint-plugin-prettier/recommended';
import { defineConfig } from 'eslint/config';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const prettierPluginJsdocPath = require.resolve('prettier-plugin-jsdoc');

export default defineConfig([
  prettierConfigAndPlugin,
  {
    rules: {
      'prettier/prettier': [
        'warn',
        {
          plugins: [prettierPluginJsdocPath],
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
