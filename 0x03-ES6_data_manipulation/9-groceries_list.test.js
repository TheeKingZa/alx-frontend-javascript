// 9-groceries_list.test.js
/* eslint-disable jest/prefer-expect-assertions */

import groceriesList from './9-groceries_list';

describe('groceriesList', () => {
  it('should return a map of groceries with the specified items and quantities', () => {
    const result = groceriesList();
    // Check if the result is a Map
    expect(result).toBeInstanceOf(Map);
    // Check if the map contains the specified groceries with their quantities
    expect(result.get('Apples')).toBe(10);
    expect(result.get('Tomatoes')).toBe(10);
    expect(result.get('Pasta')).toBe(1);
    expect(result.get('Rice')).toBe(1);
    expect(result.get('Banana')).toBe(5);
  });
});
