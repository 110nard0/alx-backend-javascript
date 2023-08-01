export default function cleanSet(set, startString) {
  if (startString.length === 0 || startString === '' || startString === undefined) return '';

  return [...set]
    .filter((string) => (string !== undefined ? string.startsWith(startString) : ''))
    .map((string) => (string !== undefined ? string.slice(startString.length) : ''))
    .join('-');
}
