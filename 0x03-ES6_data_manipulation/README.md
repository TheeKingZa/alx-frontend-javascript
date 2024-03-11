# ES6_`Data Manipulation`
[`<`](https://github.com/TheeKingZa/alx-frontend-javascript/tree/master/0x02-ES6_classes/README.md) `0x03` [`#`](https://github.com/TheeKingZa/alx-frontend-javascript/tree/master/README.md)
---

# `read or watch`
* [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
* [Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
* [Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
* [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

# NEED TO KNOW?
* [Array Methods](#array-methods) 
* How to use [map](#map), [filter](#filter) and [reduce](#reduce) on arrays
* [Typed arrays](#typed-arrays)
* [The Set](), [Map](#mapkey-value-pairs), and [Weak](#weakmap) [link data structures](#linked-lists)

---


# Array Methods:
# Map

The map() method creates a new array by applying a function to each element of the original array.
```
Syntax: array.map(callback(element, index, array))
```

* Example:
```
    const numbers = [1, 2, 3, 4];
    const doubled = numbers.map(num => num * 2);
    // doubled is now [2, 4, 6, 8]
```
---

[`^`](#need-to-know)

---
# Filter:

The filter() method creates a new array with all elements that pass the test implemented by the provided function.
```
Syntax: array.filter(callback(element, index, array))
```

Example:
```
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter(num => num % 2 === 0);
// evenNumbers is now [2, 4]
```
---

[`^`](#need-to-know)

---
# Reduce:

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
```
Syntax: array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
```

Example:
```
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
// sum is now 10
```
---

[`^`](#need-to-know)

---
# Typed Arrays:
Typed arrays are array-like objects that provide a mechanism for accessing raw binary data. They have a fixed length and are optimized for numerical data.

`Set`, `Map`, and `WeakMap` Data Structures:

# Set

The Set object lets you store unique values of any type, whether primitive values or object references.

Example:
```
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Won't be added because it's a duplicate
// mySet is now {1, 2}
```
---

[`^`](#need-to-know)

---
# Map(Key-value pairs):

The Map object holds key-value pairs and remembers the original insertion order of the keys.

Example:
```
const myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);
// myMap is now {'name' => 'John', 'age' => 30}
```
---

[`^`](#need-to-know)

---
# WeakMap:

The WeakMap object is a collection of key/value pairs in which the keys must be objects and the values can be arbitrary values.
Unlike Map, in WeakMap, references to objects are held weakly, meaning they can be garbage collected if there are no other references to the object.

Example:
```
const weakMap = new WeakMap();
const keyObj = {};
weakMap.set(keyObj, 'value');
// weakMap is now {{} => 'value'}

```
---

[`^`](#need-to-know)

---
# Linked Lists:
A linked list is a linear collection of data elements, called nodes, where each node points to the next node in the sequence.
There are different types of linked lists, such as singly linked lists, doubly linked lists, and circular linked lists.

* Example of a `singly linked list` node:
```
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

* Example of `creating` and `manipulating` a `singly linked list`:
```
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);

    node1.next = node2;
    node2.next = node3;

    // Traversing the linked list
    let current = node1;
    while (current !== null) {
    console.log(current.value);
    current = current.next;
    }
```
---

[`^`](#need-to-know)

---
# Trees:
A tree is a hierarchical data structure that consists of nodes connected by edges. Each node has a parent node and zero or more child nodes.
Trees have various applications, including representing hierarchical data, organizing data for efficient searching, and implementing algorithms like binary search trees.

* Example of a `binary tree node`:
```
    class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    }
```
---

[`^`](#need-to-know)

---
* Example of `creating` and `manipulating` a `binary tree`:
```
    const rootNode = new TreeNode(1);
    rootNode.left = new TreeNode(2);
    rootNode.right = new TreeNode(3);
    rootNode.left.left = new TreeNode(4);
    rootNode.left.right = new TreeNode(5);

    // Traversing the binary tree (in-order traversal)
    function inOrderTraversal(node) {
    if (node !== null) {
        inOrderTraversal(node.left);
        console.log(node.value);
        inOrderTraversal(node.right);
    }
    }

    inOrderTraversal(rootNode);
```

Linked data structures like linked lists and trees are fundamental in computer science and are used extensively in various algorithms and applications. They provide efficient ways to organize and manipulate data.


---

[`^`](#need-to-know)

---
