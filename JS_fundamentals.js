//General printing of convention "Hello World"
console.log("Hello from Sarosh, main.js");

// Variable making in JS
let x = 20;
x += 10;
console.log(x);

//Const variable, Must be initialized and cannot change afterwards

const b = 45;
//b += 8; ---> errorneous, reassignment not possible
x = "Testing how string works :p";
console.log(x);

//making object of student class

const Student = {
  firstname: "Mack",
  lastname: "Royle_Jonas",
  age: 20, // Numbers don't need quotes
  CGPA: 3.0, // Same here, numbers should not be in quotes
  IsPassed: true, // Boolean should be lowercase 'true'
};

//Backticks ( ) are required for template literals, which allow you to insert variables with ${variableName}.
//embed variables using ${variableName}.
console.log(
  `The student name is ${Student.firstname} ${Student.lastname}. He is currently ${Student.age} years old and has passed the course with ${Student.CGPA}. Kudos!`
);

//Can change values too despite of const
Student.firstname = "Amna";
Student.lastname = "Ali";

//initiliazing and printing an array
const Student_marks = [95, 100, 35, 48, 78, 56, 83];
Student_marks[4] *= 0.2;
console.log(Student_marks[4]);

//checking difference between == and ===
let z = 5,
  y = 5.0;
console.log(z === y);
y = "5";
console.log(z === y);

//string concatenation
console.log("Amna" + "Ali");

//ternary operator
GPA_CLASSIFER = Student.CGPA >= 2.0 ? "No warning" : "warning applied";
console.log(GPA_CLASSIFER);

//for of loop in JS
for (const i of Student_marks) {
  console.log(`i value is ${i}`);
}
