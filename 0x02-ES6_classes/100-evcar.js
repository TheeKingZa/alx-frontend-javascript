// Import the Car class
import Car from './10-car';

// Define the EVCar class that extends Car
export default class EVCar extends Car {
  // Constructor to initialize attributes for brand, motor, color, and range
  constructor(brand, motor, color, range) {
    // Call the superclass constructor using super
    super(brand, motor, color);
    // Initialize the range attribute
    this._range = range;
  }

  // Override the cloneCar method
  cloneCar() {
    // Create a new instance of Car using the superclass constructor
    return new Car(this._brand, this._motor, this._color);
  }
}
