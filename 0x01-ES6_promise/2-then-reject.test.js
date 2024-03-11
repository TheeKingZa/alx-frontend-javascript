import handleResponseFromAPI from './2-then';

describe('handleResponseFromAPI - Reject', () => {
  test('should handle rejected promise', async () => {
    const rejectedPromise = Promise.reject();

    const result = await handleResponseFromAPI(rejectedPromise);

    expect(result).toBeInstanceOf(Error);

    expect(console.log).toHaveBeenCalledWith('Got a response from the API');
  });
});

