import configs, {
  browser,
  commonjs,
  jest,
  next,
  node,
  react,
  sharedNodeAndBrowser,
  vitest,
  vue,
  vue2,
} from './configs/index.js';
import environments from './environments/index.js';
import * as files from './files/index.js';
import plugins from './plugins/index.js';
import rules from './rules/index.js';

/**
 * @typedef {import('eslint').Linter.Config[]} EslintFlatConfig
 *
 * @typedef {import('./configs/create-config.js').ConfigOptions} ConfigOptions
 *
 * @typedef {(options?: ConfigOptions) => EslintFlatConfig} ConfigFactory
 */

export { configs, environments, files, plugins, rules };
export { browser, commonjs, jest, next, node, react, sharedNodeAndBrowser, vitest, vue, vue2 };

export default {
  files,
  environments,
  plugins,
  rules,
  configs,
  commonjs,
  jest,
  vitest,
  node,
  browser,
  sharedNodeAndBrowser,
  react,
  next,
  vue,
  vue2,
};
