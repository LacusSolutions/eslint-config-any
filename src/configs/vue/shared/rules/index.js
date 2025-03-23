// TODO: review all rules
export default {
  // https://eslint.vuejs.org/rules/block-order.html
  'vue/block-order': [
    'error',
    {
      order: ['script', 'template', 'style'],
    },
  ],

  // https://eslint.vuejs.org/rules/multi-word-component-names.html
  'vue/multi-word-component-names': 'off',

  // https://eslint.vuejs.org/rules/order-in-components.html
  'vue/order-in-components': [
    'error',
    {
      order: [
        'el',
        'name',
        'key', // Nuxt's
        'head', // Nuxt's
        'extends',
        'inheritAttrs',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        'components',
        'directives',
        'filters',
        'mixins',
        'provide',
        'inject',
        'ROUTER_GUARDS', // Vue Router's
        'layout', // Nuxt's
        'middleware', // Nuxt's
        'validate', // Nuxt's
        'scrollToTop', // Nuxt's
        'transition', // Nuxt's
        'loading', // Nuxt's
        'model',
        'expose',
        'slots',
        'emits',
        'props',
        'propsData',
        'data',
        'asyncData', // Nuxt's
        'computed',
        'setup',
        'watch',
        'watchQuery', // Nuxt's
        'methods',
        'fetch', // Nuxt's
        'LIFECYCLE_HOOKS',
        ['template', 'render'],
        'renderError',
      ],
    },
  ],

  // // https://eslint.vuejs.org/rules/html-closing-bracket-newline.html
  // 'vue/html-closing-bracket-newline': [
  //   'error',
  //   {
  //     singleline: 'never',
  //     multiline: 'always',
  //   },
  // ],
  //
  // // https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html
  // 'vue/html-closing-bracket-spacing': [
  //   'error',
  //   {
  //     selfClosingTag: 'always',
  //     startTag: 'never',
  //     endTag: 'never',
  //   },
  // ],
  //
  // // https://eslint.vuejs.org/rules/html-comment-indent.html
  // 'vue/html-comment-indent': ['error', 2],
  //
  // // https://eslint.vuejs.org/rules/html-end-tags.html
  // 'vue/html-end-tags': 'error',
  //
  // // https://eslint.vuejs.org/rules/html-indent.html
  // 'vue/html-indent': [
  //   'error',
  //   2,
  //   {
  //     attribute: 1,
  //     baseIndent: 1,
  //     closeBracket: 0,
  //     alignAttributesVertically: false,
  //     ignores: [],
  //   },
  // ],
  //
  // // https://eslint.vuejs.org/rules/html-self-closing.html
  // 'vue/html-self-closing': [
  //   'error',
  //   {
  //     svg: 'always',
  //     math: 'always',
  //     html: {
  //       void: 'always',
  //       normal: 'any',
  //       component: 'always',
  //     },
  //   },
  // ],
  //
  // // https://eslint.vuejs.org/rules/html-quotes.html
  // 'vue/html-quotes': [
  //   'error',
  //   'double',
  //   {
  //     avoidEscape: false,
  //   },
  // ],
  //
  // // https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html
  // 'vue/mustache-interpolation-spacing': ['error', 'always'],
  //
  // // https://eslint.vuejs.org/rules/require-name-property.html
  // 'vue/require-name-property': 'error',
  //
  // // https://eslint.vuejs.org/rules/script-indent.html
  // 'vue/script-indent': [
  //   'error',
  //   2,
  //   {
  //     baseIndent: 0,
  //   },
  // ],
};
