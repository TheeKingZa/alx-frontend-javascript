import Building from './5-building';

describe('building', () => {
  it('should have sqft attribute', () => {
    expect.assertions(1); // Add this line
    const b = new Building(100);
    expect(b.sqft).toBe(100);
  });

  it('should throw an error if evacuationWarningMessage is not overridden', () => {
    expect.assertions(1); // Add this line
    expect(() => {
      new Building(200);
    }).toThrow('Class extending Building must override evacuationWarningMessage');
  });
});
