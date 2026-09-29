import * as environments from '../environments/index.js';
import * as files from '../files/index.js';
import * as rules from '../rules/index.js';
import { createAddonConfig } from './create-config.js';

export default createAddonConfig({
  name: 'any/commonjs',
  files: files.cjs,
  extends: [environments.commonjs],
  rules: rules.commonjs,
});
