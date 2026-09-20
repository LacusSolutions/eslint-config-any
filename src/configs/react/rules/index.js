export default {
  // https://github.com/es-tooling/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/no-autofocus.md
  'jsx-a11y-x/no-autofocus': 'off',

  // https://eslint-react.xyz/docs/migrating-from-eslint-plugin-react
  '@eslint-react/kit/jsx-boolean-value': ['warn', 'never'],
  '@stylistic/jsx-closing-bracket-location': 'warn',
  '@stylistic/jsx-curly-brace-presence': [
    'warn',
    {
      children: 'never',
      props: 'never',
      propElementValues: 'always',
    },
  ],
  '@stylistic/jsx-curly-spacing': [
    'warn',
    {
      when: 'never',
    },
  ],
  '@stylistic/jsx-equals-spacing': ['warn', 'never'],
  '@stylistic/nonblock-statement-body-position': ['warn', 'beside'],
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
