class HolbertonClass {
  constructor(size, location) {
    this._size = size; // Initialize the size attribute
    this._location = location; // Initialize the location attribute
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // Implementing the valueOf method to return the size when cast into a Number
  valueOf() {
    return this._size;
  }

  // Implementing the toString method to return the location when cast into a String
  toString() {
    return this._location;
  }
}

export default HolbertonClass; // Export the HolbertonClass class
