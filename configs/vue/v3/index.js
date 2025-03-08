import vuePlugin from 'eslint-plugin-vue';

import { VUE } from '../../../utils/index.js';
import config from '../shared/index.js';
import rules from './rules/index.js';

const matchingFilesPattern = [VUE];

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...vuePlugin.configs['flat/recommended'],
  ...config,
  {
    files: matchingFilesPattern,
    rules,
  },
];
