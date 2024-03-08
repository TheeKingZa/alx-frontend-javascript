// Import signUpUser and uploadPhoto functions
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Define and export the handleProfileSignup function
export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    // Call signUpUser and uploadPhoto functions asynchronously
    const userPromise = signUpUser(firstName, lastName);
    const photoPromise = uploadPhoto(fileName);

    // Wait for both promises to settle
    const [userResult, photoResult] = await Promise.allSettled([userPromise, photoPromise]);

    // Return an array with the status and value/error of each promise
    return [
      { status: userResult.status, value: userResult.value },
      { status: photoResult.status, value: photoResult.status === 'fulfilled' ? photoResult.value : photoResult.reason }
    ];
  } catch (error) {
    // If any error occurs during the process, return an array with the error information
    return [{ status: 'rejected', value: error }];
  }
}
