import eslintCommentsPlugin from '@eslint-community/eslint-plugin-eslint-comments';
import jsPlugin from '@eslint/js';
import arrayFuncPlugin from 'eslint-plugin-array-func';
import importPlugin from 'eslint-plugin-import';
import importHelpersPlugin from 'eslint-plugin-import-helpers';
import noSecretsPlugin from 'eslint-plugin-no-secrets';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import regexpPlugin from 'eslint-plugin-regexp';

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
  return [
    {
      ignores: ['**/coverage/**', '**/build/**', '**/dist/**', '**/*.min.js'],
    },
    jsPlugin.configs.recommended,
    {
      files: ['**/*.{js,jsx,mjsx,cjs,mjs,ts,tsx,mtsx,vue}'],
      languageOptions: {
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
        },
      },
      plugins: {
        '@eslint-community/eslint-comments': eslintCommentsPlugin,
        'array-func': arrayFuncPlugin,
        import: importPlugin,
        'import-helpers': importHelpersPlugin,
        'no-secrets': noSecretsPlugin,
        perfectionist: perfectionistPlugin,
        regexp: regexpPlugin,
      },
      rules: {
        'import-helpers/order-imports': [
          'warn',
          {
            alphabetize: {
              order: 'asc',
              ignoreCase: true,
            },
            groups: ['module', ['/^~//', '/^@//'], ['parent', 'sibling', 'index']],
            newlinesBetween: 'always',
          },
        ],
        'no-secrets/no-secrets': 'warn',
        'perfectionist/sort-classes': 'off',
        'perfectionist/sort-decorators': 'warn',
        'perfectionist/sort-enums': 'warn',
        'perfectionist/sort-exports': 'warn',
        'perfectionist/sort-heritage-clauses': 'warn',
        'perfectionist/sort-imports': 'off', // keep it disabled to avoid conflicting with import-helpers
        'perfectionist/sort-interfaces': 'warn',
        'perfectionist/sort-intersection-types': 'warn',
        'perfectionist/sort-jsx-props': 'off', // keep it disabled to avoid conflicting with react
        'perfectionist/sort-maps': ['warn', { type: 'line-length' }],
        'perfectionist/sort-modules': 'off',
        'perfectionist/sort-named-exports': 'warn',
        'perfectionist/sort-named-imports': 'warn',
        'perfectionist/sort-object-types': 'warn',
        'perfectionist/sort-objects': 'off',
        'perfectionist/sort-sets': 'warn',
        'perfectionist/sort-switch-case': 'warn',
        'perfectionist/sort-union-types': 'warn',
        'perfectionist/sort-variable-declarations': 'off',
      },
    },

    ...tsConfig,
    ...otherConfigs,
    ...prettierConfig,
  ];
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
