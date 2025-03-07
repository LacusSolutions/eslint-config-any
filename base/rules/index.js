export default {
  // https://eslint.org/docs/rules/no-unused-vars
  'no-unused-vars': [
    'error',
    {
      args: 'all',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    },
  ],

  // TODO: review and add documentation URL
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
  'no-secrets/no-secrets': 'warn',
  'perfectionist/sort-classes': 'off',
  'perfectionist/sort-decorators': 'warn',
  'perfectionist/sort-enums': 'warn',
  'perfectionist/sort-exports': 'warn',
  'perfectionist/sort-heritage-clauses': 'warn',
  'perfectionist/sort-imports': 'off', // keep it disabled to avoid conflicting with import-helpers
  'perfectionist/sort-interfaces': 'warn',
  'perfectionist/sort-intersection-types': 'warn',
  'perfectionist/sort-jsx-props': 'off', // keep it disabled to avoid conflicting with react
  'perfectionist/sort-maps': ['warn', { type: 'line-length' }],
  'perfectionist/sort-modules': 'off',
  'perfectionist/sort-named-exports': 'warn',
  'perfectionist/sort-named-imports': 'warn',
  'perfectionist/sort-object-types': 'warn',
  'perfectionist/sort-objects': 'off',
  'perfectionist/sort-sets': 'warn',
  'perfectionist/sort-switch-case': 'warn',
  'perfectionist/sort-union-types': 'warn',
  'perfectionist/sort-variable-declarations': 'off',
};
