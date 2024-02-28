/* ให้ refactor function expression หรือ anonymous function ในข้อ 5 ให้อยู่ในรูปแบบ arrow function */

// let addTwoNumber = function (firstNumber, secondNumber) {
//     console.log(firstNumber + secondNumber);
//   };

//   addTwoNumber(1, 1);

let addTwoNumber = (firstNumber, secondNumber) =>
  console.log(firstNumber + secondNumber);

addTwoNumber(1, 1);
