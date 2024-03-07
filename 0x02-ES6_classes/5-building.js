// Define the Building class
class Building {
  // Constructor takes sqft as a parameter
  constructor(sqft) {
    // Initialize the _sqft attribute with the provided value
    this._sqft = sqft;
  }

  // Getter for the sqft attribute
  get sqft() {
    return this._sqft;
  }

  // Disable the class-methods-use-this rule for the evacuationWarningMessage method
  // eslint-disable-next-line class-methods-use-this
  // Method to be overridden by subclasses
  evacuationWarningMessage() {
    console.log(this.sqft);
    // Throw an error indicating that the subclass must override this method
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

// Export the Building class for use in other modules
export default Building;
