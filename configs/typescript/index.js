import tsEslint from 'typescript-eslint';

import { TS, VUE } from '../../utils/index.js';
import rules from './rules/index.js';

const matchingFilesPattern = [TS, VUE];
const baseTypeScriptConfig = tsEslint.configs.recommended;
const baseStylisticConfigRules = tsEslint.configs.stylistic.at(-1)?.rules ?? {};
const stylisticRules = Object.keys(baseStylisticConfigRules).reduce((acc, rule) => {
  acc[rule] = 'warn';
  return acc;
}, {});

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ...baseTypeScriptConfig,
    files: matchingFilesPattern,
    rules: {
      ...baseTypeScriptConfig.rules,
      ...stylisticRules,
      ...rules,
    },
  },
];
