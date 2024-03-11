// Define a symbol for the cloneCar method
const cloneCarSymbol = Symbol('cloneCar');

// Define the Car class
export default class Car {
  // Constructor to initialize brand, motor, and color attributes
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car
  [cloneCarSymbol]() {
    return new this.constructor(this._brand, this._motor, this._color);
  }

  // Method to call the cloneCar method
  cloneCar() {
    return this[cloneCarSymbol]();
  }
}
