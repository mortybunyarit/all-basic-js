/*
1. สร้างตัวแปร firstName เก็บค่า ชื่อจริง user โดยเป็นตัวแปรที่สามารถ reassign ค่าใหม่ได้ เช่น ตอนแรก user ชื่อ John ต่อมาเปลี่ยนชื่อเป็น Jane 
2. สร้างตัวแปร lastName เก็บค่า นามสกุล user โดยใช้ logic เดียวกับชื่อ และมีค่าเป็น Doe 
3. สร้างตัวแปร country เก็บค่า ประเทศบ้านเกิด user ในที่นี้ให้มีค่าเป็น Thailand ตัวแปรนี้ต้องเปลี่ยนแปลงหรือ reassign ค่าใหม่ไม่ได้
4. ให้ console.log() ข้อความใน format  “Hi, I’m ชื่อจริง นามสกุล from ประเทศ” ด้วยวิธี String Concatenation เมื่อทำถูกต้องจะเห็นข้อความ “Hi, I’m Jane Doe from Thailand”
5. ให้ console.log() ข้อความใน format  “Hi, I’m ชื่อจริง นามสกุล from ประเทศ” ด้วยวิธี String Template Literal เมื่อทำถูกต้องจะเห็นข้อความ “Hi, I’m Jane Doe from Thailand”
6. สร้างตัวแปร userDetail เก็บค่า ข้อความที่อยู่ใน format  “Hi, I’m ชื่อจริง นามสกุล from ประเทศ” โดยใช้ String Concatenation หรือ String Template Literal ก็ได้
7. ให้ console.log() ตัวแปร userDetail	
*/


let firstName = "John";

firstName = "jane";

let lastName = "Doe";

const country = "Thailand";

let userDetail = " Hi, I'm " + firstName + " " + lastName + " from " + country;

console.log(" Hi, I'm " + firstName + " " + lastName + " from " + country);
console.log(` Hi, I'm ${firstName} ${lastName} from ${country} `);
console.log(userDetail);