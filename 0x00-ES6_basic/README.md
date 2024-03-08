# ES6_`basic`
[`#`](https://github.com/TheeKingZa/alx-frontend-javascript/blob/master/README.md) `0x00` [`>`](https://github.com/TheeKingZa/alx-frontend-javascript/tree/master/0x01-ES6_promise/README.md)
---

# `Frontend`_Javascript


# `Concepts`
For this project, we expect you to look at these concepts:

* [JavaScript programming](#JavaScript-programming)
* [Software Linter](#software-linter)
---

# `NEED-TO-KNOW`?
* [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
* [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
* [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
* [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
* [Demystifying ES6 Iterables & Iterators](https://www.freecodecamp.org/news/demystifying-es6-iterables-iterators-4bdd0b084082/)

---
[`^`](#need-to-know)
---

# Learning Objectives
# `JavaScript` programming.
* [What ES6 is](#what-es6-is)
* [New features introduced in ES6](#new-features-introduced-in-es6)
* [The difference between a constant and a variable](#constants-vs-variables)
* [Block-scoped variables](#block-scoped-variables)
* [Arrow functions and function parameters default to them](#arrow-functions)
* [Rest and spread function parameters](#rest-and-spread-parameters)
* [String templating in ES6](#string-templating)
* [Object creation and their properties in ES6](#object-creation-in-es6)
* [Iterators and for-of loops](#iterators-and-for-of-loops)

---
[`^`](#need-to-know)
---

* [Modern JS](https://github.com/mbeaudru/modern-js-cheatsheet)
* [JavaScript Fundamentals](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
* [Module patterns](https://darrenderidder.github.io/talks/ModulePatterns/#/)
* [var, let and const](https://www.youtube.com/watch?v=sjyJBL5fkp8)
* [Javascript Tutorial](https://www.youtube.com/watch?v=vZBCTc9zHtI)
* [JavaScript object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
* [Object-oriented JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript) read all `examples!`
* [Object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
* [Inheritance in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)
* [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
* [this/self](https://alistapart.com/article/getoutbindingsituations/)
---
[`^`](#need-to-know)
---

# Software `Linter`
# Definition

```
  A software linter also known as a “linter” is a tool used to
  identify and report potential issues
  (syntax errors, undeclared variables, etc.) in a program.
  It can even report convention or style inconsistencies.
  It does so by highlighting them so that the programmer is aware,
  so changes can be made.
  There are a wide variety of linters as well as lint rules for
  specific programming languages and even for software frameworks.
```

There are typically two ways to lint code:

* [`Actively`](#active)
* [`Passively`](#passive)

# `Active`
```
  Active checking is typically achieved by running a monitor tool
  that is constantly checking the file that your working on in
  order to spot inconsistencies and possible errors
  (e.g., having a specific linter along with some lint rules
  installed as a plug-in in your Code Editor).
```

# `Passive`
```
  Passive checking is done by taking a piece of code,
  and manually running it through a tool to identify potential issues.
  For example, copying and pasting your code into a specific linter tool,
  or running the linter against a specific file using the command line.
  This tool can be installed locally or be available as a service
  (e.g., website on the Internet).
```
---
[`^`](#need-to-know)
---
* [lint (software) - Wikipedia](https://en.wikipedia.org/wiki/Lint_(software))
* [ESLint - Pluggable JavaScript linter](https://eslint.org/)
* [pycodestyle - documentation](https://pycodestyle.pycqa.org/en/latest/)

---

[`^`](#need-to-know)

---
# what `ES6` is?

ES6, also known as ECMAScript 2015, is a significant update to the JavaScript language, introducing new syntax and features to make JavaScript code more expressive and efficient.

# New Features Introduced in ES6
ES6 introduced several new features, including:
```
* Arrow Functions: A concise syntax for writing anonymous functions.

* let and const Declarations: Block-scoped variable declarations.

* Template Literals: String interpolation using backticks (`).

* Destructuring Assignment: Extracting values from arrays or objects into variables.

* Default Parameters: Setting default values for function parameters.

* Rest Parameters and Spread Syntax: Handling variable numbers of function arguments.

* Classes: Syntactic sugar over JavaScript's prototype-based inheritance.

* Promises: A cleaner alternative to callbacks for handling asynchronous operations.

* Modules: A standardized way of organizing and importing/exporting code.
```

[`^`](#need-to-know)

---
# `Constants` vs `Variables`:
In ES6, const is used to declare constants, which cannot be reassigned, while let is used to declare variables with block scope that can be reassigned.
```
const PI = 3.14159;
let count = 0;
```

[`^`](#need-to-know)

---
# `Block-scoped` Variables
Variables declared with let and const are block-scoped, meaning they are only accessible within the block in which they are defined.

```
{
  let x = 10;
  console.log(x); // 10
}
console.log(x); // ReferenceError: x is not defined
```

[`^`](#need-to-know)

---
# `Arrow` Functions
Arrow functions provide a more concise syntax for writing functions and automatically bind this to the enclosing lexical scope.

```
const add = (a, b) => a + b;
```

[`^`](#need-to-know)

---
# `Rest` and `Spread` Parameters
Rest parameters allow functions to accept an indefinite number of arguments as an array, while spread syntax allows arrays or iterable objects to be expanded into individual elements.

```
const sum = (...numbers) => numbers.reduce((acc, val) => acc + val, 0);
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6
```

[`^`](#need-to-know)

---
# `String` Templating
Template literals provide a more convenient way to interpolate variables into strings, supporting multi-line strings and expression interpolation.

```
const name = 'John';
const greeting = `Hello, ${name}!`;
```

[`^`](#need-to-know)

---
# `Object Creation` in `ES6`
ES6 introduced shorthand syntax for creating objects and defining methods within object literals.

```
const person = {
  name: 'John',
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
```

[`^`](#need-to-know)

---
# `Iterators` and `for-of` `Loops`
ES6 introduced the concept of iterators, which are objects that define a sequence and potentially a return value upon its termination. The for-of loop can then be used to iterate over these iterators.

```
const numbers = [1, 2, 3];
for (const num of numbers) {
  console.log(num);
}
```

---

[`^`](#need-to-know)

---
