/*
ให้เขียนโปรแกรมตาม requirement ต่อไปนี้ 
1. declare function ชื่อว่า addBonus ซึ่งมี parameter 2 ตัวคือ arrayOfSalary กับ bonus
2. function นี้จะทำการเพิ่ม bonus เข้าไปใน salary แต่ละอัน และ return ค่า salary ใหม่ที่ผ่านการคำนวณแล้วออกมา 

*/

const adminSalaries = [18000, 16000, 17000, 18000, 15000];
let adminBonus = 1000;
const programmerSalaries = [22500, 22000, 32000, 40000, 50000, 65000];
let programmerBonus = 500;

// เขียน function ที่นี่ได้เลยจ้า


console.log(addBonus(adminSalaries, adminBonus)); // [ 19000, 17000, 18000, 19000, 16000 ]
console.log(addBonus(programmerSalaries, programmerBonus)); // [ 23000, 22500, 32500, 40500, 50500, 65500 ]