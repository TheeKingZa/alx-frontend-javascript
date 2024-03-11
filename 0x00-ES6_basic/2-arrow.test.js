import getNeighborhoodsList from './2-arrow';

describe('getNeighborhoodsList', () => {
  it('should add a new neighborhood to the list', () => {
    const neighborhoods = new getNeighborhoodsList();
    const newNeighborhood = 'Mission District';

    // Call the addNeighborhood method
    const updatedNeighborhoods = neighborhoods.addNeighborhood(newNeighborhood);

    // Check if the new neighborhood is added
    expect(updatedNeighborhoods).toContain(newNeighborhood);
  });
});
