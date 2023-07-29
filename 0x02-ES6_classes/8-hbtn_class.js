export default class HolbertonCourse {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('location must be string');
    }

    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(num) {
    if (typeof num !== 'number') throw new TypeError('size must be a number');
    this._size = num;
  }

  get location() {
    return this._location;
  }

  set location(str) {
    if (typeof str !== 'string') throw new TypeError('location must be string');
    this._location = str;
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
