import { defineConfig, globalIgnores } from 'eslint/config';

import * as environments from '../environments/index.js';
import * as files from '../files/index.js';
import * as plugins from '../plugins/index.js';
import * as rules from '../rules/index.js';

/**
 * @typedef {import('eslint').Linter.Config} EslintConfig
 *
 * @typedef {import('eslint').Linter.RulesRecord} EslintRules
 *
 * @typedef {Object} ConfigOptions
 * @property {string[]} [files]
 * @property {string[]} [ignores]
 * @property {EslintRules} [rules]
 * @property {EslintConfig['languageOptions']} [languageOptions]
 * @property {Record<string, unknown>} [settings]
 *
 * @typedef {Object} CreateConfigInput
 * @property {string} name
 * @property {string[]} [files]
 * @property {string[]} [typescriptFiles]
 * @property {EslintConfig[]} [extends]
 * @property {EslintRules} [rules]
 * @property {EslintConfig[]} [extraLayers]
 *
 * @typedef {Object} CreateAddonConfigInput
 * @property {string} name
 * @property {string[]} files
 * @property {EslintConfig[]} extends
 * @property {EslintRules} [rules]
 */

export const basePlugins = [
  plugins.jsConfigs,
  plugins.eslintCommentsConfigs,
  plugins.arrayFuncConfigs,
  plugins.importXConfigs,
  plugins.importHelpersConfigs,
  plugins.perfectionistConfigs,
  plugins.regexpConfigs,
  plugins.stylisticConfigs,
];

export const baseRules = {
  ...rules.js,
  ...rules.arrayFunc,
  ...rules.importX,
  ...rules.importHelpers,
  ...rules.perfectionist,
  ...rules.stylistic,
};

/**
 * @param {EslintConfig} config
 * @param {ConfigOptions} options
 * @returns {EslintConfig}
 */
function applyOverrides(config, options) {
  const nextConfig = { ...config };

  if (options.languageOptions) {
    nextConfig.languageOptions = options.languageOptions;
  }

  if (options.settings) {
    nextConfig.settings = options.settings;
  }

  return nextConfig;
}

/**
 * @param {CreateConfigInput} input
 * @returns {(options?: ConfigOptions) => ReturnType<typeof defineConfig>}
 */
export function createConfig({
  name,
  files: defaultFiles = files.scripts,
  typescriptFiles = files.typescript,
  extends: extraExtends = [],
  rules: extraRules = {},
  extraLayers = [],
}) {
  /**
   * @param {ConfigOptions} [options]
   */
  return function config(options = {}) {
    const scriptFiles = options.files ?? defaultFiles;
    const scriptLayer = applyOverrides(
      {
        name,
        files: scriptFiles,
        extends: [...basePlugins, ...extraExtends],
        rules: { ...baseRules, ...extraRules },
      },
      options,
    );

    const configs = [
      globalIgnores(options.ignores ?? files.ignores),
      {
        name: 'any/json',
        files: files.json,
        extends: [plugins.jsonConfigs.json],
      },
      {
        name: 'any/jsonc',
        files: files.jsonc,
        extends: [plugins.jsonConfigs.jsonc],
      },
      {
        name: 'any/json5',
        files: files.json5,
        extends: [plugins.jsonConfigs.json5],
      },
      {
        name: 'any/markdown',
        files: files.markdown,
        extends: [plugins.markdownConfigs],
      },
      scriptLayer,
      {
        name: 'any/typescript',
        files: typescriptFiles,
        extends: [plugins.typescriptConfigs],
        rules: rules.typescript,
      },
      ...extraLayers,
      {
        name: 'any/cjs',
        files: ['**/*.cjs'],
        extends: [environments.commonjs],
        rules: rules.commonjs,
      },
      {
        name: 'any/prettier',
        extends: [plugins.prettierConfigs],
        rules: rules.prettier,
      },
    ];

    if (options.rules) {
      configs.push({
        name: `${name}/overrides`,
        files: scriptFiles,
        rules: options.rules,
      });
    }

    return defineConfig(configs);
  };
}

/**
 * @param {CreateAddonConfigInput} input
 * @returns {(options?: ConfigOptions) => ReturnType<typeof defineConfig>}
 */
export function createAddonConfig({
  name,
  files: defaultFiles,
  extends: addonExtends,
  rules: addonRules = {},
}) {
  /**
   * @param {ConfigOptions} [options]
   */
  return function config(options = {}) {
    const config = applyOverrides(
      {
        name,
        files: options.files ?? defaultFiles,
        extends: addonExtends,
        rules: { ...addonRules, ...options.rules },
      },
      options,
    );

    if (options.ignores) {
      return defineConfig([globalIgnores(options.ignores), config]);
    }

    return defineConfig(config);
  };
}
