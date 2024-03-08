# Promise
[<](https://github.com/TheeKingZa/alx-frontend-javascript/tree/master/0x00-ES6_basic/README.md) 0x01 [>](https://github.com/TheeKingZa/alx-frontend-javascript/tree/master/0x02-ES6_classes/README.md)
---

# NEED TO KNOW?
* [Promise](#promises-how-why-and-what)
* [JavaScript Promise: An introduction](#what-is-a-promise)
* [Throw / Try](#using-throw--try)
* [Await](#await-operator)
* [Async](#how-to-use-an-async-function)


---

# [Promises: How, Why, and What](#how-to-use-the-then-resolve-and-catch-methods)

# What is a Promise?
```
A Promise in JavaScript is an object that represents the eventual completion (or failure) 
of an asynchronous operation and its resulting value. It allows you to handle asynchronous 
operations in a more elegant and manageable way.
```

[^](#need-to-know)

---
# How to Use the `then`, `resolve`, and `catch` Methods

# Using `then` Method:
```
The `then` method is used to handle the eventual completion or failure of an asynchronous 
operation. It takes two optional callback functions as arguments: one for handling the 
successful completion (fulfillment) and another for handling the failure (rejection).
```

# Example:
```
const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    resolve('Operation completed successfully');
  }, 1000);
});
 
promise.then(
  result => console.log(result), // Success handler
  error => console.error(error) // Error handler
);
```

[^](#need-to-know)

---
# Using `resolve` Method:
The `resolve` method is used to fulfill a promise with a given value.

# Example:
```
const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    resolve('Operation completed successfully');
  }, 1000);
});
 
promise.then(
  result => console.log(result), // Success handler
  error => console.error(error) // Error handler
);
```

[^](#need-to-know)

---
# Using `catch` Method:
The `catch` method is used to handle errors (rejections) that occur during the execution 
of a promise chain. It is a shorthand for handling errors in the `then` method's second 
callback function.

# Example:

```
const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    reject(new Error('Operation failed'));
  }, 1000);
});
 
promise.then(
  result => console.log(result), // Success handler
).catch(
  error => console.error(error) // Error handler
);
```

[^](#need-to-know)

---

# How to Use the `every` Method of the Promise Object

```
The `every` method of the Promise object is used to determine whether all elements in an 
iterable satisfy a specified condition asynchronously. It returns a Promise that resolves 
to `true` if all elements pass the test, otherwise it resolves to `false`.
```

# Example:
```
const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

Promise.every(promises).then(result => {
  console.log(result); // Output: true
}).catch(error => {
  console.error(error);
});
```

[^](#need-to-know)

---
# Using Throw / Try
Throwing an error within a promise will reject the promise, allowing you to handle errors 
using the `catch` method or the rejection handler in the `then` method.

# Example:
```
const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    try {
      throw new Error('Operation failed');
    } catch (error) {
      reject(error);
    }
  }, 1000);
});
 
promise.catch(error => {
  console.error(error); // Error handler
});
```

[^](#need-to-know)

---
# Await Operator
The `await` operator is used to pause the execution of an async function and wait for a 
Promise to settle (fulfilled or rejected), and to resume the execution of the async function 
after that. It can only be used inside an async function.

# Example:
```
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

fetchData().then(data => {
  console.log(data); // Handle fetched data
}).catch(error => {
  console.error(error); // Handle errors
});
```

[^](#need-to-know)

---
# How to Use an Async Function
An async function is a function declared with the `async` keyword, which enables the use 
of the `await` keyword within its body. Async functions always return a Promise.

# Example:
```
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

fetchData().then(data => {
  console.log(data); // Handle fetched data
}).catch(error => {
  console.error(error); // Handle errors
});
```

---

[^](#need-to-know)

---
