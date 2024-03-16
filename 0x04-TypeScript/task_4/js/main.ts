// File Directory: task_4/js/main.ts

import { Cpp } from "./subjects/Cpp";
import { Java } from "./subjects/Java";
import { React } from "./subjects/React";
import { cTeacher } from "./subjects/Teacher";

// Create and export constant for Cpp Subjects
export const cpp = new Cpp();

// Create and export constant for Java Subjects
export const java = new Java();

// Create and export constant for React Subjects
export const react = new React();

// Create and export one Teacher object cTeacher with experienceTeachingC = 10
export const cTeacher = { firstName: "John", lastName: "Doe", experienceTeachingC: 10 };

// Log C++ subject details
console.log("C++:");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Log Java subject details
console.log("Java:");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Log React subject details
console.log("React:");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
