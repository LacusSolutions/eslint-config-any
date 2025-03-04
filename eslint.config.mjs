import pluginEslintComments from '@eslint-community/eslint-plugin-eslint-comments';
import pluginJs from '@eslint/js';
import configPrettier from 'eslint-config-prettier';
import pluginArrayFunc from 'eslint-plugin-array-func';
import pluginImport from 'eslint-plugin-import';
import pluginImportHelpers from 'eslint-plugin-import-helpers';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginNoSecrets from 'eslint-plugin-no-secrets';
import pluginPerfectionist from 'eslint-plugin-perfectionist';
import pluginReact from 'eslint-plugin-react';
import pluginReactHook from 'eslint-plugin-react-hooks';
import pluginRegexp from 'eslint-plugin-regexp';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
  pluginJs.configs.recommended,

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
      '@eslint-community/eslint-comments': pluginEslintComments,
      'jsx-a11y': pluginJsxA11y,
      react: pluginReact,
      'react-hooks': pluginReactHook,
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
      'array-func': pluginArrayFunc,
      import: pluginImport,
      'import-helpers': pluginImportHelpers,
      'no-secrets': pluginNoSecrets,
      perfectionist: pluginPerfectionist,
      regexp: pluginRegexp,
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
  configPrettier,
];
