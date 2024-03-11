import getResponseFromAPI from './0-promise';

describe('getResponseFromAPI', () => {
  test('should return a resolved promise with the response from API', () => {
    // Call the function and store the result in a variable
    const promise = getResponseFromAPI();

    // Assert that the returned value is a Promise
    expect(promise).toBeInstanceOf(Promise);

    // Use .then() to handle the resolved value
    return promise.then((response) => {
      // Assert that the resolved value matches the expected response
      expect(response).toBe('Response from API');
    });
  });
});

