export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);

  // const int8View = new Int8Array(buffer);
  const view = new DataView(buffer, 0);

  // int8View[position] = value;
  view.setInt8(position, value);

  // return new DataView(buffer);
  return view;
}
