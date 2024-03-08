import getBudgetObject from './7-getBudgetObject';

// Define a function called getFullBudgetObject
export default function getFullBudgetObject(income, gdp, capita) {
  // Call getBudgetObject to get the budget object
  const budget = getBudgetObject(income, gdp, capita);

  // Define the fullBudget object with ES6 method properties
  const fullBudget = {
    ...budget,
    // Use shorthand method syntax to define getIncomeInDollars method
    getIncomeInDollars() {
      return `$${income}`;
    },
    // Use shorthand method syntax to define getIncomeInEuros method
    getIncomeInEuros() {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
