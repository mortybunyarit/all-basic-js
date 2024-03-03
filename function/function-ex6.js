/* ให้ refactor function expression หรือ anonymous function ในข้อ 5 ให้อยู่ในรูปแบบ arrow function */

// let addTwoNumber = function (firstNumber, secondNumber) {
//     console.log(firstNumber + secondNumber);
//   };

//   addTwoNumber(1, 1);

// แก้ตรง return ให้ return ค่าออกมา ไม่ควรใช้ console.log แสดงค่าใน function

let addTwoNumber = (firstNumber, secondNumber) => firstNumber + secondNumber;

console.log(addTwoNumber(1, 1));
