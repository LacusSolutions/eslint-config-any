import reactPlugin from '@eslint-react/eslint-plugin';
import eslintReactKit from '@eslint-react/kit';
import { defineConfig } from 'eslint/config';

import { jsxBooleanValue } from './react/jsx-boolean-value.js';

export const kit = defineConfig({
  name: 'any/plugins/react-kit',
  plugins: {
    '@eslint-react/kit': eslintReactKit().use(jsxBooleanValue).getPlugin(),
  },
});

export const strict = reactPlugin.configs.strict;
export const strictTypeChecked = reactPlugin.configs['strict-type-checked'];

export default {
  kit,
  strict,
  strictTypeChecked,
};
