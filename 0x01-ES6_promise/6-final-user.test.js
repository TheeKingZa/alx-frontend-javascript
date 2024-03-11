// Import the handleProfileSignup function
import handleProfileSignup from './6-final-user';

// Define a test suite for the handleProfileSignup function
describe('handleProfileSignup', () => {
  // Define a test case for successful signup and photo upload
  test('should return array with status and value for successful signup and photo upload', async () => {
    // Define sample input values
    const firstName = 'Bob';
    const lastName = 'Dylan';
    const fileName = 'bob_dylan.jpg';

    // Call handleProfileSignup function with sample input values
    const result = await handleProfileSignup(firstName, lastName, fileName);

    // Check if the result is an array
    expect(Array.isArray(result)).toBe(true);
    // Check if the result contains two elements
    expect(result).toHaveLength(2);
    // Check if the status of the first element is "fulfilled"
    expect(result[0].status).toBe('fulfilled');
    // Check if the status of the second element is either "fulfilled" or "rejected"
    expect(['fulfilled', 'rejected']).toContain(result[1].status);
  });
});
