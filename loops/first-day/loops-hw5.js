/* ให้เขียนโปรแกรมโดยใช้ for in loop เพื่อแสดงค่าที่อยู่ใน object student
หากโปรแกรมทำงานถูกต้อง จะต้องเห็นข้อความดังนี้

value for key name is Jane
value for key age is 20
value for key grade is A
value for key subject is Math

*/

const student = {
  name: "Jane",
  age: 20,
  grade: "A",
  subject: "Math",
};

for (let key in student) {
  console.log(" Value for key " + key + " is " + student[key] + ".");
}
