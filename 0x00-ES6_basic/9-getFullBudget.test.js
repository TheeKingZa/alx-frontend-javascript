import getFullBudgetObject from './9-getFullBudgetObject';
import getBudgetObject from './7-getBudgetObject';

describe('getFullBudgetObject', () => {
  // Test case for when all parameters are provided
  it('should return the full budget object with income in dollars and euros', () => {
    // Define input values
    const income = 100000;
    const gdp = 200000;
    const capita = 300000;

    // Call the function
    const fullBudget = getFullBudgetObject(income, gdp, capita);

    // Expected budget object
    const expectedBudget = getBudgetObject(income, gdp, capita);
    expectedBudget.getIncomeInDollars = expect.any(Function);
    expectedBudget.getIncomeInEuros = expect.any(Function);

    // Ensure that the returned value matches the expected budget object
    expect(fullBudget).toEqual(expectedBudget);
  });

  // Add more test cases if needed
});

