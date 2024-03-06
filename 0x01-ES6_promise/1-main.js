import getFullResponseFromAPI from './1-promise';

// Call the function with 'true' and log the result
console.log(getFullResponseFromAPI(true));

// Call the function with 'false' and handle the rejection with a catch block
getFullResponseFromAPI(false)
  .catch(error => console.error(error.message));

