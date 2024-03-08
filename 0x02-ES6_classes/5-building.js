// Define the Building class
class Building {
  // Constructor method to initialize the Building instance with sqft attribute
  constructor(sqft) {
    // Store the sqft attribute in an underscore version
    this._sqft = sqft;
  }

  // Getter method for accessing the sqft attribute
  get sqft() {
    return this._sqft;
  }

  // Method to be implemented by subclasses, throws an error if not overridden
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

// Export the Building class
export default Building;
