export default {
  // https://eslint.vuejs.org/rules/block-order.html
  'vue/block-order': [
    'error',
    {
      order: ['script', 'template', 'style'],
    },
  ],

  // https://eslint.vuejs.org/rules/vue/html-self-closing.html
  'vue/html-self-closing': [
    'error',
    {
      html: {
        void: 'always',
        normal: 'always',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
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

  // https://eslint.vuejs.org/rules/require-name-property.html
  'vue/require-name-property': 'error',
};
