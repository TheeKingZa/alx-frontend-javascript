// 10-update_uniq_items.test.js
/* eslint-disable jest/prefer-expect-assertions */

import updateUniqueItems from './10-update_uniq_items';
import groceriesList from './9-groceries_list';

describe('updateUniqueItems', () => {
  it('should update the quantity of items with initial quantity at 1 to 100', () => {
    const map = groceriesList();
    updateUniqueItems(map);
    // Check if the quantities of 'Pasta' and 'Rice' are updated to 100
    expect(map.get('Pasta')).toBe(100);
    expect(map.get('Rice')).toBe(100);
  });

  it('should throw an error if the argument is not a map', () => {
    expect(() => {
      updateUniqueItems('not a map');
    }).toThrow('Cannot process');
  });
});
