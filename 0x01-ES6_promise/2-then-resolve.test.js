import handleResponseFromAPI from './2-then';

describe('handleResponseFromAPI - Resolve', () => {
  test('should handle resolved promise', async () => {
    const resolvedPromise = Promise.resolve();

    const result = await handleResponseFromAPI(resolvedPromise);

    expect(result).toEqual({ status: 200, body: 'success' });

    expect(console.log).toHaveBeenCalledWith('Got a response from the API');
  });
});

