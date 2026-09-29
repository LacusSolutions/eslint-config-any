import * as environments from '../environments/index.js';
import * as files from '../files/index.js';
import { createAddonConfig } from './create-config.js';

export default createAddonConfig({
  name: 'any/jest',
  files: files.test,
  extends: [environments.jest],
});
