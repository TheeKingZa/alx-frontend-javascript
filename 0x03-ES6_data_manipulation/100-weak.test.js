// 100-weak.test.js
/* eslint-disable jest/prefer-expect-assertions */

// Import the queryAPI function and weakMap from the module being tested
import { queryAPI, weakMap } from './100-weak';

// Describe block to group related tests
describe('queryAPI', () => {
  // Test case: should increment the query count for the specified endpoint
  it('should increment the query count for the specified endpoint', () => {
    // Create an endpoint object
    const endpoint = { protocol: 'http', name: 'getUsers' };
    // Call the queryAPI function with the endpoint
    queryAPI(endpoint);
    // Assert that the query count for the endpoint is incremented to 1
    expect(weakMap.get(endpoint)).toBe(1);
  });

  // Test case: should throw an error if the query count is >= 5
  it('should throw an error if the query count is >= 5', () => {
    // Create an endpoint object
    const endpoint = { protocol: 'http', name: 'getUsers' };
    // Increment the query count for the endpoint to 5
    for (let i = 0; i < 5; i += 1) {
      queryAPI(endpoint);
    }
    // Expect an error to be thrown when querying the endpoint again
    expect(() => queryAPI(endpoint)).toThrowError('Endpoint load is high');
  });
});
