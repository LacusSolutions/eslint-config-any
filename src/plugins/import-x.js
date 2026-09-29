import { createNodeResolver, importX } from 'eslint-plugin-import-x';
import { defineConfig } from 'eslint/config';
import fs from 'node:fs';
import path from 'node:path';

import { DTS, JS, toDotted, TS } from '../files/index.js';

const matchingFileExtensions = toDotted(JS, TS, DTS);
const configFile = path.resolve(process.cwd(), 'tsconfig.json');
const tsconfigExists = fs.existsSync(configFile);

export default defineConfig({
  name: 'any/plugins/import-x',
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
});
