export default {
  // https://eslint.style/rules/jsx-closing-bracket-location
  '@stylistic/jsx-closing-bracket-location': 'warn',

  // https://eslint.style/rules/jsx-curly-brace-presence
  '@stylistic/jsx-curly-brace-presence': [
    'warn',
    {
      children: 'never',
      props: 'never',
      propElementValues: 'always',
    },
  ],

  // https://eslint.style/rules/jsx-curly-spacing
  '@stylistic/jsx-curly-spacing': [
    'warn',
    {
      when: 'never',
    },
  ],

  // https://eslint.style/rules/jsx-equals-spacing
  '@stylistic/jsx-equals-spacing': ['warn', 'never'],

  // https://eslint.style/rules/nonblock-statement-body-position
  '@stylistic/nonblock-statement-body-position': ['warn', 'beside'],

  // https://eslint.style/rules/padding-line-between-statements
  '@stylistic/padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      prev: '*',
      next: 'return',
    },
    {
      blankLine: 'always',
      prev: '*',
      next: ['if', 'while', 'do', 'switch', 'try'],
    },
    {
      blankLine: 'always',
      prev: ['if', 'while', 'do', 'switch', 'try'],
      next: '*',
    },
    {
      blankLine: 'always',
      prev: { selector: 'ExpressionStatement:has(CallExpression)' },
      next: ['const', 'let', 'var'],
    },
    {
      blankLine: 'always',
      prev: ['const', 'let', 'var'],
      next: { selector: 'ExpressionStatement:has(CallExpression)' },
    },
    {
      blankLine: 'always',
      prev: '*',
      next: ['class', 'enum', 'interface'],
    },
    {
      blankLine: 'always',
      prev: ['class', 'enum', 'interface'],
      next: '*',
    },
  ],
};
