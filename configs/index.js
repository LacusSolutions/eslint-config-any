import jsConfigs from './base/index.js';
import envConfigs from './env/index.js';
import prettierConfigs from './prettier/index.js';
import reactConfigs from './react/index.js';
import tsConfigs from './typescript/index.js';
import vueConfigs from './vue/index.js';

/**
 * @typedef {import('eslint').Linter.Config[]} EslintFlatConfig
 *
 * @typedef {Object} EslintFlatConfigSetup
 * @property {EslintFlatConfig} commonjs
 * @property {EslintFlatConfig} jest
 * @property {EslintFlatConfig} vitest
 * @property {EslintFlatConfig} node
 * @property {EslintFlatConfig} browser
 * @property {EslintFlatConfig} sharedNodeAndBrowser
 * @property {EslintFlatConfig} react
 * @property {EslintFlatConfig} vue
 * @property {EslintFlatConfig} vue2
 */

/**
 * @param {EslintFlatConfig} otherConfigs
 * @return {EslintFlatConfig}
 */
function mergeConfigs(otherConfigs) {
  return [...jsConfigs, ...tsConfigs, ...otherConfigs, ...prettierConfigs];
}

/** @type {EslintFlatConfigSetup} */
export default {
  commonjs: envConfigs.commonjs,
  jest: envConfigs.jest,
  vitest: envConfigs.vitest,
  node: mergeConfigs(envConfigs.node),
  browser: mergeConfigs(envConfigs.browser),
  sharedNodeAndBrowser: mergeConfigs(envConfigs.sharedNodeAndBrowser),
  react: mergeConfigs(reactConfigs),
  vue: mergeConfigs(vueConfigs.vue3),
  vue2: mergeConfigs(vueConfigs.vue2),
};
