export default {
  // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-autofocus.md
  'jsx-a11y/no-autofocus': 'off',

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
  'react/jsx-boolean-value': ['warn', 'never'],

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
  'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
  'react/jsx-curly-brace-presence': [
    'warn',
    {
      children: 'never',
      props: 'never',
      propElementValues: 'always',
    },
  ],

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
  'react/jsx-curly-spacing': [
    'warn',
    {
      when: 'never',
    },
  ],

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
  'react/jsx-equals-spacing': ['warn', 'never'],

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
  'react/jsx-filename-extension': [
    'error',
    {
      allow: 'as-needed',
      extensions: ['.jsx', '.mjsx', '.tsx', '.mtsx'],
      ignoreFilesWithoutCode: true,
    },
  ],

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
  'react/jsx-uses-react': 'off',

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
  'react/prop-types': 'off',

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
  'react/react-in-jsx-scope': 'off',
};
