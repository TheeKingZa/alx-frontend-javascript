import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    // Call uploadPhoto and createUser asynchronously using Promise.all
    const [photoResponse, userResponse] = await Promise.all([uploadPhoto(), createUser()]);

    // Return an object with the responses from both functions
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // If any of the async functions fail, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
