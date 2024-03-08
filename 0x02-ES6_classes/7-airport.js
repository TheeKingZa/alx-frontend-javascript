class Airport {
  constructor(name, code) {
    this._name = name; // Initialize the name attribute
    this._code = code; // Initialize the code attribute
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Override the default toString method to return the airport code
  toString() {
    return `[object ${this._code}]`;
  }
}

export default Airport; // Export the Airport class
