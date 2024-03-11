// 10-update_uniq_items.js

/**
 * Updates the quantity of items in a map where initial quantity is 1 to 100.
 * @param {Map} map The map of items with their quantities
 * @throws {Error} If the argument is not a map
 */
function updateUniqueItems(map) {
  // Check if the argument is a map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over the entries of the map
  for (const [item, quantity] of map.entries()) {
    // If the quantity is 1, update it to 100
    if (quantity === 1) {
      map.set(item, 100);
    }
  }
}

export default updateUniqueItems;
