import jsConfig from './base/index.js';
import envConfig from './env/index.js';
import prettierConfig from './prettier/index.js';
import reactConfig from './react/index.js';
import tsConfig from './typescript/index.js';
import vueConfig from './vue/index.js';

/**
 * @typedef {import('eslint').Linter.Config[]} EslintFlatConfig
 *
 * @typedef {Object} EslintFlatConfigSetup
 * @property {EslintFlatConfig} node
 * @property {EslintFlatConfig} browser
 * @property {EslintFlatConfig} sharedNodeAndBrowser
 * @property {EslintFlatConfig} commonjs
 * @property {EslintFlatConfig} react
 * @property {EslintFlatConfig} vue
 * @property {EslintFlatConfig} vue2
 */

/**
 * @param {EslintFlatConfig} otherConfigs
 * @return {EslintFlatConfig}
 */
function mergeConfigs(otherConfigs) {
  return [...jsConfig, ...tsConfig, ...otherConfigs, ...prettierConfig];
}

/** @type {EslintFlatConfigSetup} */
export default {
  node: mergeConfigs(envConfig.node),
  browser: mergeConfigs(envConfig.browser),
  sharedNodeAndBrowser: mergeConfigs(envConfig.sharedNodeAndBrowser),
  commonjs: mergeConfigs(envConfig.commonjs),
  react: mergeConfigs(reactConfig),
  vue: mergeConfigs(vueConfig.vue3),
  vue2: mergeConfigs(vueConfig.vue2),
};
