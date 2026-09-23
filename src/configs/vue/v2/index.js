import vuePlugin from 'eslint-plugin-vue';
import { defineConfig } from 'eslint/config';

import { VUE } from '../../../utils/index.js';
import config from '../shared/index.js';
import rules from './rules/index.js';

const matchingFileBlobs = VUE.toBlobArray();
const recommendedConfig = vuePlugin.configs['flat/vue2-recommended'].map((config) => ({
  ...config,
  files: matchingFileBlobs,
}));

export default defineConfig([
  ...recommendedConfig,
  ...config,
  {
    files: matchingFileBlobs,
    rules,
  },
]);
