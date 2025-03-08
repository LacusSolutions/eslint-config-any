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
};
