// Task 1: Convert a student object to JSON and parse it back.

const student = {
  name: "Aftab",
  course: "BCS",
  marks: 85
};

const jsonString = JSON.stringify(student);
console.log(jsonString);

const parsedStudent = JSON.parse(jsonString);
console.log(parsedStudent);
console.log(parsedStudent.name);
