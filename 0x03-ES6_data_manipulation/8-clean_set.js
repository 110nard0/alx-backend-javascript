export default function cleanSet(set, startString) {
  if (startString === '' || startString === undefined) return '';

  return [...set]
    .filter((string) => string.startsWith(startString) ? string : '')
    .map((string) => string.slice(startString.length))
    .join('-');
}
