// Define and export a function named uploadPhoto that accepts one parameter: filename (string)
export default function uploadPhoto(filename) {
  // Return a Promise object that rejects with an Error containing the provided filename
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
