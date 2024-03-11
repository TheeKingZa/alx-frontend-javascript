export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Perform asynchronous task here, such as fetching data from an API
    // For demonstration purposes, let's resolve the Promise immediately
    resolve('Response from API');
  });
}
