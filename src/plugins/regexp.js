import { configs as regexpPluginConfigs } from 'eslint-plugin-regexp';
import { defineConfig } from 'eslint/config';

export default defineConfig({
  name: 'any/plugins/regexp',
  extends: [regexpPluginConfigs.recommended],
});
