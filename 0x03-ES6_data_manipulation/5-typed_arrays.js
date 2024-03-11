// 5-typed_arrays.js

/**
 * Creates a new ArrayBuffer with an Int8 value at a specific position.
 * @param {Number} length The length of the new ArrayBuffer
 * @param {Number} position The position to set the value
 * @param {Number} value The value to set
 * @returns {DataView} DataView object representing the new ArrayBuffer
 * @throws {Error} If position is outside range
 */
function createInt8TypedArray(length, position, value) {
  // Check if position is within range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);
  // Create a DataView to work with the buffer
  const view = new DataView(buffer);
  // Set the Int8 value at the specified position
  view.setInt8(position, value);

  // Return the DataView object representing the new ArrayBuffer
  return view;
}

export default createInt8TypedArray;
