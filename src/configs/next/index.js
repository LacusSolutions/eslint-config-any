import nextPlugin from '@next/eslint-plugin-next';
import { defineConfig } from 'eslint/config';

import { JS, TS } from '../../utils/index.js';
import reactConfigs from '../react/index.js';
import rules from './rules/index.js';

const matchingAllFileBlobs = [...JS.toBlobArray(), ...TS.toBlobArray()];

export default defineConfig([
  ...reactConfigs,
  {
    ...nextPlugin.configs['core-web-vitals'],
    files: matchingAllFileBlobs,
  },
  {
    files: matchingAllFileBlobs,
    rules,
  },
]);
