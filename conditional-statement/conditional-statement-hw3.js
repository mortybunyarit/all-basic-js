/* มอนตี้ทำสองโปรแกรมแรกเสร็จแล้วก็ได้รับ requirement เพิ่ม คือ ให้เขียนโปรแกรมคำนวณเกรดนักเรียน 
โดยมีเกณฑ์ดังนี้
คะแนน 90 ขึ้นไปจะได้เกรด A+
คะแนน 80 ขึ้นไปจะได้เกรด A
คะแนน 70 ขึ้นไปจะได้เกรด B
คะแนน 60 ขึ้นไปจะได้เกรด C
คะแนน 50 ขึ้นไปจะได้เกรด D
คะแนนต่ำกว่า 50 จะได้เกรด F

เมื่อโปรแกรมทำงานจะแสดงข้อความว่า 'คุณได้คะแนนสอบ 72 คะแนน ดังนั้นคุณได้เกรด B'
*/

// let score = 55; // test คะแนนจากตัวแปรนี้ได้เลย
// let grade = "";

// if (score >= 90) {
//   return (grade = "A+");
// } else if (score >= 80) {
//   return (grade = "A");
// } else if (score >= 70) {
//   return (grade = "B");
// } else if (score >= 60) {
//   return (grade = "C");
// } else if (score >= 50) {
//   return (grade = "D");
// } else if (score < 50) {
//   return (grade = "F");
// }

let score = 55; // test คะแนนจากตัวแปรนี้ได้เลย
let grade = "";
// ให้เขียน code ต่อเพื่อให้โปรแกรมทำงานได้ครบถ้วนตาม requirement

if (score >= 90) {
  grade = "A+";
} else if (score >= 80) {
  grade = "A";
} else if (score >= 70) {
  grade = "B";
} else if (score >= 60) {
  grade = "C";
} else if (score >= 50) {
  grade = "D";
} else {
  grade = "F";
}

/* สิ่งที่อยากให้แก้
1. ทำไงให้แสดงข้อความ 'คุณได้คะแนนสอบ xx คะแนน ดังนั้นคุณได้เกรด xx' 
   ไม่ว่าเขาจะได้คะแนนสอบเท่าไร เช่น 55 จะต้องเห็น 'คุณได้คะแนนสอบ 55 คะแนน ดังนั้นคุณได้เกรด D'
   68 จะต้องเห็น 'คุณได้คะแนนสอบ 68 คะแนน ดังนั้นคุณได้เกรด C'

2. ทำไงเกรดจะไม่เป็น undefined
*/
console.log(`คุณได้คะแนนสอบ ${score} คะแนน ดังนั้นคุณได้เกรด ${grade} `);

// ทวนเรื่อง return ว่าหลัง return โค้ดยังทำงานต่อไหม

// let number = 1;

// if (number === 1) {
//   console.log(number);
//   return console.log('มาจาก return') 
//   console.log('อันนี้จะเห็นไหม???')
// } 