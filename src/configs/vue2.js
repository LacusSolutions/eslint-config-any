import * as environments from '../environments/index.js';
import * as files from '../files/index.js';
import * as plugins from '../plugins/index.js';
import * as rules from '../rules/index.js';
import { createConfig } from './create-config.js';

export default createConfig({
  name: 'any/vue2',
  files: files.scriptsAndVue,
  typescriptFiles: files.typescriptAndVue,
  extraLayers: [
    {
      name: 'any/vue2',
      files: files.vue,
      extends: [environments.browser, plugins.Configs.parser, plugins.Configs.vue2],
      rules: { ...rules.vue, ...rules.vue2 },
    },
  ],
});
