import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Define and export a function named handleProfileSignup
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Create an array to hold the promises
  const promises = [];

  // Call signUpUser function and push the resulting promise into the promises array
  promises.push(signUpUser(firstName, lastName));

  // Call uploadPhoto function and push the resulting promise into the promises array
  promises.push(uploadPhoto(fileName));

  // Return a Promise that resolves when all promises in the array have settled
  return Promise.allSettled(promises)
    .then((results) =>
      // Map over the results array and return an array with the status and value/error of each promise
      results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason,
      })));
}
