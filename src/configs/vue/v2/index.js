import vuePlugin from 'eslint-plugin-vue';
import { defineConfig } from 'eslint/config';

import { VUE } from '../../../utils/index.js';
import config from '../shared/index.js';
import rules from './rules/index.js';

const matchingFilesPattern = [VUE];
const recommendedConfig = vuePlugin.configs['flat/vue2-recommended'].map((config) => ({
  ...config,
  files: matchingFilesPattern,
}));

export default defineConfig([
  ...recommendedConfig,
  ...config,
  {
    files: matchingFilesPattern,
    rules,
  },
]);
