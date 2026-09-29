import * as environments from '../environments/index.js';
import * as files from '../files/index.js';
import * as plugins from '../plugins/index.js';
import * as rules from '../rules/index.js';
import { createConfig } from './create-config.js';

export const reactScriptFiles = [...files.js, ...files.ts];

export const reactExtraLayers = [
  {
    name: 'any/react/js',
    files: files.js,
    extends: [plugins.reactConfigs.strict],
  },
  {
    name: 'any/react/ts',
    files: files.ts,
    extends: [plugins.reactConfigs.strictTypeChecked],
  },
  {
    name: 'any/react/shared',
    files: reactScriptFiles,
    extends: [plugins.reactConfigs.kit, plugins.jsxA11yXConfigs],
    rules: rules.react,
  },
];

export default createConfig({
  name: 'any/react',
  extends: [environments.browser],
  extraLayers: reactExtraLayers,
});
