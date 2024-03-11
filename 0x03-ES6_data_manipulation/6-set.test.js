// 6-set.test.js
/* eslint-disable jest/prefer-expect-assertions */

import setFromArray from './6-set';

describe('setFromArray', () => {
  it('should return a Set containing the unique elements of the array', () => {
    const array = [12, 32, 15, 78, 98, 15];
    const result = setFromArray(array);
    // Check if the result is a Set
    expect(result).toBeInstanceOf(Set);
    // Check if the Set contains the unique elements of the array
    expect(result.size).toBe(5); // 15 is duplicated, so it should be counted only once
    expect(result.has(12)).toBe(true);
    expect(result.has(32)).toBe(true);
    expect(result.has(15)).toBe(true);
    expect(result.has(78)).toBe(true);
    expect(result.has(98)).toBe(true);
  });
});
