import { defineConfig } from 'eslint/config';
import tsEslint from 'typescript-eslint';

import { DTS, toBlob, TS, VUE } from '../../utils/index.js';
import commonjs from '../env/commonjs/index.js';
import rules from './rules/index.js';

const matchingFileBlobs = toBlob(TS, DTS, VUE);
const stylisticRules = Object.keys(tsEslint.configs.stylistic.at(-1)?.rules ?? {}).reduce(
  (acc, rule) => ({ ...acc, [rule]: 'warn' }),
  {},
);

export default defineConfig([
  ...tsEslint.configs.recommended,
  {
    files: matchingFileBlobs,
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: VUE.toDottedArray(),
      },
    },
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
