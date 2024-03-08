import handleResponseFromAPI from './2-handle_response';

describe('handleResponseFromAPI', () => {
  test('should handle resolved promise', () => {
    // Create a resolved promise
    const resolvedPromise = Promise.resolve();

    // Call the function and store the result in a variable
    const result = handleResponseFromAPI(resolvedPromise);

    // Assert that the result is a Promise
    expect(result).toBeInstanceOf(Promise);

    // Use .then() to handle the resolved value
    return result.then((response) => {
      // Assert that the response object has the correct status and body
      expect(response).toEqual({ status: 200, body: 'success' });

      // Verify that the message was logged to the console
      expect(console.log).toHaveBeenCalledWith('Got a response from the API');
    });
  });

  test('should handle rejected promise', () => {
    // Create a rejected promise
    const rejectedPromise = Promise.reject();

    // Call the function and store the result in a variable
    const result = handleResponseFromAPI(rejectedPromise);

    // Assert that the result is a Promise
    expect(result).toBeInstanceOf(Promise);

    // Use .catch() to handle the rejected value
    return result.catch((error) => {
      // Assert that the error object is returned
      expect(error).toBeInstanceOf(Error);

      // Verify that the message was logged to the console
      expect(console.log).toHaveBeenCalledWith('Got a response from the API');
    });
  });
});

