import standardRules from '../../base/rules/index.js';

export default {
  // https://typescript-eslint.io/rules/consistent-type-imports
  '@typescript-eslint/consistent-type-imports': [
    'warn',
    {
      disallowTypeAnnotations: true,
      fixStyle: 'inline-type-imports',
      prefer: 'type-imports',
    },
  ],

  // https://typescript-eslint.io/rules/explicit-function-return-type
  '@typescript-eslint/explicit-function-return-type': 'warn',

  // https://typescript-eslint.io/rules/explicit-member-accessibility
  '@typescript-eslint/explicit-member-accessibility': 'error',

  // https://typescript-eslint.io/rules/no-empty-function
  '@typescript-eslint/no-empty-function': 'off',
  'no-empty-function': 'off',

  // https://typescript-eslint.io/rules/no-namespace
  '@typescript-eslint/no-namespace': 'off',

  // https://typescript-eslint.io/rules/no-unused-vars
  '@typescript-eslint/no-unused-vars': standardRules['no-unused-vars'],

  // https://typescript-eslint.io/rules/triple-slash-reference
  '@typescript-eslint/triple-slash-reference': 'off',
};
