import tsEslint from 'typescript-eslint';

import rules from './rules/index.js';

const matchingFilesPattern = ['**/*.{ts,tsx,mtsx,vue}'];
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
