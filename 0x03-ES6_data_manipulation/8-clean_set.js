export default function cleanSet(set, startString) {
  const len = startString.length;
  let endStrings = [];

  if (len > 0) {
    set.forEach((value) => {
      if (value.startsWith(startString)) {
        endStrings.push(value.slice(len));
      }
    })
  }

  return endStrings.join('-');
}
