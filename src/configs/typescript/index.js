import { defineConfig } from 'eslint/config';
import tsEslint from 'typescript-eslint';

import { TS, VUE } from '../../utils/index.js';
import commonjs from '../env/commonjs/index.js';
import rules from './rules/index.js';

const matchingFilesPattern = [TS, VUE];
const baseTypeScriptConfig = tsEslint.configs.recommended;
const baseStylisticConfigRules = tsEslint.configs.stylistic.at(-1)?.rules ?? {};
const stylisticRules = Object.keys(baseStylisticConfigRules).reduce((acc, rule) => {
  acc[rule] = 'warn';
  return acc;
}, {});

export default defineConfig([
  ...baseTypeScriptConfig,
  {
    files: matchingFilesPattern,
    rules: {
      ...stylisticRules,
      ...rules,
    },
  },
  {
    ...commonjs[0],
    files: ['**/*.cjs'],
  },
]);
