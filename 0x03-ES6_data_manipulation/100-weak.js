// 100-weak.js

// Create a new WeakMap instance
const weakMap = new WeakMap();

/**
 * Increments the query count for the specified endpoint in the weakMap.
 * Throws an error if the query count is >= 5.
 * @param {Object} endpoint The endpoint object
 */
function queryAPI(endpoint) {
  // Initialize query count to 0 if not already present
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Increment query count
  const queryCount = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, queryCount);

  // Check if query count is >= 5
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export { queryAPI, weakMap };
