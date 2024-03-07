// import Currency from './3-currency'; // Import the Currency class from 3-currency.js

class Pricing {
  constructor(amount, currency) { // Constructor with amount and currency attributes
    this._amount = amount; // Initialize the amount attribute
    this._currency = currency; // Initialize the currency attribute
  }

  // Getter and setter for amount
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  // Getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  displayFullPrice() { // Method to display full price in the specified format
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) { // Static method to convert price
    return amount * conversionRate; // Multiply the amount by the conversion rate
  }
}

export default Pricing; // Export the Pricing class
