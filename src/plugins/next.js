import nextPlugin from '@next/eslint-plugin-next';
import { defineConfig } from 'eslint/config';

export default defineConfig({
  name: 'any/plugins/next',
  extends: [nextPlugin.configs['core-web-vitals']],
});
