/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,cjs}'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
];
