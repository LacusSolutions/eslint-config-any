import { CJS, DTS, JS, JSON, JSON5, JSONC, TEST, TS, VUE } from './extensions.js';
import { FileExtensionsSet } from './file-extensions-set.js';
import { toDotted, toGlob } from './helpers.js';
import ignores from './ignores.js';

export {
  CJS,
  DTS,
  FileExtensionsSet,
  ignores,
  JS,
  JSON,
  JSON5,
  JSONC,
  TEST,
  toDotted,
  toGlob,
  TS,
  VUE,
};

export const scripts = toGlob(JS, TS, DTS);
export const scriptsAndVue = toGlob(JS, TS, DTS, VUE);
export const typescript = toGlob(TS, DTS);
export const typescriptAndVue = toGlob(TS, DTS, VUE);
export const js = JS.toGlobArray();
export const ts = TS.toGlobArray();
export const vue = VUE.toGlobArray();
export const json = JSON.toGlobArray();
export const jsonc = JSONC.toGlobArray();
export const json5 = JSON5.toGlobArray();
export const markdown = ['**/*.md'];
export const test = toGlob(TEST);
export const cjs = toGlob(CJS);
