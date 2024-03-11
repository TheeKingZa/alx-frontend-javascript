// 9-groceries_list.js

/**
 * Returns a map of groceries with the specified items and quantities.
 * @returns {Map} Map containing groceries with items as keys and quantities as values
 */
function groceriesList() {
  // Create a new Map
  const groceryMap = new Map();
  // Add groceries with their quantities to the map
  groceryMap.set('Apples', 10);
  groceryMap.set('Tomatoes', 10);
  groceryMap.set('Pasta', 1);
  groceryMap.set('Rice', 1);
  groceryMap.set('Banana', 5);
  return groceryMap;
}

export default groceriesList;
