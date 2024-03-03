/* ให้ comment เพื่อตอบคำถามว่า function ด้านล่างถูก Declare ด้วยวิธีใด
จากนั้นให้ refactor function ด้านล่างใหม่ในรูปแบบ function expression 
*/

//--------------------------------------------------------------

//Function นี้ถูก Declare ด้วยวิธี Function Declaration

// function addTwoNumber(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// }

// แก้ตรง return ให้ return ค่าออกมา ไม่ควรใช้ console.log แสดงค่าใน function

let addTwoNumber = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

console.log(addTwoNumber(1, 1));
