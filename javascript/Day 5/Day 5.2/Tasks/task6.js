// Task 6: Calculate average marks and find students scoring 70 or more.

const students = [
  { name: "Asha", marks: 85 },
  { name: "Ravi", marks: 62 },
  { name: "Neha", marks: 74 },
  { name: "Imran", marks: 90 }
];

const totalMarks = students.reduce((total, student) => total + student.marks, 0);
const averageMarks = students.length ? totalMarks / students.length : 0;
const qualifiedStudents = students.filter(student => student.marks >= 70);

console.log("Average marks:", averageMarks);
console.log("Students scoring at least 70:", qualifiedStudents);
