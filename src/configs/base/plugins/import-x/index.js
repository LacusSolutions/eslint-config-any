import { createNodeResolver, importX } from 'eslint-plugin-import-x';
import { defineConfig } from 'eslint/config';
import fs from 'node:fs';
import path from 'node:path';

import { DTS, JS, toBlob, toDotted, TS, VUE } from '../../../../utils/index.js';
import rules from './rules/index.js';

const matchingFileBlobs = toBlob(JS, TS, DTS, VUE);
const matchingFileExtensions = toDotted(JS, TS, DTS);

const configFile = path.resolve(process.cwd(), 'tsconfig.json');
const tsconfigExists = fs.existsSync(configFile);

export default defineConfig([
  {
    files: matchingFileBlobs,
    plugins: {
      'import-x': importX,
    },
    settings: {
      'import-x/resolver-next': [
        createNodeResolver({
          extensions: matchingFileExtensions,
          tsconfig: tsconfigExists ? { configFile } : undefined,
        }),
      ],
    },
    rules,
  },
]);
