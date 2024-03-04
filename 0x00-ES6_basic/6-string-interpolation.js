// Define a function called getSanFranciscoDescription using template literals
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  // Use template literal to interpolate variables into the string
  return 'As of ${year}, it was the seventh-highest income country in the United States, with a per capita personal of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.';
}
