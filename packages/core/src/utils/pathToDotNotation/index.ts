/**
 * Transform an object path into dot notation.
 * @example
 * // [0].key1 -> 0.key1
 * // ["0"].key1[2] -> 0.key1.2
 */
export const pathToDotNotation = (string: string) => {
  return string
    .replace(/\[/g, '.')
    .replace(/\]/g, '.')
    .replace(/\.\"/g, '.')
    .replace(/\"\./g, '.')
    .replace(/\.\./g, '.')
    .replace(/^\./, '')
    .replace(/\.$/, '');
};
