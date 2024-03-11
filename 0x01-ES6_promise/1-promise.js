// Define a function named getFullResponseFromAPI which takes a boolean parameter 'success'
export default function getFullResponseFromAPI(success) {
  // Return a new Promise, which takes two parameters: resolve and reject
  return new Promise((resolve, reject) => {
    // Check if the 'success' parameter is true
    if (success) {
      // If true, resolve the Promise with an object containing status 200 and the body 'Success'
      resolve({ status: 200, body: 'Success' });
    } else {
      // If false, reject the Promise with an Error object
      // containing the message 'The fake API is not working currently'
      reject(new Error('The fake API is not working currently'));
    }
  });
}
