/* ให้ Refactor โค้ดในข้อ 1 โดยให้ใช้การประกาศฟังก์ชันแบบ Function Expression แทน */

// แก้ตรง return ให้ return ค่าออกมา ไม่ควรใช้ console.log แสดงค่าใน function 
let addTwoNumber = function (firstNumber, SecondNumber) {
  console.log(firstNumber + SecondNumber);
  return;
};
addTwoNumber(10, 5);
