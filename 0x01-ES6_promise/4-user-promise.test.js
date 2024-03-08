// Import the signUpUser function from the module
import signUpUser from './4-user-promise';

// Define a test suite for the signUpUser function
describe('signUpUser', () => {
  // Define a test case for the successful resolution scenario
  test('should resolve with the provided firstName and lastName', async () => {
    // Define sample values for firstName and lastName
    const firstName = 'John';
    const lastName = 'Doe';

    // Call the signUpUser function with the sample values and await the result
    const result = await signUpUser(firstName, lastName);

    // Check if the result matches the expected object containing firstName and lastName
    expect(result).toEqual({ firstName, lastName });
  });
});

