import * as environments from '../environments/index.js';
import * as files from '../files/index.js';
import * as plugins from '../plugins/index.js';
import * as rules from '../rules/index.js';
import { createConfig } from './create-config.js';

export default createConfig({
  name: 'any/vue',
  files: files.scriptsAndVue,
  typescriptFiles: files.typescriptAndVue,
  extraLayers: [
    {
      name: 'any/vue',
      files: files.vue,
      extends: [environments.browser, plugins.Configs.parser, plugins.Configs.vue3],
      rules: { ...rules.vue, ...rules.vue3 },
    },
  ],
});
