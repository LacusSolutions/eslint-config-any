import vuePlugin from 'eslint-plugin-vue';

import config from '../shared/index.js';
import rules from './rules/index.js';

const matchingFilesPattern = ['**/*.vue'];

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...vuePlugin.configs['flat/recommended'],
  ...config,
  {
    files: matchingFilesPattern,
    rules,
  },
];
