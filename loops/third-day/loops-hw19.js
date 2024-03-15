/* ให้เขียนโปรแกรมเพื่อแสดงค่าที่อยู่ใน object หากโปรแกรมทำงานถูกต้อง จะต้องเห็นข้อความดังนี้

key name มีค่าเท่ากับ Alice
key age มีค่าเท่ากับ 15
key name มีค่าเท่ากับ Thomas
key age มีค่าเท่ากับ 17
key name มีค่าเท่ากับ Jane
key age มีค่าเท่ากับ 15

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

for (let i = 0; i < studentInfo.length; i++) {
  const student = studentInfo[i];

  console.log(`key name มีค่าเท่ากับ ${student.name}`);
  console.log(`key name มีค่าเท่ากับ ${student.age}`);
}

// for (let i = 0; i < studentInfo.length; i++) {
//   const student = studentInfo[i];

//   console.log(`key name มีค่าเท่ากับ ${student.name}`);
//   console.log(`key name มีค่าเท่ากับ ${student.age}`);
// }
