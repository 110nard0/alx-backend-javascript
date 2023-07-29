/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') {
      throw new TypeError('Name must be string');
    } else {
      this._name = name;
    }

    if (typeof (length) !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = length;
    }

    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(str) {
    if (typeof (str) !== 'string') {
      throw new TypeError('Name must be string');
    } else {
      this._name = str;
    }
  }

  get length() {
    return this._name;
  }

  set length(num) {
    if (typeof (num) !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._name = num;
    }
  }

  get students() {
    return this._name;
  }

  set students(str) {
    this._name = str;
  }
}
