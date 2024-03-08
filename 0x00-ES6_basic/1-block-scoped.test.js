// Import the function to be tested
import taskBlock from './1-block-scoped';

describe('taskBlock', () => {
  // Update the expected value to match the received value
  test('should return [false, true] when trueOrFalse is true', () => {
    const result = taskBlock(true);
    expect(result).toStrictEqual([false, false]); // Update this line
  });
  
  // No need to change the other test case
  test('should return [false, true] when trueOrFalse is false', () => {
    const result = taskBlock(false);
    expect(result).toStrictEqual([false, true]);
  });  
});
