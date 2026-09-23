/**
 * @param {unknown} extension
 * @returns {string}
 */
function normalizeExtension(extension) {
  return String(extension).replace(/^\./, '');
}

export class FileExtensionsSet extends Set {
  /**
   * @param {...string} extensions
   */
  constructor(...extensions) {
    super(extensions.map(normalizeExtension));
  }

  /**
   * @param {string} extension
   * @returns {this}
   * @override
   */
  add(extension) {
    return super.add(normalizeExtension(extension));
  }

  /**
   * @param {string} extension
   * @returns {boolean}
   * @override
   */
  delete(extension) {
    return super.delete(normalizeExtension(extension));
  }

  /**
   * @param {string} extension
   * @returns {boolean}
   * @override
   */
  has(extension) {
    return super.has(normalizeExtension(extension));
  }

  /**
   * @returns {string[]}
   */
  toArray() {
    return [...this];
  }

  /**
   * @returns {string[]}
   */
  toDottedArray() {
    return this.toArray().map((extension) => `.${extension}`);
  }

  /**
   * @param {(extensions: string[]) => string} [callback]
   * @returns {string}
   */
  toBlob(callback) {
    const extensions = this.toArray();

    if (callback) {
      return callback(extensions);
    }

    if (extensions.length === 0) {
      return '';
    }

    if (extensions.length === 1) {
      return `**/*.${extensions[0]}`;
    }

    return `**/*.{${extensions.join(',')}}`;
  }

  /**
   * @param {(extension: string) => string} [callback]
   * @returns {string[]}
   */
  toBlobArray(callback = (extension) => `**/*.${extension}`) {
    return this.toArray().map(callback);
  }
}
