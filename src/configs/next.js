import * as environments from '../environments/index.js';
import * as plugins from '../plugins/index.js';
import { createConfig } from './create-config.js';
import { reactExtraLayers, reactScriptFiles } from './react.js';

export default createConfig({
  name: 'any/next',
  extends: [environments.browser],
  extraLayers: [
    ...reactExtraLayers,
    {
      name: 'any/next',
      files: reactScriptFiles,
      extends: [plugins.nextConfigs],
    },
  ],
});
