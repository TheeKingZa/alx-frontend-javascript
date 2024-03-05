# Promise


# NEED TO KNOW?

* [What is Pascal’s triangle](https://www.cuemath.com/algebra/pascals-triangle/)
* [Pascal’s Triangle - Numberphile](https://www.youtube.com/watch?feature=shared&v=0iMtlus-afo)
* [What are Python Algorithms](https://builtin.com/data-science/python-algorithms)

# Additional Resources
* [Mock Technical Interview](https://www.youtube.com/watch?v=1qw5ITr3k9E)

---

# Must Know Concepts for Python Project

To successfully complete this project, it's essential to revise the following Python concepts:

# Lists and List Comprehensions:

- Understand how to create, access, modify, and iterate over lists.
- Utilize list comprehensions for more concise and readable code, especially for generating rows of Pascal’s Triangle.

```
  Example:
  numbers = [i for i in range(1, 6)]
  print(numbers)  # Output: [1, 2, 3, 4, 5]
```

# Functions:

- Know how to define and call functions.
- Pass parameters and return values, particularly how to return a list of lists representing Pascal’s Triangle.
```
  Example:
  def pascal_triangle(n):
      # Implementation here

  result = pascal_triangle(5)
  print(result)  # Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
```

# Loops:

* Use for and while loops to iterate through sequences.
* Nested loops may be necessary for generating each row and calculating the values of Pascal’s Triangle.

```
  Example:
  rows = 5
  triangle = []

  for i in range(rows):
      row = [1]
      if triangle:
          last_row = triangle[-1]
          row.extend([sum(pair) for pair in zip(last_row, last_row[1:])])
          row.append(1)
      triangle.append(row)

  print(triangle)
```


# Conditional Statements:

* Apply if, elif, and else conditions to implement logic based on the position within Pascal’s Triangle (e.g., the edges of the triangle always being 1).

```
  Example:
  rows = 5
  triangle = []

  for i in range(rows):
      row = [1]
      if triangle:
          last_row = triangle[-1]
          row.extend([sum(pair) for pair in zip(last_row, last_row[1:])])
          row.append(1)
      triangle.append(row)

      if i == 2:
          print("Middle row:", row)

  print(triangle)

```

# Recursion (Optional):

- While not strictly necessary, understanding recursion can provide an alternative approach to generating Pascal’s Triangle.
- Recognize base cases and recursive cases for a function that generates the triangle’s rows.

```
  Example:
  def generate_row(n, current_row=[1]):
      if n == 0:
          return current_row
      else:
          new_row = [1] + [current_row[i] + current_row[i + 1] for i in range(len(current_row) - 1)] + [1]
          return generate_row(n - 1, new_row)

  result = generate_row(3)
  print(result)  # Output: [1, 3, 3, 1]
```

# Arithmetic Operations:

- Perform addition, a fundamental operation for calculating each element of Pascal’s Triangle as the sum of the two elements directly above it.
```
  Example:
  a = 2
  b = 3
  result = a + b
  print(result)  # Output: 5
```

# Indexing and Slicing:

- Access elements and slices of lists, crucial for identifying and summing the correct elements when constructing each row of the triangle.
```
  Example:
  numbers = [1, 2, 3, 4, 5]
  first_element = numbers[0]
  sliced_elements = numbers[1:4]

  print(first_element)     # Output: 1
  print(sliced_elements)   # Output: [2, 3, 4]
```


# Memory Management:

- Be mindful of how lists are stored and copied, especially when creating new rows based on the values of the previous row.
```
  Example:
  original_list = [1, 2, 3]
  copied_list = original_list.copy()

  original_list[0] = 10

  print(original_list)   # Output: [10, 2, 3]
  print(copied_list)     # Output: [1, 2, 3]

```
# Error and Exception Handling (Optional):

* Use try-except blocks as needed to handle potential errors, such as invalid input types or values.
```
  Example:
  # Add example here

# Efficiency and Optimization:

* Consider the time and space complexity of different approaches to generating Pascal’s Triangle.
* Evaluate and apply optimizations to improve the performance of the solution.

```
```

def pascal_triangle(n):
    """
    Create Pascal's Triangle of n rows.

    Returns:
        A list of lists representing Pascal's Triangle.

    Example:
        result = pascal_triangle(5)
        print(result)  # Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
    """
    # Implementation here


def generate_row(n, current_row=[1]):
    """
    Generate a row of Pascal's Triangle recursively.

    Args:
        n: The row number to generate.
        current_row: The current row being generated.

    Returns:
        The nth row of Pascal's Triangle.

    Example:
        result = generate_row(3)
        print(result)  # Output: [1, 3, 3, 1]
    """
    if n == 0:
        return current_row
    else:
        new_row = [1] + [current_row[i] + current_row[i + 1] for i in range(len(current_row) - 1)] + [1]
        return generate_row(n - 1, new_row)
```