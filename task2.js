// Task - 2

// Write a JavaScript program to delete the rollno property from the following object. Also, print the object before or after deleting the property. 

// Sample object:
// student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 
// };

let student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(student)
delete student.rollno;
console.log(student)
