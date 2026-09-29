import stylisticPlugin from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';

export default defineConfig({
  name: 'any/plugins/@stylistic',
  plugins: {
    '@stylistic': stylisticPlugin,
  },
});
