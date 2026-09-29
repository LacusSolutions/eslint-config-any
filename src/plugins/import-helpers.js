import importHelpersPlugin from 'eslint-plugin-import-helpers';
import { defineConfig } from 'eslint/config';

export default defineConfig({
  name: 'any/plugins/import-helpers',
  plugins: {
    'import-helpers': importHelpersPlugin,
  },
});
