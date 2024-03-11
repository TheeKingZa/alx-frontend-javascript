// 5-typed_arrays.test.js
/* eslint-disable jest/prefer-expect-assertions */

import createInt8TypedArray from './5-typed_arrays';

describe('createInt8TypedArray', () => {
  it('should create a new ArrayBuffer with the Int8 value at a specific position', () => {
    const result = createInt8TypedArray(10, 2, 89);
    // Check if the result is a DataView
    expect(result).toBeInstanceOf(DataView);
    // Check if the byte length of the buffer is correct
    expect(result.byteLength).toBe(10);
    // Check if the value at the specified position is correct
    expect(result.getInt8(2)).toBe(89);
  });

  it('should throw an error if position is outside range', () => {
    expect(() => {
      createInt8TypedArray(5, 10, 89);
    }).toThrow('Position outside range');
  });
});
