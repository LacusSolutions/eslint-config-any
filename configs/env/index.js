import browser from './browser/index.js';
import commonjs from './commonjs/index.js';
import jest from './jest/index.js';
import node from './node/index.js';
import sharedNodeAndBrowser from './sharedNodeAndBrowser/index.js';
import vitest from './vitest/index.js';

export default {
  sharedNodeAndBrowser,
  commonjs,
  browser,
  vitest,
  jest,
  node,
};
