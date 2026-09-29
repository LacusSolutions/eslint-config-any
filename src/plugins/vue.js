import vuePlugin from 'eslint-plugin-vue';
import { defineConfig } from 'eslint/config';
import tsEslint from 'typescript-eslint';

export const parser = defineConfig({
  name: 'any/plugins/vue-parser',
  languageOptions: {
    parserOptions: {
      parser: tsEslint.parser,
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
});

export const vue2 = vuePlugin.configs['flat/vue2-recommended'];
export const vue3 = vuePlugin.configs['flat/recommended'];

export default {
  parser,
  vue2,
  vue3,
};
