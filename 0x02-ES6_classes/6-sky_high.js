import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);

    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }

    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    if (typeof sqft !== 'number') throw new TypeError('sqft must be a number');
    this._sqft = val;
  }

  get floors() {
    return this._floors;
  }

  set floors(num) {
    if (typeof floors !== 'number') throw new TypeError('floors must be a number');
    this._floors = num;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
