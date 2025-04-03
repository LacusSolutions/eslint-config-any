// eslint.config.js
import markdownEslint from '@eslint/markdown';
import { defineConfig } from 'eslint/config';

export default defineConfig([...markdownEslint.configs.recommended]);
