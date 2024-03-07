import Building from './5-building'; // Import the Building class

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the parent class constructor and pass the sqft attribute
    this._floors = floors; // Initialize the floors attribute
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

export default SkyHighBuilding; // Export the SkyHighBuilding class
