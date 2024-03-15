/* ให้เขียนโปรแกรมโดยใช้ for in loop เพื่อแสดงค่าที่อยู่ใน object petInfo
หากโปรแกรมทำงานถูกต้อง จะต้องเห็นข้อความดังนี้

key name มีค่าเท่ากับ น้องอ๋องแปด
key age มีค่าเท่ากับ 5
key breed มีค่าเท่ากับ ชิสุ
key identity มีค่าเท่ากับ น่ารักที่สุดในโลก

*/

const petInfo = {
  name: "น้องอ๋องแปด",
  age: 5,
  breed: "ชิสุ",
  identity: "น่ารักที่สุดในโลก555",
};

for (let key in petInfo) {
  console.log(`key ${key} มีค่าเท่ากับ ${petInfo[key]}`);
}

// for (let key in petInfo) {
//   console.log(`key ${key} มีค่าเท่ากับ ${petInfo[key]}`);
// }
