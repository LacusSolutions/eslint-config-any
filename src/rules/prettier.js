import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const prettierPluginJsdocPath = require.resolve('prettier-plugin-jsdoc');

export default {
  'prettier/prettier': [
    'warn',
    {
      plugins: [prettierPluginJsdocPath],
      experimentalOperatorPosition: 'start',
      jsdocCommentLineStrategy: 'multiline',
      jsdocDescriptionWithDot: true,
      jsdocPrintWidth: 80,
      printWidth: 100,
      quoteProps: 'consistent',
      singleQuote: true,
    },
  ],
};
