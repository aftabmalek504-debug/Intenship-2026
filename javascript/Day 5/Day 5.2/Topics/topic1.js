// JSON conversion and array transformation

const student = {
  id: 1,
  name: "Asha",
  marks: 85,
  skills: ["JavaScript", "HTML"]
};

const jsonText = JSON.stringify(student, null, 2);
console.log(jsonText);

const parsedStudent = JSON.parse(jsonText);
console.log(parsedStudent.name);

// filter() selects items, map() creates transformed values,
// sort() orders an array, and reduce() combines values into one result.
