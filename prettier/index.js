import prettierConfigAndPlugin from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
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
];
