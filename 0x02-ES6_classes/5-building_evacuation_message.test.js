import Building from './5-building';

describe('building evacuation message', () => {
  describe('evacuationWarningMessage', () => {
    it('should throw an error if not overridden by a subclass', () => {
      expect.assertions(1); // Ensure there is at least one assertion
      expect(() => {
        new Building().evacuationWarningMessage();
      }).toThrow('Class extending Building must override evacuationWarningMessage');
    });
  });
});
