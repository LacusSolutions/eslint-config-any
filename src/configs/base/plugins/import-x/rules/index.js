export default {
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/consistent-type-specifier-style.md
  'import-x/consistent-type-specifier-style': ["error", "prefer-inline"],

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/default.md
  'import-x/default': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/dynamic-import-chunkname.md
  'import-x/dynamic-import-chunkname': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/export.md
  'import-x/export': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/exports-last.md
  'import-x/exports-last': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/extensions.md
  'import-x/extensions': ['warn', 'always', {
    js: 'never',
    cjs: 'never',
    mjs: 'never',
    jsx: 'never',
    mjsx: 'never',
    ts: 'never',
    mts: 'never',
    tsx: 'never',
    mtsx: 'never',
    vue: 'never',
  }],

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/first.md
  'import-x/first': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/group-exports.md
  'import-x/group-exports': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/imports-first.md
  /** @deprecated */
  'import-x/imports-first': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/max-dependencies.md
  'import-x/max-dependencies': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/named.md
  'import-x/named': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/namespace.md
  'import-x/namespace': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/newline-after-import.md
  'import-x/newline-after-import': ['warn', {
    considerComments: true,
  }],

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-absolute-path.md
  'import-x/no-absolute-path': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-amd.md
  'import-x/no-amd': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-anonymous-default-export.md
  'import-x/no-anonymous-default-export': ["error", {
    "allowArray": true,
    "allowArrowFunction": true,
    "allowAnonymousClass": false,
    "allowAnonymousFunction": false,
    "allowCallExpression": false,
    "allowNew": true,
    "allowLiteral": false,
    "allowObject": true
  }],

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-commonjs.md
  'import-x/no-commonjs': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-cycle.md
  'import-x/no-cycle': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-default-export.md
  'import-x/no-default-export': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-deprecated.md
  'import-x/no-deprecated': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-duplicates.md
  'import-x/no-duplicates': 'warn',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-dynamic-require.md
  'import-x/no-dynamic-require': 'warn',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-empty-named-blocks.md
  'import-x/no-empty-named-blocks': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-extraneous-dependencies.md
  'import-x/no-extraneous-dependencies': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-import-module-exports.md
  'import-x/no-import-module-exports': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default-member.md
  'import-x/no-named-as-default-member': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default.md
  'import-x/no-named-as-default': 'warn',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-default.md
  'import-x/no-named-default': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-export.md
  'import-x/no-named-export': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-namespace.md
  'import-x/no-namespace': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-restricted-paths.md
  'import-x/no-restricted-paths': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-self-import.md
  'import-x/no-self-import': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unassigned-import.md
  'import-x/no-unassigned-import': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unresolved.md
  'import-x/no-unresolved': ['error', {
    caseSensitiveStrict: true,
    caseSensitive: true,
    commonjs: true,
    amd: true,
  }],

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unused-modules.md
  'import-x/no-unused-modules': 'warn',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-useless-path-segments.md
  'import-x/no-useless-path-segments': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-webpack-loader-syntax.md
  'import-x/no-webpack-loader-syntax': 'warn',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/order.md
  'import-x/order': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/prefer-default-export.md
  'import-x/prefer-default-export': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/prefer-namespace-import.md
  'import-x/prefer-namespace-import': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/unambiguous.md
  'import-x/unambiguous': 'off',
};
