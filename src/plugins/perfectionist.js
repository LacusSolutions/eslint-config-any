import perfectionistPlugin from 'eslint-plugin-perfectionist';
import { defineConfig } from 'eslint/config';

export default defineConfig({
  name: 'any/plugins/perfectionist',
  plugins: {
    perfectionist: perfectionistPlugin,
  },
});
