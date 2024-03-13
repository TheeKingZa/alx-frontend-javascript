// task_/js/main.ts

// Define the Student Interface
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// Create two student OBJECTS
// Student ONE
const student1: Student = {
	firstName: "John",
	lastName: "Smith",
	age: 22,
	location: "Los Angels"
};

const student2: Student = {
	firstName: "Jane",
	lastName: "Smith",
	age: 22,
	location: "Los Angeles"
};

// Create an array containing the two student objects
const studentsList: Student[] = [student1, student2];

// Render a table and append rows for each student
const table = document.createElement("table");

studentsList.forEach(student => {
	const row = table.insertRow();
	const cell1 = row.insertCell(0);
	const cell2 = row.insertCell(1);

	cell1.textContent = student.firstName;
	cell2.textContent = student.location;
});

// Append the table to the body of the document
document.body.appendChild(table);

