import prettierConfigAndPlugin from 'eslint-plugin-prettier/recommended';
import { defineConfig } from 'eslint/config';

export default defineConfig({
  name: 'any/plugins/prettier',
  extends: [prettierConfigAndPlugin],
});
