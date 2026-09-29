import * as environments from '../environments/index.js';
import { createConfig } from './create-config.js';

export default createConfig({
  name: 'any/node',
  extends: [environments.node],
});
