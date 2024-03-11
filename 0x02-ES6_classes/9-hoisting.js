// Define the HolbertonClass class to represent a Holberton class
export class HolbertonClass {
  // Constructor to initialize year and location attributes
  constructor(year, location) {
    this._year = year; // Store the year
    this._location = location; // Store the location
  }

  // Getter method to retrieve the year attribute
  get year() {
    return this._year;
  }

  // Getter method to retrieve the location attribute
  get location() {
    return this._location;
  }
}

// Define the StudentHolberton class to represent a student
export class StudentHolberton {
  // Constructor to initialize firstName, lastName, and holbertonClass attributes
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName; // Store the first name
    this._lastName = lastName; // Store the last name
    this._holbertonClass = holbertonClass; // Store the Holberton class
  }

  // Getter method to retrieve the full name of the student
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Getter method to retrieve the Holberton class of the student
  get holbertonClass() {
    return this._holbertonClass;
  }

  // Getter method to retrieve the full description of the student
  // including name, class year, and location
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Create instances of HolbertonClass for the years 2019 and 2020
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Create instances of StudentHolberton with different
// students and their respective Holberton classes
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);
// Export an array containing all the student instances
export const listOfStudents = [student1, student2, student3, student4, student5];
