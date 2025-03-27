export default {
  // https://eslint.org/docs/rules/eqeqeq
  eqeqeq: 'error',

  // https://eslint.org/docs/rules/func-style
  'func-style': [
    'error',
    'declaration',
    {
      allowArrowFunctions: true,
    },
  ],

  // https://eslint.org/docs/rules/no-console
  'no-console': [
    'error',
    {
      allow: [console.error.name, console.info.name, console.warn.name],
    },
  ],

  // https://eslint.org/docs/rules/no-empty-function
  'no-empty-function': 'off',

  // https://eslint.org/docs/rules/no-unused-vars
  'no-unused-vars': [
    'error',
    {
      args: 'all',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    },
  ],

  // https://eslint.org/docs/rules/prefer-arrow-callback
  'prefer-arrow-callback': 'error',

  // https://eslint.org/docs/rules/prefer-const
  'prefer-const': 'error',

  // https://eslint.org/docs/rules/prefer-template
  'prefer-template': 'error',
};
