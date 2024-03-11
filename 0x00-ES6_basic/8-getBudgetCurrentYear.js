// Define a function called getCurrentYear to get the current year
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

// Define a function called getBudgetForCurrentYear using ES6 computed property names
export default function getBudgetForCurrentYear(income, gdp, capita) {
  // Use ES6 template literals to define properties with computed property
  // names directly inside the object declaration
  return {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };
}
