export default {
  // https://github.com/willhoney7/eslint-plugin-import-helpers/blob/main/docs/rules/order-imports.md
  'import-helpers/order-imports': [
    'warn',
    {
      alphabetize: {
        order: 'asc',
        ignoreCase: true,
      },
      groups: ['module', ['/^~//', '/^@//'], ['parent', 'sibling', 'index']],
      newlinesBetween: 'always',
    },
  ],
};
