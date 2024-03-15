/* ให้เขียนโปรแกรมเพื่อแสดงค่าที่อยู่ใน object หากโปรแกรมทำงานถูกต้อง จะต้องเห็นข้อความดังนี้

Alice
math grade = A
science grade = B+
art grade = C
Thomas
math grade = A
science grade = A+
art grade = A
Jane
math grade = B
science grade = B
art grade = A+

*/

const studentInfo = [
  {
    name: "Alice",
    age: 15,
    subject: { math: "A", science: "B+", art: "C" },
  },
  {
    name: "Thomas",
    age: 17,
    subject: { math: "A", science: "A+", art: "A" },
  },
  {
    name: "Jane",
    age: 15,
    subject: { math: "B", science: "B", art: "A+" },
  },
];

for (let student of studentInfo) {
  console.log(student.name);
  console.log(`math grade = ${student.subject.math}`);
  console.log(`science grade = ${student.subject.science}`);
  console.log(`art grade = ${student.subject.art}`);
}

// for (let student of studentInfo) {
//   console.log(student.name);
//   console.log(`math grade = ${student.subject.math}`);
//   console.log(`science grade = ${student.subject.science}`);
//   console.log(`art grade = ${student.subject.art}`);
// }
