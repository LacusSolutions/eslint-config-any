import eslintCommentsPlugin from '@eslint-community/eslint-plugin-eslint-comments';
import jsPlugin from '@eslint/js';
import arrayFuncPlugin from 'eslint-plugin-array-func';
import importPlugin from 'eslint-plugin-import';
import importHelpersPlugin from 'eslint-plugin-import-helpers';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import noSecretsPlugin from 'eslint-plugin-no-secrets';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import prettierConfigAndPlugin from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactHookPlugin from 'eslint-plugin-react-hooks';
import regexpPlugin from 'eslint-plugin-regexp';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

/**
 * @typedef {import('eslint').Linter.Config[]} EslintFlatConfig
 *
 * @typedef {Object} EslintFlatConfigPresets
 * @property {EslintFlatConfig} browser
 * @property {EslintFlatConfig} browserAndNode
 * @property {EslintFlatConfig} node
 * @property {EslintFlatConfig} nodeAndBrowser
 * @property {EslintFlatConfig} commonjs
 */

/** @type {EslintFlatConfigPresets} */
const sharedConfig = [
  {
    ignores: [],
  },
  jsPlugin.configs.recommended,

  // TypeScript
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.node.json'],
      },
    },
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
    },
  },

  // React
  {
    files: ['**/*.{jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@eslint-community/eslint-comments': eslintCommentsPlugin,
      'jsx-a11y': jsxA11yPlugin,
      react: reactPlugin,
      'react-hooks': reactHookPlugin,
    },
  },

  // All
  {
    files: ['**/*.{js,jsx,cjs,mjs,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
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

  // Prettier
  prettierConfigAndPlugin,
  {
    rules: {
      'prettier/prettier': [
        'warn',
        {
          printWidth: 100,
          singleQuote: true,
        },
      ],
    },
  },
];

const browserAndNodeEnv = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  ...sharedConfig,
];

/** @type {EslintFlatConfigPresets} */
export default {
  browser: [
    {
      languageOptions: {
        globals: globals.browser,
      },
    },
    ...sharedConfig,
  ],
  browserAndNode: browserAndNodeEnv,
  node: [
    {
      languageOptions: {
        globals: {
          ...globals.node,
        },
      },
    },
    ...sharedConfig,
  ],
  nodeAndBrowser: browserAndNodeEnv,
  commonjs: [
    {
      files: ['**/*.js'],
      languageOptions: {
        sourceType: 'commonjs',
      },
    },
  ],
};
