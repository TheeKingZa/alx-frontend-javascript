// HolbertonCourse class definition
class HolbertonCourse {
  constructor(name, length, students) {
    // Verify the type of attributes during object creation
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string'); // Throw an error if name is not a string
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number'); // Throw an error if length is not a number
    }

    this._name = name; // Initialize the _name attribute with the provided value
    this._length = length; // Initialize the _length attribute with the provided value
    this._students = students; // Initialize the _students attribute with the provided value
  }

  // Getter and setter for the name attribute
  get name() {
    return this._name; // Getter method for the _name attribute
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string'); // Throw an error if name is set to a non-string value
    }
    this._name = value; // Setter method for the _name attribute
  }

  // Getter and setter for the length attribute
  get length() {
    return this._length; // Getter method for the _length attribute
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number'); // Throw an error if length is set to a non-number value
    }
    this._length = value; // Setter method for the _length attribute
  }

  // Getter and setter for the students attribute
  get students() {
    return this._students; // Getter method for the _students attribute
  }

  set students(value) {
    this._students = value; // Setter method for the _students attribute
  }
}

export default HolbertonCourse; // Export the HolbertonCourse class
