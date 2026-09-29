import { FileExtensionsSet } from './file-extensions-set.js';

export const VUE = new FileExtensionsSet('vue');
export const JSON = new FileExtensionsSet('json');
export const JSONC = new FileExtensionsSet('jsonc');
export const JSON5 = new FileExtensionsSet('json5');
export const CJS = new FileExtensionsSet('js', 'cjs');
export const JS = new FileExtensionsSet(...CJS, 'mjs', 'jsx', 'mjsx');
export const TS = new FileExtensionsSet('ts', 'mts', 'cts', 'tsx', 'mtsx');
export const DTS = new FileExtensionsSet(...TS.toArray().map((ext) => `d.${ext}`));
export const TEST = new FileExtensionsSet('test.*', 'spec.*');
