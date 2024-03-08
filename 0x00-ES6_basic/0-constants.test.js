// Import the functions to be tested
import { taskFirst, taskNext, getLast } from './0-constants';

describe('constants', () => {
  // Test case for taskFirst function
  it('taskFirst should instantiate variables using const', () => {
    // Call the function
    const result = taskFirst();

    // Assert that the returned value is correct
    expect(result).toBe('I prefer const when I can.');
  });

  // Test case for taskNext function
  it('taskNext should instantiate variables using let', () => {
    // Call the function
    const result = taskNext();

    // Assert that the returned value is correct
    expect(result).toBe('But sometimes let is okay');
  });

  // Test case for getLast function (optional, to ensure it works as expected)
  it('getLast should return " is okay"', () => {
    // Call the function
    const result = getLast();

    // Assert that the returned value is correct
    expect(result).toBe(' is okay');
  });
});
