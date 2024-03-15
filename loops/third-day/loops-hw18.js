/* ให้เขียนโปรแกรมเพื่อแสดงค่าที่อยู่ใน object หากโปรแกรมทำงานถูกต้อง จะต้องเห็นข้อความดังนี้

key name มีค่าเท่ากับ Alice
key age มีค่าเท่ากับ 15

*/

const studentInfo = {
  name: "Alice",
  age: 15,
  subject: { math: "A", science: "B+", art: "C" },
};

// for (let key in studentInfo) {
//   console.log(`key ${key} มีค่าเท่ากับ ${studentInfo[key]}`);
// }

for (let key in studentInfo) {
  if (typeof studentInfo[key] === "object") {
    for (let subKey in studentInfo[key]) {
      console.log(`key ${subKey} มีค่าเท่ากับ ${studentInfo[key][subKey]}`);
    }
  } else {
    console.log(`key ${key} มีค่าเท่ากับ ${studentInfo[key]} `);
  }
}

// for (let key in studentInfo) {
//   if (typeof studentInfo[key] === "object") {
//     for (let subKey in studentInfo[key]) {
//       console.log(`key ${subKey} มีค่าเท่ากับ ${studentInfo[key][subKey]}`);
//     }
//   } else {
//     console.log(`key ${key} มีค่าเท่ากับ ${studentInfo[key]} `);
//   }
// }
