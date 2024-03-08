// Import the function to be tested
import taskBlock from './1-block-scoped.js';

describe('taskBlock', () => {
  it('should return [false, true] when trueOrFalse is true', () => {
    // Call the function with true
    const result = taskBlock(true);

    // Ensure that the returned value is correct
    expect(result).toEqual([false, true]);
  });

  it('should return [false, true] when trueOrFalse is false', () => {
    // Call the function with false
    const result = taskBlock(false);

    // Ensure that the returned value is correct
    expect(result).toEqual([false, true]);
  });
});
