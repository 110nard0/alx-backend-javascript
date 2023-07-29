export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('area must be a number');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(area) {
    if (typeof sqft !== 'number') throw new TypeError('area must be a number');
    this._sqft = area;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
