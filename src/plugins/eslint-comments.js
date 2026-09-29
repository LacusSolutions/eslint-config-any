import eslintCommentsConfigs from '@eslint-community/eslint-plugin-eslint-comments/configs';
import { defineConfig } from 'eslint/config';

export default defineConfig({
  name: 'any/plugins/eslint-comments',
  extends: [eslintCommentsConfigs.recommended],
});
