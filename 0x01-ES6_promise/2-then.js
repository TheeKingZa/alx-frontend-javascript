// Define a function named handleResponseFromAPI which takes a promise parameter
export default function handleResponseFromAPI(promise) {
  // Append three handlers to the promise using .then() method
  return promise
    .then(() => {
      // Log a message to the console when the Promise resolves
      console.log('Got a response from the API');
      // Return an object with status 200 and body 'success'
      return { status: 200, body: 'success' };
    })
    .catch(() => {
      // Log a message to the console when the Promise rejects
      console.log('Got a response from the API');
      // Return an empty Error object
      return new Error();
    });
}
