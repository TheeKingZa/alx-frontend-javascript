// Define a function called returnHowManyArguments
// using the rest parameter syntax
export default function returnHowManyArguments(...args) {
  // Return the length of the args array,
  // which represents the number of arguments passed to the function
  return args.length;
}
