// task_1/js/main.ts

// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow adding any additional attributes
}

// Create a function to initialize a Teacher object
function createTeacher(
  firstName: string,
  lastName: string,
  fullTimeEmployee: boolean,
  location: string,
  additionalAttributes: { [key: string]: any }
): Teacher {
  return {
    firstName,
    lastName,
    fullTimeEmployee,
    location,
    ...additionalAttributes,
  };
}

// Create Teacher objects
const teacher1: Teacher = createTeacher("John", "Doe", true, "New York", { contract: false });
const teacher2: Teacher = createTeacher("Jane", "Smith", false, "Los Angeles", { contract: true, yearsOfExperience: 5 });

console.log(teacher1);
console.log(teacher2);

