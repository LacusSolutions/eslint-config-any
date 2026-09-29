import { CJS, DTS, JS, JSON, JSON5, JSONC, TEST, TS, VUE } from './extensions.js';
import { FileExtensionsSet } from './file-extensions-set.js';
import { toBlob, toDotted } from './helpers.js';
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
  toBlob,
  toDotted,
  TS,
  VUE,
};

export const scripts = toBlob(JS, TS, DTS);
export const scriptsAndVue = toBlob(JS, TS, DTS, VUE);
export const typescript = toBlob(TS, DTS);
export const typescriptAndVue = toBlob(TS, DTS, VUE);
export const js = JS.toBlobArray();
export const ts = TS.toBlobArray();
export const vue = VUE.toBlobArray();
export const json = JSON.toBlobArray();
export const jsonc = JSONC.toBlobArray();
export const json5 = JSON5.toBlobArray();
export const markdown = ['**/*.md'];
export const test = toBlob(TEST);
export const cjs = toBlob(CJS);
