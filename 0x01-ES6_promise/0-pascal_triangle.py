#!/usr/bin/python3
def pascal_triangle(n):
    """
    Generate Pascal's triangle up to the nth row.

    Args:
        n (int): The number of rows to generate.

    Returns:
        list: A list of lists representing Pascal's triangle up to the nth row.
              Each inner list contains the elements of a single
              row of the triangle.

    Raises:
        ValueError: If n is less than or equal to 0.
    """
    if n <= 0:
        return []  # Return an empty list if n is less than or equal to 0

    triangle = [[1]]  # Initialize the triangle with the first row
    for i in range(1, n):
        row = [1]  # Start each row with 1
        for j in range(1, i):
            # Calculate the value for each element in the row using
            # the values from the previous row
            row.append(triangle[i-1][j-1] + triangle[i-1][j])
        row.append(1)  # End each row with 1
        triangle.append(row)  # Add the completed row to the triangle
    return triangle


def print_triangle(triangle):
    """
    Print the triangle in a readable format.

    Args:
        triangle (list): A list of lists representing Pascal's triangle.

    Returns:
        None
    """
    for row in triangle:
        print("[{}]".format(",".join([str(x) for x in row])))
