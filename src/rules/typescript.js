import tsEslint from 'typescript-eslint';

import jsRules from './js.js';

const stylisticRules = Object.keys(tsEslint.configs.stylistic.at(-1)?.rules ?? {}).reduce(
  (acc, rule) => ({ ...acc, [rule]: 'warn' }),
  {},
);

export default {
  ...stylisticRules,

  // https://typescript-eslint.io/rules/array-type
  '@typescript-eslint/array-type': [
    'warn',
    {
      default: 'array-simple',
    },
  ],

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
  '@typescript-eslint/no-unused-vars': jsRules['no-unused-vars'],

  // https://typescript-eslint.io/rules/triple-slash-reference
  '@typescript-eslint/triple-slash-reference': 'off',

  // Rules covered by TSC
  'import-x/default': 'off',
  'import-x/named': 'off',
  'import-x/namespace': 'off',
  'import-x/no-named-as-default-member': 'off',
  'import-x/no-unresolved': 'off',
};
