import * as environments from '../environments/index.js';
import { createConfig } from './create-config.js';

export default createConfig({
  name: 'any/shared-node-and-browser',
  extends: [environments.sharedNodeAndBrowser],
});
