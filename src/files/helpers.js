/**
 * @typedef {import('./file-extensions-set.js').FileExtensionsSet} FileExtensionsSet
 */

/**
 * @param {...FileExtensionsSet} sets
 * @returns {string[]}
 */
export function toBlob(...sets) {
  return sets.map((set) => set.toBlob());
}

/**
 * @param {...FileExtensionsSet} sets
 * @returns {string[]}
 */
export function toDotted(...sets) {
  return sets.flatMap((set) => set.toDottedArray());
}
