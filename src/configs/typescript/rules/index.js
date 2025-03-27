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

  // https://typescript-eslint.io/rules/no-unused-vars
  '@typescript-eslint/no-unused-vars': standardRules['no-unused-vars'],
};
