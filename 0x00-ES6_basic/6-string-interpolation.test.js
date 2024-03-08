import getSanFranciscoDescription from './6-string-interpolation';

test('getSanFranciscoDescription should return the correct description', () => {
  // Define the expected description string with interpolated values
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  const expectedDescription = `As of ${year}, it was the seventh-highest income country in the United States, with a per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;

  // Call the function and store the result
  const result = getSanFranciscoDescription();

  // Ensure that the returned value matches the expected description
  expect(result).toBe(expectedDescription);
});
