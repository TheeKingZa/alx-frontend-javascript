import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    // Concurrently execute both promises and await their resolution
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);

    // Log the combined result to the console
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  } catch (error) {
    // Log an error message if any of the promises reject
    console.log('Signup system offline');
  }
}
