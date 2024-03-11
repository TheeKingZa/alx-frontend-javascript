# ES6_`classes`
[`<`](https://github.com/TheeKingZa/alx-frontend-javascript/tree/master/0x01-ES6_promise/README.md) `0x02` [`>`](https://github.com/TheeKingZa/alx-frontend-javascript/tree/master/0x03-ES6-data_manipulation/README.md)
---
# `NEED TO KNOW?`
* [How to define a class](#defining-a-class)
* [Why and How to add a static method to a class](#adding-a-static-method-to-a-class)
* [How to extend a class from another](#extending-a-class-inheritance)
* [Metaprogramming and symbols](#metaprogramming-and-symbols)

Read/watch `more`:
* [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [Metaprogramming](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/#symbolspecies)

---

# Defining a `Class`:
* In ES6, classes provide a more structured way to create objects and define their behavior.
* To define a class, use the class keyword followed by the class name. For example:

```
JavaScript

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
```


* In this example, Rectangle has a constructor that initializes its height and width.

[`^`](#need-to-know)

---
# `Adding Methods` to a Class:
* Methods are functions associated with a class. They operate on the class’s data.
* To add a method, define a function within the class. The first parameter of the method is typically this, referring to the current instance.
Example:
```
JavaScript

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const p1 = new Person("John", 36);
p1.greet(); // Outputs: "Hello, my name is John"
```

[`^`](#need-to-know)

---
# `Adding a Static Method` to a Class:
* A static method belongs to the class itself, not its instances. It doesn’t require access to instance-specific data.
* Use the static keyword to define a static method.
Example:

```
JavaScript

class MathUtils {
    static add(a, b) {
        return a + b;
    }
}

const result = MathUtils.add(10, 20); // Result: 30
```

[`^`](#need-to-know)

---
# `Extending` a Class (`Inheritance`):
* Inheritance allows you to create a new class based on an existing one (the parent class).
* The new class (the child class) inherits properties and methods from the parent class.
Example:

```
JavaScript

class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

const myDog = new Dog();
myDog.speak(); // Outputs: "Dog barks"

```

[`^`](#need-to-know)

---
# `Metaprogramming` and `Symbols`:
```
* Metaprogramming involves writing code that manipulates other code during runtime.
* Symbols (such as constructor and static initialization blocks) play a crucial role in metaprogramming.
* For instance, the constructor method initializes objects created with a class.
```

---

[`^`](#need-to-know)
