/* ให้ Refactor โค้ดในข้อ 1 โดยใช้การประกาศฟังก์ชันในรูปแบบ Arrow Function แทน */

// แก้ตรง return ให้ return ค่าออกมา ไม่ควรใช้ console.log แสดงค่าใน function
let addNumber = (firstNumber, secondNumber) => {
  console.log(firstNumber + secondNumber);
  return;
};

addNumber(10, 5);
