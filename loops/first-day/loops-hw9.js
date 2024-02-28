/*
ให้เขียนโปรแกรมตาม requirement ต่อไปนี้ 
1. declare function ชื่อว่า findAvg ซึ่งมี parameter 1 ตัวคือ array
2. function นี้จะทำการบวกตัวเลขใน array และ return ค่าเฉลี่ยจากการบวกเลขทั้งหมด เช่น firstArray จะ return ผลลัพธ์เป็น 6
3. เมื่อ execute ฟังก์ชันและ console.log จะเห็นตัวเลข 6 บนหน้าจอ

ค่าเฉลี่่ยได้จากการนำตัวเลขทุกหลักมาบวกกัน จากนั้นนำไปหารด้วยจำนวนทั้งหมด เช่น 2 + 4 + 6 + 8 + 10 หารด้วย 5
*/

const firstArray = [2, 4, 6, 8, 10];
const secondArray = [12, 22, 32, 42, 52, 62, 72];

// เขียน function ที่นี่ได้เลยจ้า

console.log(findAvg(firstArray)); // 6
console.log(findAvg(secondArray)); // 42
