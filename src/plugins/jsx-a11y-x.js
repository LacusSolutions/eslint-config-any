import jsxA11yXPlugin from 'eslint-plugin-jsx-a11y-x';
import { defineConfig } from 'eslint/config';

export default defineConfig({
  name: 'any/plugins/jsx-a11y-x',
  extends: [jsxA11yXPlugin.configs.strict],
});
