import Building from './5-building';

describe('building', () => {
  it('should throw an error if evacuationWarningMessage is not overridden', () => {
    expect.assertions(1);
    expect(() => {
      const b = new Building(200);
      b.evacuationWarningMessage(); // This line should throw an error
    }).toThrow('Class extending Building must override evacuationWarningMessage');
  });
});
