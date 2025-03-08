import { CJS } from '../../../utils/index.js';

const matchingFilesPattern = [CJS];

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: matchingFilesPattern,
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
];
