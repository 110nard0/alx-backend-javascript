export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(str) {
    this._brand = str;
  }

  get motor() {
    return this._motor;
  }

  set motor(str) {
    this._motor = str;
  }

  get color() {
    return this._color;
  }

  set color(str) {
    this._color = str;
  }

  cloneCar() {
    return new this.constructor();
  }
}
